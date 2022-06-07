const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const slugify = require("slugify");
const Image = require("@11ty/eleventy-img");
const postcss = require("postcss");

async function imageShortcode(src, alt, sizes) {
  const metadata = await Image(src, {
    widths: [300, 600],
    formats: ["avif", "jpeg"],
  });

  const imageAttributes = { alt, sizes, loading: "lazy", decoding: "async" };

  return Image.generateHTML(metadata, imageAttributes, {
    whitespaceMode: "inline",
  });
}
const postcssFilter = async (cssCode, done) =>
  postcss()
    .use(require("postcss-import-ext-glob"))
    .use(require("postcss-import"))
    .use(require("tailwindcss"))
    .process(cssCode, { from: "src/css/index.css" })
    .then(
      (r) => done(null, r.css),
      (e) => done(e, null)
    );

const markdownLibrary = markdownIt({
  html: true,
})
  .use(require("markdown-it-deflist"))
  .use(require("markdown-it-attrs"), {
    leftDelimiter: "{",
    rightDelimiter: "}",
    allowedAttributes: ["id", "class", /^data-.*$/],
  })
  .use(require("markdown-it-anchor"), {
    level: 2,
    permalink: require("markdown-it-anchor").permalink.headerLink({
      safariReaderFix: true,
    }),
    slugify: (s) => slugify(s, { lower: true }),
  })
  .disable("code");

// lmao crimez
// https://github.com/11ty/eleventy/issues/2033
const UserConfig = require("@11ty/eleventy/src/UserConfig");
const path = require("path");

/** @param {UserConfig} config */
module.exports = function (config) {
  const isProd = process.env.ELEVENTY_ENV === "prod";

  config.on("eleventy.before", async ({ dir, runMode, outputMode } = {}) => {
    const fs = require("fs");
    const prettier = require("prettier");
    const config = require("./tailwind.config.js");

    let result = "";

    const groups = [
      { key: "colors", prefix: "color" },
      { key: "spacing", prefix: "space" },
      { key: "fontSize", prefix: "size" },
    ];

    // Add a note that this is auto generated
    result += `
    /* VARIABLES GENERATED WITH TAILWIND CONFIG ON ${new Date().toLocaleDateString()}.
    Tokens location: ./tailwind.config.js */

    :root {
  `;

    // Loop each group's keys, use that and the associated
    // property to define a :root custom prop
    groups.forEach(({ key, prefix }) => {
      const group = config.theme[key];

      if (!group) {
        return;
      }

      Object.keys(group).forEach((key) => {
        result += `--${prefix}-${key}: ${group[key]};`;
      });
    });

    // Close the :root block
    result += `
    }
  `;

    // Make the CSS readable to help people with auto-complete in their editors
    result = prettier.format(result, { parser: "css" });

    // Push this file into the CSS dir, ready to go
    fs.writeFileSync(
      path.join(dir?.input ?? ".", "src", "css", "custom-props.css"),
      result
    );
  });

  config.addPlugin(require("@11ty/eleventy-plugin-syntaxhighlight"));
  config.addPlugin(require("@11ty/eleventy-plugin-rss"));

  // config.addPassthroughCopy("./src/css/");
  config.addWatchTarget("./src/css/");

  config.setLibrary("md", markdownLibrary);

  config.addShortcode("year", () => `${new Date().getFullYear()}`);
  config.addAsyncShortcode("image", imageShortcode);

  config.addFilter("postDate", (dateObj) =>
    DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
  );
  config.addFilter("slug", (str) =>
    !!str
      ? slugify(str, { lower: true, strict: true, remove: /["]/g })
      : undefined
  );
  config.addFilter(
    "toAbsoluteUrl",
    (url) => new URL(url, require("./src/_data/meta").url).href
  );
  config.addNunjucksAsyncFilter("postcss", postcssFilter);

  if (isProd) {
    config.addTransform(
      "minifyHtml",
      require("./src/_transforms/minify-html").minifyHtml
    );
  }

  return {
    dir: { input: "src", output: "public" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
