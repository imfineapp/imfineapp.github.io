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

## Phase 1: SSG Implementation (Week 1) - Critical

### Step 1.1: Install vite-plugin-ssg
```bash
npm install vite-plugin-ssg
```

### Step 1.2: Configure vite.config.ts
- [ ] Add import for vite-plugin-ssg
- [ ] Update plugins array with ssg() configuration
- [ ] Define routes for pre-rendering

### Step 1.3: Create Dynamic Route Generator
- [ ] File: `client/src/lib/ssg-routes.ts`
- [ ] Function to get all blog posts and techniques at build time

### Step 1.4: Update vite.config.ts with Dynamic Routes
- [ ] Import getSsgRoutes()
- [ ] Pass routes to ssg() configuration

### Step 1.5: Test SSG Build Locally
```bash
npm run build
```
- [ ] Verify `dist/` contains pre-rendered HTML for all routes
- [ ] Check each HTML has unique meta tags

### Step 1.6: Update GitHub Actions Workflow
- [ ] File: `.github/workflows/deploy.yml`
- [ ] Ensure build artifact is correct
- [ ] Test deployment

### Step 1.7: Verify Deployed Site
```bash
curl -s https://menhausen.com/blog/anxiety-vs-stress/ | grep '<title>'
```
- [ ] Returns unique title for blog post
- [ ] All pages accessible and have unique meta

---

## Phase 2: Schema.org Cleanup (Week 2)

### Step 2.1: Remove Deprecated HowTo Schema
- [ ] File: `client/src/components/structured-data.tsx`
- [ ] Remove case "howto": block (lines ~150-189)
- [ ] Remove `<StructuredData type="howto" />` from home.tsx

### Step 2.2: Add Product Schema to Stress Cards Page
- [ ] File: `client/src/pages/stress-cards.tsx`
- [ ] Import StructuredData
- [ ] Add `<StructuredData type="product" />`

### Step 2.3: Add Organization SameAs Links
- [ ] File: `client/src/components/structured-data.tsx`
- [ ] Add Telegram bot URL and social links to Organization schema

---

## Phase 3: Content Quality (Week 2-3)

### Step 3.1: Audit All Pages for SEO Components
- [ ] Check each page has `<SEO>` and `<StructuredData>` components
- [ ] Pages to audit: home, stress-cards, stress-management, stress-test, blog, blog-post, pricing, techniques, technique-detail, comparisons, compare-detail, professions, profession-detail, privacy, terms, contact

### Step 3.2: Ensure Unique Meta Descriptions
- [ ] Each page needs unique title (60 chars) and description (120-160 chars)
- [ ] Canonical URL set correctly

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
