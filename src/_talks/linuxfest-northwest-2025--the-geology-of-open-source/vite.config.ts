import { fileURLToPath } from "node:url";
export default {
  build: {
    emptyOutDir: true,
    rollupOptions: {
      external: [
        fileURLToPath(new URL("/images/rock-cycle.png", import.meta.url)),
      ],
    },
  },
};
