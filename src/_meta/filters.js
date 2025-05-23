import { DateTime } from "luxon";
import p from "postcss";
import postcssLoadConfig from "postcss-load-config";
import slugify from "slugify";
import { url as _url } from "../_data/meta.js";
import { markdownLibrary } from "./transforms.js";
import { pandoc } from "./utils.js";
import jsdom from "jsdom";
import { purgeCSSPlugin } from "@fullhuman/postcss-purgecss";
import { content } from "../../tailwind.config.js";

const generateResume = async (_, done) =>
  done(
    null,
    await pandoc({
      format: "html",
      output: "-",
    }),
  );

const postcss = async (cssCode, done) =>
  postcssLoadConfig({ env: process.env.ELEVENTY_ENV }).then(
    ({ plugins, options }) => {
      if (process.env.ELEVENTY_ENV === "prod") {
        plugins.push(
          purgeCSSPlugin({
            content,
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
              /pl-.*$/,
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
          }),
        );
      }
      return p(plugins)
        .process(cssCode, { ...options, from: "src/css/index.css" })
        .then(
          (r) => done(null, r.css),
          (e) => done(e, null),
        );
    },
  );

const postDate = (dateObj) =>
  DateTime.fromJSDate(dateObj).toUTC().toLocaleString(DateTime.DATE_MED);

const isFutureDate = (dateObj) =>
  DateTime.fromJSDate(dateObj).diffNow("days").days > 0;

const slug = (str) =>
  !!str
    ? slugify(str, { lower: true, strict: true, remove: /["]/g })
    : undefined;

const toAbsoluteUrl = (url) => new URL(url, _url).href;

const parseAsMarkdown = (data) => markdownLibrary.render(data);

// Ok fine I'll use an HTML parser. Ugh, whatever.
const excerpt = (post) => {
  const doc = new jsdom.JSDOM(post);
  const content = [
    ...doc.window.document.querySelectorAll("h1 ~ *:not([data-nosnippet])"),
  ]
    .map((x) => x.textContent.trim())
    .join(" ")
    .replace(/[\r\n]+/g, " ");

  return content.length <= 160
    ? content
    : content.slice(0, content.lastIndexOf(" ", 160)) + "...";
};

export const filters = {
  postDate,
  isFutureDate,
  slug,
  toAbsoluteUrl,
  excerpt,
  parseAsMarkdown,
};
export const asyncFilters = { postcss, generateResume };
