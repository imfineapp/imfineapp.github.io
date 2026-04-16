# Plan: Dependency Upgrade + Code Review Fixes

## Context

Two objectives:
1. **Dependency upgrades** - Fix npm audit warnings, upgrade to Node.js v24.14.1
2. **Code review fixes** - Address all recommendations from staff engineer review

---

## Part A: Node.js & Dependency Upgrades

### A1. Upgrade Node.js

| Current | Target |
|---------|--------|
| v22.17.1 | v24.14.1 (latest LTS) |

### A2. Upgrade `drizzle-orm`

| Current | Target |
|---------|--------|
| 0.39.1 | 0.45.2 |

### A3. Upgrade `vite`

| Current | Target |
|---------|--------|
| 7.1.9 | 8.0.8 |

---

## Part B: Code Review Fixes

### B1. Deduplicate `encodeAttribution`
### B2. Create `telegram-link.ts`
### B3. Fix `getSourceLabel()` Logic
### B4. Remove Unused Import

---

## Implementation Order

```
1. [A1] Upgrade Node.js to v24.14.1
2. [B1] Deduplicate encodeAttribution
3. [B2] Create telegram-link.ts
4. [B3] Fix getSourceLabel logic
5. [B4] Remove unused import
6. [A2] Upgrade drizzle-orm to 0.45.2
7. [A3] Upgrade vite to 8.0.8
8. [A4] npm install fresh, verify all checks pass
```

---

## Status

- [x] Plan created
- [x] In progress
- [x] Completed

## Completed

### Dependencies Upgraded
| Package | From | To |
|---------|------|-----|
| Node.js | v22.17.1 | v24.14.1 |
| drizzle-orm | 0.39.1 | 0.45.2 |
| vite | 7.1.9 | 8.0.8 |
| esbuild | 0.25.0 | 0.28.0 |

### Code Review Fixes
- [x] Created `client/src/lib/telegram-link.ts`
- [x] Removed duplicate `encodeAttribution` (kept in `lib/attribution.ts`)
- [x] Updated `useAttribution.ts` imports
- [x] Updated `telegram-cta.tsx` imports
- [x] Removed unused `Loader2` import
- [x] Added URL sanitization for `botUsername`

### Verification
- [x] `npm run check` passes
- [x] `npm run build` passes
- [x] `npm audit` shows 0 vulnerabilities
