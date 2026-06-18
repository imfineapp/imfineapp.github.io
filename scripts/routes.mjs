import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

/** Static routes from App.tsx (must stay in sync with client/src/App.tsx). */
export const STATIC_ROUTES = [
  "/",
  "/stress-cards",
  "/stress-management",
  "/stress-test",
  "/blog",
  "/privacy",
  "/terms",
  "/contact",
  "/pricing",
  "/techniques",
  "/compare",
  "/professions",
];

function extractSlugs(relativePath) {
  const content = readFileSync(path.join(root, relativePath), "utf-8");
  return [...content.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
}

/** All prerenderable / sitemap routes (single source of truth). */
export function getAllRoutes() {
  const blogSlugs = extractSlugs("client/src/lib/blog-data.tsx");
  const techniqueSlugs = extractSlugs("client/src/lib/techniques-data.ts");
  const comparisonSlugs = extractSlugs("client/src/lib/comparisons-data.ts");
  const professionSlugs = extractSlugs("client/src/lib/professions-data.ts");

  const dynamic = [
    ...blogSlugs.map((s) => `/blog/${s}`),
    ...techniqueSlugs.map((s) => `/techniques/${s}`),
    ...comparisonSlugs.map((s) => `/compare/${s}`),
    ...professionSlugs.map((s) => `/professions/${s}`),
  ];

  return [...STATIC_ROUTES, ...dynamic];
}
