// https://github.com/GoogleChrome/web.dev/blob/main/src/site/_transforms/minify-html.js

const htmlMinifier = require("@minify-html/js");
const path = require("path");
const { URL } = require("url");

const isProd = process.env.ELEVENTY_ENV === "prod";

const config = htmlMinifier.createConfiguration({
  // See https://docs.rs/minify-html/latest/minify_html/struct.Cfg.html
  do_not_minify_doctype: true,
  ensure_spec_compliant_unquoted_attribute_values: true,
  keep_spaces_between_attributes: true,
});

const minifyHtml = (content, outputPath) => {
  if (isProd && outputPath && outputPath.endsWith(".html")) {
    try {
      content = htmlMinifier.minify(content, config);
    } catch (err) {
      console.warn(err, "while minifying", outputPath);
    }
  }

  return content;
};

module.exports = { minifyHtml };
