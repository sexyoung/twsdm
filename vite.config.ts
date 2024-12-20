import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve("./src"), // 這裡設置 @ 為 src 目錄的別名
    },
  },
  build: {
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks: undefined,
        inlineDynamicImports: true,
      },
    },
  },
  define: {
    "process.env.VITE_GA_TRACKING_ID": JSON.stringify(
      process.env.VITE_GA_TRACKING_ID
    ),
  },
});
