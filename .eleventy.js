const filters = require("./src/_meta/filters");
const meta = require("./src/_data/meta");
const transforms = require("./src/_meta/transforms");
const foreach = (o, f) => Object.entries(o).forEach(([k, fn]) => f(k, fn));

// lmao crimez
// https://github.com/11ty/eleventy/issues/2033
const UserConfig = require("@11ty/eleventy/src/UserConfig");

/** @param {UserConfig} cfg */
module.exports = function (cfg) {
  Object.entries(transforms.before).forEach(([_, fn]) =>
    cfg.on("eleventy.before", fn),
  );
  Object.entries(transforms.after).forEach(([_, fn]) =>
    cfg.on("eleventy.after", fn),
  );

  foreach(transforms.plugins, (p, opts) => cfg.addPlugin(require(p), opts));

  cfg.setServerOptions({
    port: 8080,
    portReassignmentRetryCount: 0,
    showAllHosts: true,
  });
  cfg.setQuietMode(true);

  cfg.addWatchTarget("./src/css/");
  cfg.addWatchTarget("./postcss.config.js");
  cfg.ignores.add("src/_talks");
  if (meta.env === "prod") {
    cfg.ignores.add("src/_resume");
  }
  cfg.addWatchTarget("./src/_resume/cv.md");
  cfg.addPassthroughCopy("./src/fonts");
  cfg.addPassthroughCopy({
    "./src/favicons": ".",
    "./src/admin/config.yml": "./admin/confg.yml",
    "./src/_talks/qcon-sf-2023/images": "./talks/qcon-sf-2023/images",
  });
  cfg.addPassthroughCopy("./src/images");

  cfg.setLibrary("md", transforms.markdownLibrary);

  foreach(transforms.shortcodes, (k, fn) => cfg.addShortcode(k, fn));
  foreach(transforms.asyncShortcodes, (k, fn) => cfg.addAsyncShortcode(k, fn));
  foreach(filters.filters, (k, fn) => cfg.addFilter(k, fn));
  foreach(filters.asyncFilters, (k, fn) => cfg.addNunjucksAsyncFilter(k, fn));
  foreach(transforms.transforms, (k, fn) => cfg.addTransform(k, fn));
  foreach(transforms.collections, (k, fn) => cfg.addCollection(k, fn));

  const c = require("./src/_meta/cfg");
  return { ...c, dir: { input: c.dir.input, output: c.dir.output } };
};
