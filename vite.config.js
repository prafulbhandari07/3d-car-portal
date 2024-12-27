import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries into a separate chunk
          vendor: [
            "react",
            "react-dom",
            "three",
            "@react-three/fiber",
            "@react-three/drei",
          ],
        },
      },
    },
    chunkSizeWarningLimit: 1500, // Suppress chunk size warning (increase limit in KB)
    
  },
  resolve: {
    alias: {
      // Optional: Alias any paths for cleaner imports
      "@": "/src",
    },
  },
});
