import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";
import {visualizer} from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), visualizer()],
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    }
  },
  base: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        }
      }
    }
  }
});
