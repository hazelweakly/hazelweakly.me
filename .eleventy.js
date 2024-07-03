import { filters as _filters, asyncFilters } from "./src/_meta/filters.js";
import { env } from "./src/_data/meta.js";
import transforms from "./src/_meta/transforms.js";

const {
  before,
  after,
  plugins,
  markdownLibrary,
  shortcodes,
  asyncShortcodes,
  transforms: _transforms,
  collections,
} = transforms;
import c from "./src/_meta/cfg.js";

import directoryOutput from "@11ty/eleventy-plugin-directory-output";
import rssPlugin from "@11ty/eleventy-plugin-rss";
import webcPlugin from "@11ty/eleventy-plugin-webc";
import helmetPlugin from "eleventy-plugin-helmet";
import embedPlugin from "eleventy-plugin-embed-everything";

const foreach = (o, f) => Object.entries(o).forEach(([k, fn]) => f(k, fn));

/** @param {import("@11ty/eleventy").UserConfig} cfg */
export default async function (cfg) {
  Object.entries(before).forEach(([_, fn]) => cfg.on("eleventy.before", fn));
  Object.entries(after).forEach(([_, fn]) => cfg.on("eleventy.after", fn));

  // foreach(plugins, async (p, opts) => cfg.addPlugin(await import(p), opts));
  cfg.addPlugin(directoryOutput);
  cfg.addPlugin(rssPlugin);
  cfg.addPlugin(webcPlugin, {
    components: "src/_components/**/*.webc",
  });
  cfg.addPlugin(helmetPlugin);
  cfg.addPlugin(embedPlugin, {
    youtube: {
      options: {
        lite: true,
      },
    },
  });

  cfg.setServerOptions({
    port: 8080,
    portReassignmentRetryCount: 0,
    showAllHosts: true,
  });
  cfg.setQuietMode(true);

  cfg.addWatchTarget("./src/css/");
  cfg.addWatchTarget("./postcss.config.js");
  cfg.ignores.add("src/_talks");
  if (env === "prod") {
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

  cfg.setLibrary("md", markdownLibrary);

  foreach(shortcodes, (k, fn) => cfg.addShortcode(k, fn));
  foreach(asyncShortcodes, (k, fn) => cfg.addAsyncShortcode(k, fn));
  foreach(_filters, (k, fn) => cfg.addFilter(k, fn));
  foreach(asyncFilters, (k, fn) => cfg.addNunjucksAsyncFilter(k, fn));
  foreach(_transforms, (k, fn) => cfg.addTransform(k, fn));
  foreach(collections, (k, fn) => cfg.addCollection(k, fn));

  return { ...c, dir: { input: c.dir.input, output: c.dir.output } };
}
