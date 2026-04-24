# MiniApp Attribution Integration Instructions

## Context

This repository contains the **Telegram MiniApp** that receives attribution data from the landing page via the Telegram Bot.

## Pipeline Flow

```
Landing Page (this repo)
        │
        │ URL: https://t.me/menhausen_app_bot/app?startapp=<base64>
        ▼
   Telegram Bot (separate repo)
        │
        │ Receives ?startapp= param from Telegram WebApp
        │ Decodes and transforms to ?attr= for MiniApp
        │ URL: https://your-miniapp.com/?attr=<base64>&user=<telegram_id>
        ▼
   Telegram MiniApp (external)
        │
        │ Extract attribution from ?attr= param, init PostHog, track events
        ▼
   PostHog Analytics
```

**Note:** The parameter name changes from `?startapp=` (Telegram WebApp standard) to `?attr=` (MiniApp contract). The Bot handles this transformation.

## Your Task

Implement attribution handling in this MiniApp:

### 1. Extract Attribution from URL

The MiniApp receives attribution via URL query parameters:

```
https://your-miniapp.com/?attr=<base64>&user=<telegram_id>
```

| Param | Description | Example |
|-------|-------------|---------|
| `attr` | Base64-encoded JSON with attribution data | `eyJzIjoiZ29vZ2xlIiwi...` |
| `user` | Telegram user ID | `123456789` |

**Attribution Schema (decoded from `attr`):**

```typescript
interface Attribution {
  s?: string;   // utm_source
  m?: string;   // utm_medium
  c?: string;   // utm_campaign
  r?: string;   // referrer domain
  t: number;    // timestamp (unix seconds)
  v: 1;         // schema version
}
```

### 2. Get Telegram User Context

Use `Telegram.WebApp.initDataUnsafe` to get user info:

```typescript
const tgUser = window.Telegram?.WebApp?.initDataUnsafe?.user;
const userId = tgUser?.id?.toString() || params.get('user');
```

### 3. Initialize PostHog

Install: `npm install posthog-js`

```typescript
import posthog from 'posthog-js';

export function initAnalytics(attr: Attribution | null, userId: string) {
  posthog.init('YOUR_POSTHOG_API_KEY', {
    api_host: 'https://app.posthog.com',
    person_profiles: 'identified_only',
    capture_pageview: false, // Manual pageview tracking
  });

  // Identify user with attribution as person properties
  posthog.identify(userId, {
    utm_source: attr?.s || null,
    utm_medium: attr?.m || null,
    utm_campaign: attr?.c || null,
    original_referrer: attr?.r || null,
    attribution_timestamp: attr?.t || null,
    first_touch_source: attr?.s || null,
    first_touch_medium: attr?.m || null,
    first_touch_campaign: attr?.c || null,
  });
}
```

### 4. Track Events with Attribution

Every tracked event should include attribution properties:

```typescript
export function trackEvent(
  eventName: string,
  properties?: Record<string, unknown>
) {
  const attribution = getAttribution(); // From your state/context
  
  posthog.capture(eventName, {
    ...properties,
    utm_source: attribution?.s || null,
    utm_medium: attribution?.m || null,
    utm_campaign: attribution?.c || null,
  });
}
```

### 5. Implement Attribution Decoding Utility

```typescript
// lib/attribution.ts

export interface Attribution {
  s?: string;
  m?: string;
  c?: string;
  r?: string;
  t: number;
  v: 1;
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
```

### 6. App Initialization Example

```typescript
// main.tsx or App.tsx

import { useEffect, useState } from 'react';
import { decodeAttribution, Attribution } from './lib/attribution';
import { initAnalytics, trackEvent } from './lib/analytics';

function App() {
  const [attribution, setAttribution] = useState<Attribution | null>(null);
  const [userId, setUserId] = useState<string>('');

  useEffect(() => {
    // Extract from URL params
    const params = new URLSearchParams(window.location.search);
    const attrParam = params.get('attr');
    const userParam = params.get('user');

    // Decode attribution
    const decoded = decodeAttribution(attrParam || '');
    setAttribution(decoded);

    // Get user ID from Telegram or URL
    const tgUser = (window as any).Telegram?.WebApp?.initDataUnsafe?.user;
    const id = tgUser?.id?.toString() || userParam || 'anonymous';
    setUserId(id);

    // Initialize PostHog
    initAnalytics(decoded, id);

    // Track app opened
    trackEvent('miniapp_opened', {
      source: decoded?.s || 'direct',
      medium: decoded?.m || null,
      campaign: decoded?.c || null,
      user_id: id,
    });
  }, []);

  // ... rest of app
}
```

## Required Files to Create

| File | Purpose |
|------|---------|
| `src/lib/attribution.ts` | Attribution types + decode utility |
| `src/lib/analytics.ts` | PostHog init + tracking helpers |
| Update `src/App.tsx` | Initialize analytics on mount |

## Events to Track

| Event Name | When | Properties |
|------------|------|------------|
| `miniapp_opened` | App loads | source, medium, campaign, user_id |
| `signup_completed` | User signs up | source, medium, campaign |
| `conversion` | Purchase/subscription | source, medium, campaign, revenue |

## Testing

To test locally without Telegram:

```
http://localhost:3000/?attr=eyJzIjoiZ29vZ2xlIiwibSI6ImNwYyIsImMiOiJzdW1tZXIiLCJ0IjoxNzEzMDAwMDAwMCwidiI6MX0=&user=123456
```

Decoded: `{"s":"google","m":"cpc","c":"summer","t":1713000000,"v":1}`

## PostHog Verification

1. Go to your PostHog dashboard
2. Find the user by `user_id` property
3. Check person properties show UTM values
4. Create cohort filtered by `utm_source`
5. Create funnel: `miniapp_opened` → `conversion` grouped by source

## Notes

- Attribution is **first-touch** — captured once at landing, passed through entire funnel
- User ID comes from Telegram (preferred) or URL fallback
- PostHog person properties persist across sessions
- Events include attribution for real-time segmentation

## Telegram Direct Link Requirements

- Use `?startapp=` parameter (not `?start=`)
- Max length: 512 characters for `startapp` parameter
- Bot username: `menhausen_app_bot`
- Example full link: `https://t.me/menhausen_app_bot/app?startapp=eyJzIjoiZmFjZWJvb2siLCJ0IjoxNzc2MjcwOTkwLCJ2IjoxfQ`

## Console Logging (for debugging)

```javascript
console.log('[Attribution] Start param:', startParam);
console.log('[Attribution] Decoded attribution:', attribution);
```
