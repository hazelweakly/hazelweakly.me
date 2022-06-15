const { DateTime } = require("luxon");
const p = require("postcss");
const postcssLoadConfig = require("postcss-load-config");
const slugify = require("slugify");
const meta = require("../_data/meta");

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

const toAbsoluteUrl = (url) => new URL(url, meta.url).href;

const excerpt = (post) => {
  const content = post
    .replace(/(<([^>]+)>)/gi, "")
    .split(/([\r\n ])+/)
    .filter((x) => x)
    .join("");
  return content.trim().substr(0, content.lastIndexOf(" ", 200)) + "...";
};

module.exports = {
  filters: { postDate, slug, toAbsoluteUrl, excerpt },
  asyncFilters: { postcss },
};
