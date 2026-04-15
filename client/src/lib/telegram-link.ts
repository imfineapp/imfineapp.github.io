import { Attribution, encodeAttribution } from './attribution';

const MAX_PAYLOAD_BYTES = 64;

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
