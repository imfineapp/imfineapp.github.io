import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import type { ViteDevServer } from "vite";
import type { IncomingMessage, ServerResponse } from "http";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Add headers to prevent caching of favicons and icons in development
    headers: mode === 'development' ? {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    } : {},
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    // Custom plugin to add cache-busting headers for icon files
    {
      name: 'icon-cache-buster',
      configureServer(server: ViteDevServer) {
        server.middlewares.use('/favicon', (req: IncomingMessage, res: ServerResponse, next: () => void) => {
          res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
          res.setHeader('Pragma', 'no-cache');
          res.setHeader('Expires', '0');
          next();
        });
        
        server.middlewares.use((req: IncomingMessage, res: ServerResponse, next: () => void) => {
          // Apply no-cache headers to all icon files
          if (req.url && /\.(ico|png|svg|webmanifest)$/.test(req.url)) {
            res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
            res.setHeader('Pragma', 'no-cache');
            res.setHeader('Expires', '0');
          }
          next();
        });
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Optimize icon handling
  assetsInclude: ['**/*.ico', '**/*.webmanifest'],
}));
