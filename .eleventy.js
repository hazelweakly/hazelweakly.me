const filters = require("./src/_meta/filters");
const transforms = require("./src/_meta/transforms");

// lmao crimez
// https://github.com/11ty/eleventy/issues/2033
const UserConfig = require("@11ty/eleventy/src/UserConfig");

/** @param {UserConfig} config */
module.exports = function (config) {
  const isProd = process.env.ELEVENTY_ENV === "prod";

  config.on("eleventy.before", transforms.generateCSS);

  config.addPlugin(require("@11ty/eleventy-plugin-syntaxhighlight"));
  config.addPlugin(require("@11ty/eleventy-plugin-rss"));

  config.addWatchTarget("./src/css/");

  config.setLibrary("md", transforms.markdownLibrary);

  config.addShortcode("year", transforms.yearShortcode);
  config.addAsyncShortcode("image", transforms.imageShortcode);

  config.addFilter("postDate", filters.postDate);
  config.addFilter("slug", filters.slug);
  config.addFilter("toAbsoluteUrl", filters.toAbsoluteUrl);
  config.addNunjucksAsyncFilter("postcss", filters.postcss);

  if (isProd) {
    config.addTransform("minifyHtml", transforms.minifyHtml);
  }

  return {
    dir: { input: "src", output: "public" },
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
