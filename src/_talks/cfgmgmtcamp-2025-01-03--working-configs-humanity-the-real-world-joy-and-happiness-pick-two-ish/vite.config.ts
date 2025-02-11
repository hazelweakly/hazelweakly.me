import { defineConfig } from "vite";

export default defineConfig({
  build: {
    emptyOutDir: true,
    rollupOptions: {
      external: ["/images/SubwaySound.svg"],
    },
  },
});
