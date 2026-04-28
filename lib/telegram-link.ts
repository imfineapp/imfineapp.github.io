import { Attribution, encodeAttribution } from './attribution';

const MAX_PAYLOAD_CHARS = 512;

export function generateTelegramLink(
  attribution: Attribution | null,
  botUsername: string = 'menhausen_app_bot'
): string {
  const sanitizedBot = botUsername.replace(/[^a-zA-Z0-9_]/g, '');
  const baseUrl = `https://t.me/${sanitizedBot}/app`;
  
  if (!attribution) {
    return baseUrl;
  }

  const payload = encodeURIComponent(encodeAttribution(attribution));

  if (payload.length > MAX_PAYLOAD_CHARS) {
    const truncated = truncateAttribution(attribution);
    const newPayload = encodeURIComponent(encodeAttribution(truncated));
    return `${baseUrl}?startapp=${newPayload}`;
  }

  return `${baseUrl}?startapp=${payload}`;
}

function truncateAttribution(attr: Attribution): Attribution {
  const result: Attribution = {
    v: 1,
    t: attr.t,
    s: attr.s,
    m: attr.m,
    c: attr.c,
    r: attr.r,
  };

  const encoded = encodeURIComponent(encodeAttribution(result));
  if (encoded.length <= MAX_PAYLOAD_CHARS) {
    return result;
  }

  delete result.r;
  if (encodeURIComponent(encodeAttribution(result)).length <= MAX_PAYLOAD_CHARS) {
    return result;
  }

  delete result.c;
  if (encodeURIComponent(encodeAttribution(result)).length <= MAX_PAYLOAD_CHARS) {
    return result;
  }

  delete result.m;
  if (encodeURIComponent(encodeAttribution(result)).length <= MAX_PAYLOAD_CHARS) {
    return result;
  }

  return { v: 1, t: attr.t };
}
