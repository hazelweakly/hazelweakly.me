module.exports = (ctx) => ({
  plugins: {
    "postcss-import-ext-glob": {},
    "postcss-import": {},
    tailwindcss: {},
    "@fullhuman/postcss-purgecss":
      ctx.env === "prod"
        ? {
            content: [
              "./src/**/*.html",
              "./src/**/*.njk",
              "./src/**/*.js",
              "./src/**/*.md",
            ],
            fontFace: true,
            variables: true,
            safelist: [
              "body",
              "h1",
              "h2",
              "h3",
              "p",
              "li",
              "a",
              "pre",
              "code",
              "header-anchor",
              ":focus",
              ":root",
            ],
          }
        : false,
    "postcss-parcel-css": ctx.env === "prod" ? {} : false,
  },
});
