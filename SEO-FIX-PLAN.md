# SEO Fix Plan: menhausen.com

## Overview

**Business Type:** SaaS (stress management app via Telegram)
**Stack:** Vite + React 19 SPA, Wouter routing, react-i18next, GitHub Pages + GitHub Actions
**Goal:** Optimize current Vite stack with SSG for unique meta tags per page

---

## Phase 0: Quick Wins (Day 0) - No Code Changes Required

### Step 0.1: Fix robots.txt ⚠️ CLOUDFLARE-LEVEL ISSUE
- [x] File: `client/public/robots.txt` - **FILE IS CLEAN**
- [x] Issue: Cloudflare CDN is adding additional restrictive rules at edge
- [x] Fix: Requires Cloudflare dashboard adjustment (not a file issue)
- [ ] **Action Required:** Go to Cloudflare Dashboard > Bots > Bot Management Settings or Page Rules to remove the ClaudeBot/GPTBot disallows

### Step 0.2: Descriptive Alt Text ✅ COMPLETED
- [x] File: `client/src/pages/home.tsx` line ~98
- [x] Issue: Generic i18n key used as alt text
- [x] Fix: Descriptive alt text for hero image
- [x] Changed from: `alt={t('common.alt_hero_image')}`
- [x] Changed to: `alt="Menhausen app interface showing stress management card with cognitive reframing technique for burnout relief"`

---

## Phase 1: SSG Implementation (Week 1) - Critical ✅ COMPLETED

### Step 1.1: Install vite-plugin-ssg ✅ DONE
- [x] Installed `vite-plugin-ssg` (later found it requires Vue architecture)
- [x] Installed `vite-prerender-plugin` (framework-agnostic but requires custom setup)

### Step 1.2: Create Custom SSG Plugin ✅ DONE
- [x] File: `plugins/vite-ssg-plugin.ts`
- [x] Custom Vite plugin that generates static HTML pages with unique meta tags
- [x] Reads route metadata from `plugins/vite-ssg-plugin.ts`
- [x] Injects unique title, description, OG tags, canonical, Twitter Card, JSON-LD

### Step 1.3: Create SEO Route Configuration ✅ DONE
- [x] File: `client/src/lib/seo-routes.ts`
- [x] Centralized route metadata for all pages
- [x] Includes: home, stress-cards, stress-management, stress-test, blog, blog posts, pricing, techniques, compare, professions, privacy, terms, contact
- [x] Blog posts: stress-management-techniques, burnout-signs-men, anxiety-vs-stress

### Step 1.4: Update vite.config.ts ✅ DONE
- [x] Added import for `ssgPlugin`
- [x] Added `ssgPlugin()` to plugins array

### Step 1.5: Test SSG Build Locally ✅ DONE
- [x] Command: `npm run build:client`
- [x] Successfully generated 15 pre-rendered pages
- [x] All pages have unique titles and canonical URLs

**Generated Pages:**
```
dist/
├── index.html                                    (/)
├── stress-cards/index.html                       (/stress-cards)
├── stress-management/index.html                  (/stress-management)
├── stress-test/index.html                        (/stress-test)
├── blog/index.html                               (/blog)
├── pricing/index.html                            (/pricing)
├── techniques/index.html                         (/techniques)
├── compare/index.html                            (/compare)
├── professions/index.html                        (/professions)
├── privacy/index.html                            (/privacy)
├── terms/index.html                              (/terms)
├── contact/index.html                            (/contact)
├── blog/stress-management-techniques/index.html  (/blog/stress-management-techniques)
├── blog/burnout-signs-men/index.html             (/blog/burnout-signs-men)
├── blog/anxiety-vs-stress/index.html             (/blog/anxiety-vs-stress)
└── 404.html                                     (SPA fallback)
```

### Step 1.6: GitHub Actions Workflow ✅ DONE (No changes needed)
- [x] Existing workflow runs `npm run build:client` which now includes SSG
- [x] Deploy step automatically deploys the `dist/` folder with pre-rendered pages

### Step 1.7: Verify Deployed Site ⏳ PENDING (After deploy)
- [ ] Deploy to GitHub Pages
- [ ] Test: `curl -s https://menhausen.com/blog/anxiety-vs-stress/ | grep '<title>'`
- [ ] Expected: `<title>Anxiety vs Stress: What's the Difference? | Menhausen</title>`

---

## Phase 2: Schema.org Cleanup (Week 2) ✅ COMPLETED

