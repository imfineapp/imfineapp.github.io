import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { copyFileSync } from "fs";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

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
