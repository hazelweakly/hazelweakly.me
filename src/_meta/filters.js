const { DateTime } = require("luxon");
const p = require("postcss");
const postcssLoadConfig = require("postcss-load-config");
const slugify = require("slugify");

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

const toAbsoluteUrl = (url) => new URL(url, require("../_data/meta").url).href;

module.exports = { postcss, postDate, slug, toAbsoluteUrl };
