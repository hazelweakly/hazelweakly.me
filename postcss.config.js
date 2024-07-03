export default (ctx) => ({
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
            variables: false,
            safelist: [
              "body",
              "blockquote",
              "h1",
              "h2",
              "h3",
              "h4",
              /\[.*\]$/,
              "p",
              "li",
              "a",
              "pre",
              "code",
              "dl",
              "dt",
              "header-anchor",
              ":focus",
              ":root",
              '[role="tab"]',
              "figure",
              "table",
              "th",
              "tbody",
              "thead",
            ],
          }
        : false,
    "postcss-parcel-css": ctx.env === "prod" ? {} : false,
  },
});
