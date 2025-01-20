// https://www.11ty.dev/docs/config-preprocessors/ use this for drafts and other stuff

import { filters, asyncFilters } from "./src/_meta/filters.js";
import { env, url } from "./src/_data/meta.js";
import transforms from "./src/_meta/transforms.js";
import c from "./src/_meta/cfg.js";

import directoryOutput from "@11ty/eleventy-plugin-directory-output";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import webcPlugin from "@11ty/eleventy-plugin-webc";
import helmetPlugin from "eleventy-plugin-helmet";
import embedPlugin from "eleventy-plugin-embed-everything";

import { renderToStaticMarkup } from "react-dom/server";
import * as runtime from "react/jsx-runtime";
import React from "react";
import { register } from "node:module";
import { EleventyRenderPlugin } from "@11ty/eleventy";
import { evaluate } from "@mdx-js/mdx";

register("@mdx-js/node-loader", import.meta.url);

const foreach = (o, f) => Object.entries(o).forEach(([k, fn]) => f(k, fn));

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function (eleventyConfig) {
  Object.entries(transforms.before).forEach(([_, fn]) =>
    eleventyConfig.on("eleventy.before", fn),
  );
  Object.entries(transforms.after).forEach(([_, fn]) =>
    eleventyConfig.on("eleventy.after", fn),
  );

  eleventyConfig.setLibrary("md", transforms.markdownLibrary);
  foreach(transforms.transforms, (k, fn) => eleventyConfig.addTransform(k, fn));

  eleventyConfig.addExtension("mdx", {
    key: "11ty.js",
    read: true,
    compile: function () {
      return async function (data) {
        let content = await this.defaultRenderer(data);
        // TODO: Switch everything to rehype or remark or something and then I can reuse all the plugins here
        const rendered = await evaluate(content, { ...runtime });
        return renderToStaticMarkup(React.createElement(rendered.default));
      };
    },
  });
  eleventyConfig.addTemplateFormats("mdx");

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
  eleventyConfig.addPlugin(feedPlugin, rssCfg("rss"));
  eleventyConfig.addPlugin(feedPlugin, rssCfg("atom"));
  eleventyConfig.addPlugin(feedPlugin, rssCfg("json"));
  eleventyConfig.addPlugin(directoryOutput);
  eleventyConfig.addPlugin(helmetPlugin);
  eleventyConfig.addPlugin(webcPlugin, {
    components: "src/_components/**/*.webc",
  });
  eleventyConfig.addPlugin(embedPlugin, {
    youtube: {
      options: {
        lite: true,
      },
    },
  });
  eleventyConfig.addPlugin(EleventyRenderPlugin);

  eleventyConfig.setServerOptions({
    port: 8080,
    portReassignmentRetryCount: 0,
    showAllHosts: true,
  });
  eleventyConfig.setQuietMode(true);

  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addWatchTarget("./postcss.config.js");
  eleventyConfig.ignores.add("src/_talks");
  if (env === "prod") {
    eleventyConfig.ignores.add("src/_resume");
  }
  eleventyConfig.addWatchTarget("./src/_resume/cv.md");
  eleventyConfig.addPassthroughCopy("./src/fonts");
  eleventyConfig.addPassthroughCopy({
    "./src/favicons": ".",
    "./src/_talks/qcon-san-francisco-2023--understanding-platforms-what-they-are-why-they-work-when-to-use-them-how-to-build-them/images":
      "./talks/qcon-san-francisco-2023--understanding-platforms-what-they-are-why-they-work-when-to-use-them-how-to-build-them/images",
  });
  eleventyConfig.addPassthroughCopy("./src/images");

  foreach(transforms.shortcodes, (k, fn) => eleventyConfig.addShortcode(k, fn));
  foreach(transforms.asyncShortcodes, (k, fn) =>
    eleventyConfig.addAsyncShortcode(k, fn),
  );
  foreach(filters, (k, fn) => eleventyConfig.addFilter(k, fn));
  foreach(asyncFilters, (k, fn) =>
    eleventyConfig.addNunjucksAsyncFilter(k, fn),
  );
  foreach(transforms.collections, (k, fn) =>
    eleventyConfig.addCollection(k, fn),
  );

  return { ...c, dir: { input: c.dir.input, output: c.dir.output } };
}
