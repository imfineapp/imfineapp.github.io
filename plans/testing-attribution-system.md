# Plan: Local Testing of Attribution System

## Overview

Тестируем только **сторону landing page** (этот проект). Bot и MiniApp — отдельные репозитории.

---

## Testing Areas

### 1. UTM Capture

| Test | URL | Expected in localStorage |
|------|-----|------------------------|
| Full UTM | `/?utm_source=google&utm_medium=cpc&utm_campaign=summer` | `{s:"google",m:"cpc",c:"summer",...}` |
| Partial UTM | `/?utm_source=facebook` | `{s:"facebook",...}` |
| No UTM | `/?page=test` | No storage created |
| Referrer | External site → landing | `{r:"facebook.com",...}` |
| Self-referral | Internal link → landing | `r` field empty |

### 2. First-Touch Persistence

| Test | Steps | Expected |
|------|-------|----------|
| Multiple visits | Visit with UTM → return without UTM | Original attribution preserved |
| Overwrite attempt | Visit with UTM A → visit with UTM B | Still UTM A (first-touch) |
| TTL expiry | Wait 31+ days | Storage cleared, fresh capture |

### 3. Telegram Link Generation

| Test | Attribution | Expected Link |
|------|-------------|---------------|
| No attribution | `null` | `https://t.me/menhausen_app_bot/app` |
| With UTM | `{s:"google",m:"cpc",c:"summer",t:1234567890}` | Contains `?start=<base64>` |
| Long campaign | Campaign > 50 chars | Truncated to < 64 bytes |
| Empty botUsername | `""` | Sanitized, link works |

### 4. Encoding/Decoding

| Test | Input | Expected |
|------|-------|----------|
| Valid payload | Base64 encoded | Correct JSON decoded |
| Invalid base64 | `not-valid-base64!` | Returns `null`, no crash |
| Wrong schema | `{"v":99,...}` | Returns `null` |
| Empty string | `""` | Returns `null` |

---

## How to Test

### Browser DevTools Method

1. **Open DevTools** → Application → localStorage
2. **Clear** `attribution_v1` before each test
3. **Navigate** to URLs with different UTM params
4. **Check** localStorage after page load
5. **Copy** Telegram link href and decode base64

### Console Debugging

Add temporary debug in browser console:

```javascript
// Check storage
JSON.parse(localStorage.getItem('attribution_v1'))

// Get Telegram link
document.querySelector('[data-attribution-source]')?.href

// Decode payload
JSON.parse(atob('PASTE_BASE64_HERE'.replace(/-/g, '+').replace(/_/g, '/')))
```

### Manual Test Script

Save as browser bookmarklet:

```javascript
javascript:(function(){
  const attr = localStorage.getItem('attribution_v1');
  const link = document.querySelector('a[href*="t.me"]');
  console.log('Storage:', attr);
  console.log('Link:', link?.href);
  if(link?.href?.includes('start=')){
    const payload = link.href.split('start=')[1];
    try {
      console.log('Decoded:', JSON.parse(atob(payload.replace(/-/g,'+').replace(/_/g,'/'))));
    } catch(e) { console.log('Invalid payload'); }
  }
})();
```

---

## Edge Cases to Verify

| Case | Test Method | Expected |
|------|-------------|----------|
| Direct open | Clear storage, visit `/` | No `attribution_v1` |
| Invalid URL chars | UTM with `utm_source=<script>` | Sanitized in storage |
| URL encoding | `utm_source=hello%20world` | Decoded to `"hello world"` |
| Payload > 64 bytes | Very long campaign name | Truncated correctly |
| Emoji in UTM | `utm_campaign=🔥` | Handled without crash |

---

## Files to Inspect

| File | What to Verify |
|------|----------------|
| `client/src/lib/attribution.ts` | TTL logic, encode/decode |
| `client/src/lib/telegram-link.ts` | URL generation, truncation |
| `client/src/hooks/useAttribution.ts` | First-touch logic |
| Page buttons | `data-attribution-source` attribute present |

---

## Success Criteria

- [ ] Direct visit → no storage
- [ ] UTM visit → storage created with correct values
- [ ] Return visit → original attribution preserved
- [ ] Telegram link contains valid base64 payload
- [ ] Payload decodes to valid JSON
- [ ] All CTA buttons have `data-attribution-source`
- [ ] No console errors during any scenario

---

## Quick Test Checklist (5 min)

1. Clear localStorage
2. Visit: `/?utm_source=google&utm_medium=cpc&utm_campaign=test`
3. Check localStorage `attribution_v1`
4. Click any Telegram CTA
5. Copy link, decode base64
6. Verify decoded matches storage
7. Visit homepage without UTM
8. Click CTA → verify same attribution

---

## Status

- [ ] Testing plan created
- [ ] In progress
- [ ] Completed
