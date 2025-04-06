import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
  base: "./", // Importante para GitHub Pages
  server: {
    port: 5000, // Mantener mismo puerto para compatibilidad
    host: true, // Permitir acceso desde todas las redes
    strictPort: true,
    hmr: {
      clientPort: 443 // Necesario para Replit
    },
    // Permitir todos los hosts
    fs: {
      strict: false
    },
    origin: 'https://math-olympiad-web.joseluisgs.repl.co',
    cors: true,
    // Permitir específicamente este host
    allowedHosts: ["179f461c-0e47-4964-b00c-5094fc7bdb57-00-al992npk2nss.worf.replit.dev", "all"]
  }
});