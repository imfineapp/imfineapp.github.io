import { writeFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { getAllRoutes } from "./routes.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outPath = path.join(root, "client", "public", "sitemap.xml");

const SITE_URL = "https://menhausen.com";
const today = new Date().toISOString().slice(0, 10);

function priorityForRoute(route) {
  if (route === "/") return "1.0";
  if (
    ["/stress-cards", "/stress-management", "/blog", "/techniques", "/compare", "/professions"].includes(route)
  ) {
    return "0.9";
  }
  if (route.startsWith("/blog/") || route.startsWith("/techniques/") || route.startsWith("/compare/") || route.startsWith("/professions/")) {
    return "0.8";
  }
  if (route === "/stress-test") return "0.8";
  if (route === "/pricing" || route === "/contact") return "0.6";
  if (route === "/privacy" || route === "/terms") return "0.5";
  return "0.7";
}

function changefreqForRoute(route) {
  if (route === "/" || route === "/blog" || route.startsWith("/techniques") || route.startsWith("/compare") || route.startsWith("/professions")) {
    return "weekly";
  }
  if (route === "/privacy" || route === "/terms") return "yearly";
  return "monthly";
}

const routes = getAllRoutes();

const urls = routes
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route === "/" ? "/" : route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreqForRoute(route)}</changefreq>
    <priority>${priorityForRoute(route)}</priority>
  </url>`,
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

writeFileSync(outPath, xml, "utf-8");
console.log(`✓ Generated sitemap with ${routes.length} URLs -> ${outPath}`);
