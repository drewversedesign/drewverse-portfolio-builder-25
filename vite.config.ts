
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
    // Enhanced dedupe configuration to prevent duplicate packages
    dedupe: ['react', 'react-dom', 'date-fns', 'react-day-picker']
  },
  // Improved optimizeDeps configuration
  optimizeDeps: {
    include: ['react-day-picker', 'date-fns'],
    esbuildOptions: {
      // Force a specific resolution for problematic packages
      define: {
        global: 'globalThis',
      },
    }
  },
  // Add build options to handle dependency conflicts
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Suppress circular dependency warnings from date-fns
        if (warning.code === 'CIRCULAR_DEPENDENCY' && warning.message.includes('date-fns')) {
          return;
        }
        warn(warning);
      }
    }
  }
}));
