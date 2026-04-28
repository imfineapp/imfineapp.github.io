# Миграция: Vite + React → Next.js App Router

## Статус: ✅ Завершена

### Выполнено

- [x] Next.js 16.2.4 + App Router
- [x] i18n с next-intl (en, ru)
- [x] Static export в `out/` папку для GitHub Pages
- [x] Все страницы созданы и генерируются статически
- [x] SEO metadata на каждой странице
- [x] Analytics (Yandex Metrika + Google Analytics)

## Структура роутинга

```
app/
├── [lang]/              # i18n роутинг (en, ru)
│   ├── page.tsx         # / (Home)
│   ├── stress-cards/    # /stress-cards
│   ├── techniques/
│   │   ├── page.tsx    # /techniques
│   │   └── [slug]/     # /techniques/:slug (6 страниц)
│   ├── blog/
│   │   ├── page.tsx    # /blog
│   │   └── [slug]/     # /blog/:slug (3 страницы)
│   ├── compare/
│   │   ├── page.tsx    # /compare
│   │   └── [slug]/     # /compare/:slug (5 страниц)
│   ├── professions/
│   │   ├── page.tsx    # /professions
│   │   └── [slug]/     # /professions/:slug (8 страниц)
│   ├── pricing/         # /pricing
│   ├── privacy/         # /privacy
│   ├── terms/          # /terms
│   ├── contact/        # /contact
│   └── stress-test/    # /stress-test (интерактивный)
├── layout.tsx           # Root layout
└── globals.css
```

## Сгенерированные страницы

- 69 статических страниц
- 2 языка (en, ru)
- Все динамические роуты с generateStaticParams

## Команды

```bash
npm run dev      # Dev server на localhost:3000
npm run build    # Build в out/ папку
```

## GitHub Pages Deploy

Workflow настроен на `path: './out'`

## TODO

- [ ] Добавить sitemap.xml
- [ ] Добавить sitemap в robots.txt
- [ ] Проверить деплой на GitHub Pages
- [ ] Проверить все ссылки на страницах
