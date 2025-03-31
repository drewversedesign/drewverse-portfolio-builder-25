
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    // Add dedupe to prevent duplicate packages
    dedupe: ['react', 'react-dom', 'date-fns']
  },
  // Add optimizeDeps to ensure proper dependency resolution
  optimizeDeps: {
    include: ['react-day-picker', 'date-fns']
  }
}));
