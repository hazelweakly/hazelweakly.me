const filters = require("./src/_meta/filters");
const transforms = require("./src/_meta/transforms");
const foreach = (o, f) => Object.entries(o).forEach(([k, fn]) => f(k, fn));

// lmao crimez
// https://github.com/11ty/eleventy/issues/2033
const UserConfig = require("@11ty/eleventy/src/UserConfig");

/** @param {UserConfig} cfg */
module.exports = function (cfg) {
  Object.entries(transforms.before).forEach(([k, fn]) =>
    cfg.on("eleventy.before", fn),
  );

  foreach(transforms.plugins, (p, opts) => cfg.addPlugin(require(p), opts));

  cfg.setServerOptions({ port: 8080, portReassignmentRetryCount: 0 });

  cfg.addWatchTarget("./src/css/");
  cfg.addWatchTarget("./postcss.config.js");
  cfg.addPassthroughCopy("./src/fonts");
  cfg.addPassthroughCopy({ "./src/images/favicons": "." });

  cfg.setLibrary("md", transforms.markdownLibrary);

  foreach(transforms.shortcodes, (k, fn) => cfg.addShortcode(k, fn));
  foreach(transforms.asyncShortcodes, (k, fn) => cfg.addAsyncShortcode(k, fn));
  foreach(filters.filters, (k, fn) => cfg.addFilter(k, fn));
  foreach(filters.asyncFilters, (k, fn) => cfg.addNunjucksAsyncFilter(k, fn));
  foreach(transforms.transforms, (k, fn) => cfg.addTransform(k, fn));

  return require("./src/_meta/cfg");
};
