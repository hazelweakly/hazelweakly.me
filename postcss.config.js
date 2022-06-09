module.exports = (ctx) => ({
  plugins: {
    "postcss-import-ext-glob": {},
    "postcss-import": {},
    tailwindcss: {},
    "@fullhuman/postcss-purgecss": {
      content: ["./src/**/*.{html,njk,js,md}"],
    },
    "postcss-parcel-css": ctx.env === "prod" ? {} : false,
  },
});
