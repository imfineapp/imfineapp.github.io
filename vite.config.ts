import { defineConfig } from "vite";
import type { Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { copyFileSync } from "fs";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

/**
 * SEO Inspector-style priority (higher = earlier in <head>).
 * Sorts head children so the most important signals come first.
 */
function headElementPriority(fragment: string): number {
  const t = fragment.trim();
  if (/^<meta\s+charset/i.test(t)) return 100;
  if (/^<meta[^>]*name=["']viewport["']/i.test(t)) return 100;
  if (/^<title[\s>]/i.test(t)) return 95;
  if (/^<link[^>]*rel=["']preconnect["']/i.test(t)) return 90;
  if (/^<link[^>]*rel=["'][^"']*icon/i.test(t)) return 88;
  if (/^<meta\s/i.test(t)) return 80;
  if (/^<script[^>]*\bsrc=/i.test(t) && /\basync\b/i.test(t)) return 70;
  if (/^<link[^>]*rel=["']modulepreload["']/i.test(t)) return 35;
  if (/^<link[^>]*rel=["']preload["']/i.test(t)) return 30;
  if (/^<link[^>]*rel=["']stylesheet["']/i.test(t)) return 40;
  if (/^<style[\s>]/i.test(t)) return 40;
  if (/^<script[^>]*type=["']module["']/i.test(t)) return 50;
  if (/^<script[^>]*\bsrc=/i.test(t)) return 50;
  if (/^<script[\s>]/i.test(t)) return 50;
  if (/^<link[\s>]/i.test(t)) return 45;
  if (/^<!--/.test(t)) return 5;
  return 55;
}

function parseHeadInnerElements(inner: string): string[] {
  const elements: string[] = [];
  let i = 0;
  const s = inner;
  while (i < s.length) {
    while (i < s.length && /\s/.test(s[i])) i++;
    if (i >= s.length) break;
    if (s[i] !== "<") {
      i++;
      continue;
    }
    if (s.slice(i, i + 4) === "<!--") {
      const end = s.indexOf("-->", i);
      if (end === -1) break;
      elements.push(s.slice(i, end + 3));
      i = end + 3;
      continue;
    }
    const tagMatch = s.slice(i).match(/^<(\w+)/);
    if (!tagMatch) {
      i++;
      continue;
    }
    const tagName = tagMatch[1].toLowerCase();
    if (tagName === "script") {
      const end = s.indexOf("</script>", i);
      if (end === -1) break;
      elements.push(s.slice(i, end + 9));
      i = end + 9;
      continue;
    }
    if (tagName === "style") {
      const end = s.indexOf("</style>", i);
      if (end === -1) break;
      elements.push(s.slice(i, end + 8));
      i = end + 8;
      continue;
    }
    if (tagName === "title") {
      const end = s.indexOf("</title>", i);
      if (end === -1) break;
      elements.push(s.slice(i, end + 8));
      i = end + 8;
      continue;
    }
    if (tagName === "meta" || tagName === "link" || tagName === "base") {
      const end = s.indexOf(">", i);
      if (end === -1) break;
      elements.push(s.slice(i, end + 1));
      i = end + 1;
      continue;
    }
    const end = s.indexOf(">", i);
    if (end === -1) break;
    elements.push(s.slice(i, end + 1));
    i = end + 1;
  }
  return elements;
}

function sortHeadBySeoPriority(html: string): string {
  const headRe = /<head([^>]*)>([\s\S]*?)<\/head>/i;
  const m = html.match(headRe);
  if (!m) return html;

  const attrs = m[1] ?? "";
  const inner = m[2] ?? "";
  const elements = parseHeadInnerElements(inner);
  if (elements.length === 0) return html;

  const sorted = elements
    .map((el, idx) => ({ el, idx, p: headElementPriority(el) }))
    .sort((a, b) => b.p - a.p || a.idx - b.idx)
    .map((x) => x.el);

  const newInner = `\n    ${sorted.join("\n    ")}\n  `;
  return html.replace(headRe, `<head${attrs}>${newInner}</head>`);
}

function htmlHeadPrioritySortPlugin(): Plugin {
  return {
    name: "html-head-priority-sort",
    enforce: "post",
    transformIndexHtml: {
      order: "post",
      handler(html) {
        return sortHeadBySeoPriority(html);
      },
    },
  };
}

// Plugin to copy index.html to 404.html for GitHub Pages SPA support
const copy404Plugin = () => {
  return {
    name: 'copy-404',
    closeBundle() {
      const distPath = path.resolve(import.meta.dirname, "dist");
      const indexPath = path.join(distPath, "index.html");
      const notFoundPath = path.join(distPath, "404.html");
      try {
        copyFileSync(indexPath, notFoundPath);
        console.log("✓ Copied index.html to 404.html for GitHub Pages");
      } catch (err) {
        console.error("Failed to copy 404.html:", err);
      }
    },
  };
};

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    tailwindcss(),
    copy404Plugin(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
    htmlHeadPrioritySortPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  css: {
    postcss: {
      plugins: [],
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  base: '/',
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
  publicDir: path.resolve(import.meta.dirname, "client", "public"),
  esbuild: {
    jsx: "automatic",
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".ts": "tsx",
        ".tsx": "tsx",
      },
    },
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
