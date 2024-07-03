import { filters, asyncFilters } from "./src/_meta/filters.js";
import { env, url } from "./src/_data/meta.js";
import transforms from "./src/_meta/transforms.js";
import c from "./src/_meta/cfg.js";

import directoryOutput from "@11ty/eleventy-plugin-directory-output";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import webcPlugin from "@11ty/eleventy-plugin-webc";
import helmetPlugin from "eleventy-plugin-helmet";
import embedPlugin from "eleventy-plugin-embed-everything";

const foreach = (o, f) => Object.entries(o).forEach(([k, fn]) => f(k, fn));

/** @param {import("@11ty/eleventy").UserConfig} cfg */
export default async function (cfg) {
  Object.entries(transforms.before).forEach(([_, fn]) =>
    cfg.on("eleventy.before", fn),
  );
  Object.entries(transforms.after).forEach(([_, fn]) =>
    cfg.on("eleventy.after", fn),
  );

  cfg.setLibrary("md", transforms.markdownLibrary);
  foreach(transforms.transforms, (k, fn) => cfg.addTransform(k, fn));

  const rssCfg = (type) => ({
    type,
    outputPath: {
      rss: "/rss.xml",
      atom: "/atom.xml",
      json: "/feed.json",
    }[type],
    collection: {
      name: "blog",
      limit: 0,
    },
    metadata: {
      language: "en",
      title: "Hazel Weakly",
      subtitle: "A feed of the latest blog posts",
      base: url,
      author: {
        name: "Hazel Weakly",
      },
    },
  });
  cfg.addPlugin(feedPlugin, rssCfg("rss"));
  cfg.addPlugin(feedPlugin, rssCfg("atom"));
  cfg.addPlugin(feedPlugin, rssCfg("json"));
  cfg.addPlugin(directoryOutput);
  cfg.addPlugin(helmetPlugin);
  cfg.addPlugin(webcPlugin, {
    components: "src/_components/**/*.webc",
  });
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
    "./src/_talks/qcon-sf-2023/images": "./talks/qcon-sf-2023/images",
  });
  cfg.addPassthroughCopy("./src/images");

  foreach(transforms.shortcodes, (k, fn) => cfg.addShortcode(k, fn));
  foreach(transforms.asyncShortcodes, (k, fn) => cfg.addAsyncShortcode(k, fn));
  foreach(filters, (k, fn) => cfg.addFilter(k, fn));
  foreach(asyncFilters, (k, fn) => cfg.addNunjucksAsyncFilter(k, fn));
  foreach(transforms.collections, (k, fn) => cfg.addCollection(k, fn));

  return { ...c, dir: { input: c.dir.input, output: c.dir.output } };
}
