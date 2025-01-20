export default (ctx) => ({
  plugins: {
    "postcss-import-ext-glob": {},
    "postcss-import": {},
    tailwindcss: {},
    // We have to handle purgeCSSPlugin manually in filters.js
    "postcss-parcel-css": ctx.env === "prod" ? {} : false,
  },
});
