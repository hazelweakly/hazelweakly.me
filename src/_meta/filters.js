const { DateTime } = require("luxon");
const p = require("postcss");
const slugify = require("slugify");

const postcss = async (cssCode, done) =>
  p()
    .use(require("postcss-import-ext-glob"))
    .use(require("postcss-import"))
    .use(require("tailwindcss"))
    .process(cssCode, { from: "src/css/index.css" })
    .then(
      (r) => done(null, r.css),
      (e) => done(e, null)
    );

const postDate = (dateObj) =>
  DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);

const slug = (str) =>
  !!str
    ? slugify(str, { lower: true, strict: true, remove: /["]/g })
    : undefined;

const toAbsoluteUrl = (url) => new URL(url, require("../_data/meta").url).href;

module.exports = { postcss, postDate, slug, toAbsoluteUrl };
