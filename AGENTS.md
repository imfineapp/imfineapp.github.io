# AGENTS.md

## Developer Commands

```bash
npm run dev        # Express server + frontend proxy (port 5000)
npm run dev:client # Frontend only (port 5000)
npm run build      # Vite build + esbuild server (output: dist/)
npm run check     # TypeScript validation
npm run db:push   # Drizzle database push
npm run deploy    # Build client for deployment
```

## Architecture

- **Frontend entry:** `client/src/main.tsx` → `client/src/App.tsx`
- **Server entry:** `server/index.ts`
- **Routes:** wouter (see `App.tsx`)
- **Database:** Drizzle ORM with Neon PostgreSQL

## TypeScript Paths

```
@/*         → client/src/*
@shared/*   → shared/*
@/components, @/lib, @/hooks → client/src/*
```

## Ports

- Dev server: **5000** (not typical 3000/5173)
- Frontend-only: 5000

## Deployment

Push to `master` branch triggers GitHub Pages deploy (see `.github/workflows/deploy.yml`). Output in `dist/`.

## Style

- Shadcn/UI (new-york style) with Tailwind CSS v4
- Lucide icons
- i18next for en/ru translations