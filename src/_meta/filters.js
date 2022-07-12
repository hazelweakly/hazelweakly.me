const { DateTime } = require("luxon");
const p = require("postcss");
const postcssLoadConfig = require("postcss-load-config");
const slugify = require("slugify");
const meta = require("../_data/meta");

const generateResume = async (_, done) => {
  const fs = require("fs");
  const exec = require("node:util").promisify(require("child_process").exec);

  // pandoc -s --to=latex --pdf-engine=tectonic --pdf-engine-opt=-Zsearch-path=$FONT_DIR --lua-filter filter.lua --template mcdowell.tex cv.md -o -
  const pandoc = (format) =>
    [
      "pandoc",
      format === "pdf" ? "-s" : "",
      "--pdf-engine=tectonic",
      `--to=${format}`,
      `--pdf-engine-opt=-Zsearch-path=${process.env.FONT_DIR ?? ""}`,
      "--lua-filter filter.lua",
      format === "pdf" ? "--template mcdowell.tex" : "",
      "cv.md",
      format === "pdf"
        ? `-o ${require("path").join(
            __dirname,
            "..",
            "..",
            "public",
            "resume.pdf",
          )}`
        : "-o -",
    ].join(" ");

  const html = await exec(pandoc("html"), {
    cwd: require("path").join(__dirname, "..", "resume"),
  }).then((x) => x.stdout);

  // lmao hax n crimes
  await exec(pandoc("pdf"), {
    cwd: require("path").join(__dirname, "..", "resume"),
  });

  return done(null, html);
};

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
  asyncFilters: { postcss, generateResume },
};
