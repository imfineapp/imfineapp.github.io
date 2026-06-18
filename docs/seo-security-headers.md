# SEO security headers (Cloudflare)

GitHub Pages cannot set custom HTTP response headers. Because `menhausen.com` is fronted by **Cloudflare**, apply the settings below in the Cloudflare dashboard.

The site also ships a **CSP meta tag** in [`client/index.html`](../client/index.html) as a fallback. Cloudflare response headers are authoritative when both are present.

## 1. HSTS (HTTP Strict Transport Security)

**Path:** SSL/TLS → Edge Certificates → HTTP Strict Transport Security (HSTS)

| Setting | Value |
|--------|--------|
| Enable HSTS | On |
| Max Age | `31536000` (12 months) |
| Include subdomains | On |
| Preload | On (optional; only after verifying HTTPS everywhere) |
| No-Sniff header | On |

Equivalent header:

```http
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

## 2. X-Content-Type-Options

**Path:** Rules → Transform Rules → **Modify response header**

Create a rule that matches hostname `menhausen.com` (and `www.menhausen.com` if used):

| Action | Header name | Value |
|--------|-------------|--------|
| Set static | `X-Content-Type-Options` | `nosniff` |

## 3. Content-Security-Policy (response header)

Use the same Transform Rules mechanism. Start with the policy below (matches the in-app meta tag). Tighten later if you remove inline scripts.

```http
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://mc.yandex.ru https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://mc.yandex.ru https://static.cloudflareinsights.com; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'
```

### When adding a new third-party script or API

1. Update the CSP in `client/index.html`.
2. Update this document and the Cloudflare Transform Rule.
3. Update [`.cursor/rules/seo-landing.mdc`](../.cursor/rules/seo-landing.mdc) checklist if needed.

## 4. Optional hardening headers

| Header | Recommended value |
|--------|-------------------|
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` |
| `X-Frame-Options` | `DENY` (or rely on CSP `frame-src 'none'`) |

## 5. Verification

After applying Cloudflare rules, verify headers:

```bash
curl -sI https://menhausen.com/ | grep -iE 'strict-transport|content-security|x-content-type'
```

Re-run your SEO crawl tool to confirm HSTS / CSP / nosniff warnings are cleared for `menhausen.com` HTML responses.

**Note:** Third-party assets (Google Fonts, gtag.js, Cloudflare Insights) are served from their own origins; their headers cannot be controlled from this repo.
