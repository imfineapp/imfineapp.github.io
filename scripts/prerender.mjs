import puppeteer from "puppeteer";
import sirv from "sirv";
import connect from "connect";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { writeFileSync, mkdirSync, existsSync, readFileSync } from "fs";
import { getAllRoutes } from "./routes.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "..", "dist");
const PORT = Number(process.env.PRERENDER_PORT || 4173);
const SITE_ORIGIN = process.env.PRERENDER_ORIGIN || `http://localhost:${PORT}`;

const BLOCKED_HOSTS = [
  "googletagmanager.com",
  "google-analytics.com",
  "mc.yandex.ru",
  "cloudflareinsights.com",
];

function routeToFilePath(route) {
  if (route === "/") {
    return path.join(distDir, "index.html");
  }
  return path.join(distDir, route.slice(1), "index.html");
}

function startStaticServer(spaShell) {
  const app = connect();
  app.use(
    sirv(distDir, {
      dev: false,
      single: false,
      etag: true,
    }),
  );
  app.use((_req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(spaShell);
  });

  return new Promise((resolve) => {
    const server = createServer(app);
    server.listen(PORT, "127.0.0.1", () => resolve(server));
  });
}

async function setupPage(page) {
  await page.setRequestInterception(true);
  page.on("request", (request) => {
    const url = request.url();
    if (BLOCKED_HOSTS.some((host) => url.includes(host))) {
      request.abort();
      return;
    }
    request.continue();
  });
}

async function waitForPageReady(page) {
  await page.waitForSelector("h1", { timeout: 30_000 });
  await page.waitForFunction(
    () => {
      const title = document.title;
      const root = document.getElementById("root");
      const canonical = document.querySelector('link[rel="canonical"]');
      return (
        title.length >= 20 &&
        Boolean(root && root.innerHTML.length > 200) &&
        Boolean(canonical?.getAttribute("href"))
      );
    },
    { timeout: 30_000 },
  );
}

async function prerenderRoute(browser, route) {
  const page = await browser.newPage();
  try {
    await setupPage(page);
    await page.goto(`${SITE_ORIGIN}${route}`, {
      waitUntil: "domcontentloaded",
      timeout: 60_000,
    });
    await waitForPageReady(page);
    await page.evaluate(() => new Promise((resolve) => requestAnimationFrame(() => resolve())));

    return await page.content();
  } finally {
    await page.close();
  }
}

function writePrerenderedOutputs(outputs) {
  for (const [route, html] of outputs) {
    const outPath = routeToFilePath(route);
    mkdirSync(path.dirname(outPath), { recursive: true });
    writeFileSync(outPath, html, "utf-8");
    console.log(`✓ Wrote ${route} -> ${outPath}`);
  }
}

async function main() {
  const shellPath = path.join(distDir, "index.html");
  if (!existsSync(shellPath)) {
    console.error("dist/index.html not found. Run vite build first.");
    process.exit(1);
  }

  const spaShell = readFileSync(shellPath, "utf-8");
  const routes = getAllRoutes();
  console.log(`Prerendering ${routes.length} routes…`);

  const server = await startStaticServer(spaShell);
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const outputs = new Map();

  try {
    for (const route of routes) {
      const html = await prerenderRoute(browser, route);
      outputs.set(route, html);
      console.log(`✓ Prerendered ${route}`);
    }

    writePrerenderedOutputs(outputs);
    console.log(`✓ Prerender complete (${routes.length} pages)`);
  } finally {
    await browser.close();
    await new Promise((resolve, reject) => {
      server.close((err) => (err ? reject(err) : resolve()));
    });
  }
}

main().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
