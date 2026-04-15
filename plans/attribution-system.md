# planOS: End-to-End Attribution System

## Context

- **Landing:** React SPA (this repo) with GA4 + Yandex Metrika
- **Telegram Bot:** Separate repo (controlled by user)
- **Telegram MiniApp:** Separate repo (controlled by user)
- **Analytics:** GA4/Yandex on landing, PostHog in MiniApp

## Goals

1. Capture UTM/source attribution on landing page visit
2. Persist attribution in client storage (first-touch, 30-day TTL)
3. Encode attribution into Telegram deep link
4. Transfer attribution to MiniApp via URL params
5. PostHog tracks MiniApp events with attribution properties

## Architecture

```
Landing (this repo)          Bot (separate)           MiniApp (separate)
┌─────────────────┐         ┌──────────────┐         ┌──────────────┐
│ UTM Capture     │ ──link─▶│ Parse params │ ──URL──▶│ Extract attr │
│ localStorage    │         │ Validate     │         │ PostHog init │
│ Deep Link Gen   │         │ Serve URL    │         │ Track events │
└─────────────────┘         └──────────────┘         └──────────────┘
```

## Attribution Schema

```typescript
interface Attribution {
  s?: string;   // utm_source
  m?: string;   // utm_medium
  c?: string;   // utm_campaign
  r?: string;   // referrer (domain only)
  t?: number;   // timestamp (unix seconds)
  v: 1;         // schema version
}
```

**Encoding:** `base64url(JSON.stringify({...}))`

## Files to Create

| File | Purpose |
|------|---------|
| `client/src/lib/attribution.ts` | Types + parsing logic |
| `client/src/hooks/useAttribution.ts` | UTM capture + storage hook |
| `client/src/lib/telegram-link.ts` | Deep link encoder |
| `client/src/components/telegram-cta.tsx` | Reusable CTA button |

## Implementation Steps

### Step 1: Attribution Library (`client/src/lib/attribution.ts`) ✅

- [x] Define `Attribution` interface
- [x] Create `parseUrlParams()` - extract UTM from URL
- [x] Create `captureReferrer()` - normalize referrer domain
- [x] Create `encodeAttribution()` - base64url encoder
- [x] Create `decodeAttribution()` - base64url decoder

### Step 2: Attribution Hook (`client/src/hooks/useAttribution.ts`) ✅

- [x] Read existing attribution from localStorage
- [x] On mount: parse URL for new UTM params
- [x] First-touch: only save if no existing attribution
- [x] 30-day TTL enforcement
- [x] Return `{ attribution, updateAttribution }`

### Step 3: Telegram Link Generator (`client/src/hooks/useAttribution.ts`) ✅

- [x] `generateTelegramLink(attribution, botUsername)` 
- [x] Compress attribution to safe payload
- [x] Handle overflow (>64 bytes): truncate, drop optional fields
- [x] Build URL: `https://t.me/{bot}/app?start={payload}`

### Step 4: CTA Component (`client/src/components/telegram-cta.tsx`) ✅

- [x] Use `useAttribution()` hook
- [x] Generate dynamic Telegram link
- [x] Render as button with variant/size props
- [x] Fallback text: "Open in Telegram"

### Step 5: Integrate in Pages ✅

- [x] `home.tsx` - Replace 3 static links with `<TelegramCTA>`
- [x] `layout.tsx` - Replace header and mobile nav links
- [x] `pricing.tsx` - Replace 2 static links
- [x] `stress-cards.tsx` - Replace 1 static link
- [x] `stress-test.tsx` - Replace 1 static link
- [x] `stress-management.tsx` - Replace 1 static link

## External Contracts

### Bot Repo (separate) - Input

```
https://t.me/menhausen_app_bot/app?start=<base64payload>
```

Bot must:
1. Parse `start` param
2. Decode base64 → Attribution object
3. Pass decoded payload to MiniApp via URL params

**Example Bot Handler (Grammy):**
```typescript
// Decode the start param
const attrPayload = ctx.startParam; // base64 encoded
const attr = JSON.parse(Buffer.from(attrPayload, 'base64url').toString());

// Serve MiniApp with attribution
const miniAppUrl = `https://your-miniapp.com/?attr=${attrPayload}&user=${ctx.from.id}`;
await ctx.reply(`Open app: ${miniAppUrl}`);
```

### MiniApp Repo (separate) - Input

```
https://miniapp.domain/?attr=<base64payload>&user=<telegram_user_id>
```

MiniApp must:
1. Decode `attr` param → Attribution object
2. Get user from `Telegram.WebApp.initDataUnsafe.user`
3. Initialize PostHog with `distinct_id = user.id`
4. Set person properties: `utm_source`, `utm_medium`, `utm_campaign`, `original_source`
5. Include attribution in every tracked event

**Example MiniApp Integration:**
```typescript
import posthog from 'posthog-js';

// Extract attribution from URL
const params = new URLSearchParams(window.location.search);
const attrPayload = params.get('attr');
const attr = JSON.parse(atob(attrPayload.replace(/-/g, '+').replace(/_/g, '/')));

// Initialize PostHog
posthog.init('YOUR_API_KEY', { api_host: 'https://app.posthog.com' });

// Identify user with attribution properties
posthog.identify(tgUser.id.toString(), {
  utm_source: attr.s,
  utm_medium: attr.m,
  utm_campaign: attr.c,
  original_referrer: attr.r,
  attribution_timestamp: attr.t,
});

// Track events with attribution
posthog.capture('miniapp_opened', {
  utm_source: attr.s,
  utm_medium: attr.m,
  utm_campaign: attr.c,
});
```

## Edge Cases

| Scenario | Handling |
|----------|----------|
| Direct open (no UTM) | Source = "direct", empty UTM |
| Payload > 64 bytes | Truncate campaign, drop referrer |
| Multiple visits | First-touch: preserve original |
| Invalid base64 | Ignore, treat as direct |
| Expired TTL | Clear storage, capture fresh |

## Testing Checklist

- [ ] Direct visit: no attribution stored
- [ ] UTM visit: attribution captured and stored
- [ ] Return visit: original attribution preserved
- [ ] Telegram link: contains valid base64 payload
- [ ] Payload under 64 bytes
- [ ] 30-day expiry works
