const STORAGE_KEY = 'attribution_v1';
const TTL_DAYS = 30;

export interface Attribution {
  s?: string;
  m?: string;
  c?: string;
  r?: string;
  t: number;
  v: 1;
}

function parseUrlParams(): Partial<Attribution> {
  if (typeof window === 'undefined') return {};

  const params = new URLSearchParams(window.location.search);
  const utmSource = params.get('utm_source');
  const utmMedium = params.get('utm_medium');
  const utmCampaign = params.get('utm_campaign');

  if (!utmSource && !utmMedium && !utmCampaign) {
    return {};
  }

  return {
    s: utmSource || undefined,
    m: utmMedium || undefined,
    c: utmCampaign || undefined,
    r: captureReferrer(),
    t: Math.floor(Date.now() / 1000),
    v: 1,
  };
}

function captureReferrer(): string | undefined {
  if (typeof document === 'undefined') return undefined;
  
  const referrer = document.referrer;
  if (!referrer) return undefined;

  try {
    const url = new URL(referrer);
    if (url.hostname !== window.location.hostname) {
      return url.hostname.replace(/^www\./, '');
    }
  } catch {
    return undefined;
  }
}

export function getAttribution(): Attribution | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;

    const parsed: Attribution = JSON.parse(stored);

    if (parsed.v !== 1) return null;

    const expiry = parsed.t + TTL_DAYS * 24 * 60 * 60;
    if (Math.floor(Date.now() / 1000) > expiry) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }

    return parsed;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return null;
  }
}

export function saveAttribution(attribution: Attribution): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
}

export function parseAndStoreAttribution(): Attribution | null {
  const fromUrl = parseUrlParams();
  
  if (Object.keys(fromUrl).length === 0) {
    return getAttribution();
  }

  const existing = getAttribution();
  
  if (existing) {
    return existing;
  }

  const attribution: Attribution = {
    s: fromUrl.s,
    m: fromUrl.m,
    c: fromUrl.c,
    r: fromUrl.r,
    t: fromUrl.t || Math.floor(Date.now() / 1000),
    v: 1,
  };

  saveAttribution(attribution);
  return attribution;
}

export function encodeAttribution(attr: Attribution | null): string {
  if (!attr) return '';

  const payload: Attribution = {
    s: attr.s,
    m: attr.m,
    c: attr.c,
    r: attr.r,
    t: attr.t,
    v: 1,
  };

  const json = JSON.stringify(payload);
  return btoa(json).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export function decodeAttribution(encoded: string): Attribution | null {
  if (!encoded) return null;

  try {
    let base64 = encoded.replace(/-/g, '+').replace(/_/g, '/');
    while (base64.length % 4) base64 += '=';
    
    const json = atob(base64);
    const parsed = JSON.parse(json);

    if (parsed.v !== 1) return null;

    return {
      s: parsed.s,
      m: parsed.m,
      c: parsed.c,
      r: parsed.r,
      t: parsed.t,
      v: 1,
    };
  } catch {
    return null;
  }
}

export function getSourceLabel(attr: Attribution | null): string {
  if (!attr) return 'direct';
  if (attr.s) return attr.s;
  if (attr.r) return `referral (${attr.r})`;
  return 'direct';
}
