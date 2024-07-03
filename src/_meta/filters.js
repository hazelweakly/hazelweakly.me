import { DateTime } from "luxon";
import p from "postcss";
import postcssLoadConfig from "postcss-load-config";
import slugify from "slugify";
import { url as _url } from "../_data/meta.js";
import { markdownLibrary } from "./transforms.js";
import { pandoc } from "./utils.js";
import jsdom from "jsdom";

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
    ({ plugins, options }) =>
      p(plugins)
        .process(cssCode, { from: "src/css/index.css" })
        .then(
          (r) => done(null, r.css),
          (e) => done(e, null),
        ),
  );

const postDate = (dateObj) =>
  DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);

const slug = (str) =>
  !!str
    ? slugify(str, { lower: true, strict: true, remove: /["]/g })
    : undefined;

const toAbsoluteUrl = (url) => new URL(url, _url).href;

const parseAsMarkdown = (data) => markdownLibrary.render(data);

// Ok fine I'll use an HTML parser. Ugh, whatever.
const excerpt = (post) => {
  const doc = new jsdom.JSDOM(post);
  const content = [...doc.window.document.querySelectorAll("h1 ~ *")]
    .map((x) => x.textContent.trim())
    .join(" ")
    .replace(/[\r\n]+/g, " ");

  return content.length <= 160
    ? content
    : content.slice(0, content.lastIndexOf(" ", 160)) + "...";
};

export const filters = {
  postDate,
  slug,
  toAbsoluteUrl,
  excerpt,
  parseAsMarkdown,
};
export const asyncFilters = { postcss, generateResume };
