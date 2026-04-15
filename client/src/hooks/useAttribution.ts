import { useState, useEffect } from 'react';
import { Attribution, parseAndStoreAttribution, getAttribution, saveAttribution } from '@/lib/attribution';

const MAX_PAYLOAD_BYTES = 64;

export function useAttribution() {
  const [attribution, setAttribution] = useState<Attribution | null>(null);

  useEffect(() => {
    const parsed = parseAndStoreAttribution();
    setAttribution(parsed);
  }, []);

  const updateAttribution = (updates: Partial<Attribution>) => {
    const existing = getAttribution();
    const updated: Attribution = {
      t: Math.floor(Date.now() / 1000),
      v: 1,
      ...existing,
      ...updates,
    };
    saveAttribution(updated);
    setAttribution(updated);
  };

  return { attribution, updateAttribution };
}

export function generateTelegramLink(
  attribution: Attribution | null,
  botUsername: string = 'menhausen_app_bot'
): string {
  const baseUrl = `https://t.me/${botUsername}/app`;
  
  if (!attribution) {
    return baseUrl;
  }

  const payload = encodeURIComponent(encodeAttribution(attribution));

  if (payload.length > MAX_PAYLOAD_BYTES) {
    const truncated = truncateAttribution(attribution);
    const newPayload = encodeURIComponent(encodeAttribution(truncated));
    return `${baseUrl}?start=${newPayload}`;
  }

  return `${baseUrl}?start=${payload}`;
}

function truncateAttribution(attr: Attribution): Attribution {
  const base = `{"v":1,"t":${attr.t}`;
  const baseLength = base.length + 5;

  let availableBytes = MAX_PAYLOAD_BYTES - baseLength;
  
  const result: Partial<Attribution> = { v: 1, t: attr.t };

  if (attr.s && availableBytes > 0) {
    const field = `,"s":"${attr.s}"`;
    if (availableBytes >= field.length) {
      result.s = attr.s;
      availableBytes -= field.length;
    }
  }

  if (attr.m && availableBytes > 0) {
    const field = `,"m":"${attr.m}"`;
    if (availableBytes >= field.length) {
      result.m = attr.m;
      availableBytes -= field.length;
    }
  }

  if (attr.c && availableBytes > 3) {
    const truncated = attr.c.substring(0, Math.min(attr.c.length, availableBytes - 4));
    if (truncated.length > 0) {
      result.c = truncated;
    }
  }

  return result as Attribution;
}

function encodeAttribution(attr: Attribution): string {
  const payload = {
    s: attr.s,
    m: attr.m,
    c: attr.c,
    r: attr.r,
    t: attr.t,
    v: attr.v,
  };

  const json = JSON.stringify(payload);
  return btoa(json).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