### Step 2.1: Remove Deprecated HowTo Schema ✅ DONE
- [x] Removed `case "howto":` from structured-data.tsx
- [x] Removed `howto` from type union
- [x] Removed `howto` data interface
- [x] Removed `<StructuredData type="howto" />` from home.tsx
- [x] Removed `<StructuredData type="howto" />` from technique-detail.tsx
- [x] Note: HowTo schema deprecated Sept 2023

### Step 2.2: Add Product Schema to Stress Cards Page ✅ DONE
- [x] Added import for StructuredData to stress-cards.tsx
- [x] Added `<StructuredData type="product" />`
- [x] Added ItemList schema for stress cards

### Step 2.3: Add Organization SameAs Links ✅ DONE
- [x] Added Telegram bot URL (`https://t.me/menhausen_app_bot`) to Organization schema
- [x] Updated SSG plugin to include sameAs in static JSON-LD

### Additional Schema Improvements
- [x] Homepage now has: WebSite, Product, Organization JSON-LD
- [x] Stress-cards has: WebSite, Product JSON-LD
- [x] Pricing has: WebSite, Product JSON-LD
- [x] Blog posts have: Article JSON-LD

---

## Phase 3: Content Quality (Week 2-3) ✅ COMPLETED

### Step 3.1: Audit All Pages for SEO Components ✅ DONE
- [x] All pages except not-found.tsx have `<SEO>` component
- [x] All pages except not-found.tsx have `<StructuredData>` component
- [x] Not-found page is 404 - SEO not needed

### Step 3.2: Ensure Unique Meta Descriptions ✅ DONE
- [x] All 34 routes now have unique titles and canonical URLs
- [x] SSG plugin configured with all dynamic routes:
  - 6 technique detail pages
  - 5 comparison detail pages (calm, betterhelp, headspace, waking-up, noom)
  - 8 profession detail pages

### Step 3.3: Add Missing Dynamic Routes to SSG ✅ DONE
- [x] Added all technique detail routes
- [x] Added all comparison detail routes
- [x] Added all profession detail routes
- [x] Total pages now generated: 34 (up from 15)

---

## Phase 4: Image Optimization (Week 3)

### Step 4.1: Create Image Sitemap
- [ ] File: `client/public/sitemap-images.xml`
- [ ] List all images with titles
- [ ] Update robots.txt to include sitemap-images.xml

### Step 4.2: Add Lazy Loading to Below-Fold Images
- [ ] Add `loading="lazy"` and `decoding="async"` to below-fold images

---

## Phase 5: Performance (Week 3-4)

### Step 5.1: Font Display Swap
- [ ] File: `client/index.html`
- [ ] Implement font-display: swap for Google Fonts

### Step 5.2: Preconnect to External Domains
- [ ] Add preconnect for Yandex Metrika and Google Tag Manager

---

## Phase 6: Monitoring Setup (Week 4)

### Step 6.1: Create Drift Baseline
```bash
python scripts/drift_baseline.py https://menhausen.com/
```

### Step 6.2: Document SEO Health Score
- [ ] Initial score: 35/100
- [ ] Target after all fixes: 75+/100

---

## Implementation Sequence

| Phase | Task | Duration | Status |
|-------|------|----------|--------|
| **Phase 0** | Quick wins (robots.txt, alt text) | 15 min | Pending |
| **Phase 1** | SSG Implementation | 1 week | Pending |
| **Phase 2** | Schema Cleanup | 1-2 hrs | Pending |
| **Phase 3** | Content Quality | 2-3 hrs | Pending |
| **Phase 4** | Image Optimization | 1-2 hrs | Pending |
| **Phase 5** | Performance | 2-3 hrs | Pending |
| **Phase 6** | Monitoring | 30 min | Pending |

---

## SEO Health Score Target

| Category | Current | Target |
|----------|---------|--------|
| Technical SEO | 50% | 85% |
| Content Quality | 20% | 70% |
| On-Page SEO | 25% | 85% |
| Schema/Structured Data | 0% | 80% |
| Performance (CWV) | N/A | 75% |
| AI Search Readiness | 30% | 70% |
| Images | 50% | 75% |
| **Overall** | **35/100** | **75+/100** |

---

## Dependencies

- GitHub Pages hosting (existing)
- GitHub Actions CI/CD (existing)
- Node.js 20+ for build

---

## Notes

- HowTo schema deprecated Sept 2023 - must remove
- FAQ schema restricted to government/healthcare sites for Google rich results (existing usage flagged as Info priority)
- All Core Web Vitals references use INP, never FID
