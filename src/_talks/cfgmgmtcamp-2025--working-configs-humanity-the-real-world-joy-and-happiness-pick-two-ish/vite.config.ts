import { fileURLToPath } from "node:url";
export default {
  build: {
    emptyOutDir: true,
    rollupOptions: {
      external: [
        fileURLToPath(new URL("/images/SubwaySound.svg", import.meta.url)),
      ],
    },
  },
};
