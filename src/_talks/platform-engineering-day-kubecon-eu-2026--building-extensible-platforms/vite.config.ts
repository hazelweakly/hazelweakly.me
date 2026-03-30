export default {
  build: {
    assetsInlineLimit: 0,
    emptyOutDir: true,
  },
  slidev: {
    vue: {
      template: {
        transformAssetUrls: {
          includeAbsolute: false,
        },
      },
    },
  },
};
