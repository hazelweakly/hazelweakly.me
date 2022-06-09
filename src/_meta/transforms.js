// https://github.com/GoogleChrome/web.dev/blob/main/src/site/_transforms/minify-html.js

const htmlMinifier = require("@minify-html/js");
const path = require("path");
const markdownIt = require("markdown-it");
const Image = require("@11ty/eleventy-img");
const slugify = require("slugify");

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

const generateCSS = async ({ dir, runMode, outputMode } = {}) => {
  const fs = require("fs");
  const prettier = require("prettier");

  const resolveConfig = require("tailwindcss/resolveConfig");
  const initialConfig = require("../../tailwind.config.js");
  const config = resolveConfig(initialConfig);

  let result = "";

  const aliasedGroups = [
    { key: "colors", prefix: "color" },
    { key: "spacing", prefix: "space" },
    { key: "fontSize", prefix: "size" },
  ];

  // Add a note that this is auto generated
  result += `
    /* VARIABLES GENERATED WITH TAILWIND CONFIG ON ${new Date().toLocaleDateString()}.
    Tokens location: ../../tailwind.config.js */

    :root {
  `;

  // Loop each group's keys, use that and the associated
  // property to define a :root custom prop
  result += ` /* Aliased groups for convenience */ `;
  aliasedGroups.forEach(({ key, prefix }) => {
    const group = config.theme[key];

    if (!group) return;

    Object.keys(group).forEach((key) => {
      result += `--${prefix}-${key === "DEFAULT" ? "base" : key}: ${
        group[key]
      };`;
    });
  });

  // Close the :root block
  result += `
    }
  `;

  // Make the CSS readable to help people with auto-complete in their editors
  result = prettier.format(result, { parser: "css" });

  // Push this file into the CSS dir, ready to go
  fs.writeFileSync(
    path.join(dir?.input ?? ".", "css", "custom-props.css"),
    result
  );
};

const markdownLibrary = markdownIt({
  html: true,
})
  .use(require("markdown-it-deflist"))
  .use(require("markdown-it-attrs"), {
    leftDelimiter: "{",
    rightDelimiter: "}",
    allowedAttributes: ["id", "class", /^data-.*$/],
  })
  .use(require("markdown-it-anchor"), {
    level: 2,
    permalink: require("markdown-it-anchor").permalink.headerLink({
      safariReaderFix: true,
    }),
    slugify: (s) => slugify(s, { lower: true }),
  })
  .disable("code");

async function imageShortcode(src, alt, sizes) {
  const metadata = await Image(src, {
    widths: [300, 600],
    formats: ["avif", "jpeg"],
  });

  const imageAttributes = { alt, sizes, loading: "lazy", decoding: "async" };

  return Image.generateHTML(metadata, imageAttributes, {
    whitespaceMode: "inline",
  });
}

yearShortcode = () => `${new Date().getFullYear()}`;

module.exports = {
  minifyHtml,
  generateCSS,
  markdownLibrary,
  imageShortcode,
  yearShortcode,
};
