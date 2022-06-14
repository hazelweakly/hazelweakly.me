// https://github.com/GoogleChrome/web.dev/blob/main/src/site/_transforms/minify-html.js

const htmlMinifier = require("@minify-html/js");
const path = require("path");
const markdownIt = require("markdown-it");
const Image = require("@11ty/eleventy-img");
const slugify = require("slugify");

const isProd = process.env.ELEVENTY_ENV === "prod";

const minifyHtml = (content, outputPath) => {
  if (isProd && outputPath && outputPath.endsWith(".html")) {
    try {
      content = htmlMinifier.minify(
        content,
        htmlMinifier.createConfiguration({
          // See https://docs.rs/minify-html/latest/minify_html/struct.Cfg.html
          do_not_minify_doctype: true,
          ensure_spec_compliant_unquoted_attribute_values: true,
          keep_html_and_head_opening_tags: true,
          minify_css: true,
          minify_js: true,
          remove_processing_instructions: true,
          keep_closing_tags: true,
        }),
      );
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
    result,
  );
};

const markdownLibrary = markdownIt({
  html: true,
  typographer: true,
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
  });

/**
 * add font link to the beginning of the block
 * 11ty helmet will kick in and de-duplicate them and add them to the head of
 * the document.
 *
 * { "zilla-italic": "/fonts/...", } => `<link rel= ...`
 */
const prefixLink = (links, fn) => {
  const prefix = Object.entries(links)
    .map(
      ([helmet, url]) =>
        `<link rel="preload" href="/fonts/${url}.woff2" as="font" type="font/woff2" crossorigin="anonymous" data-helmet="${helmet}" />`,
    )
    .join("");
  return (tokens, idx, options, env, self) =>
    prefix +
    (fn
      ? fn(tokens, idx, options, env, self)
      : self.renderToken(tokens, idx, options));
};

const rules = markdownLibrary.renderer.rules;

const em_open = rules.em_open;
rules.em_open = prefixLink(
  { "zilla-italic": "/zilla-slab-v11-latin-500italic" },
  em_open,
);

const strong_open = rules.strong_open;
rules.strong_open = prefixLink(
  { "zilla-strong": "zilla-slab-v11-latin-700" },
  strong_open,
);

const code_block = rules.code_block;
rules.code_block = prefixLink(
  {
    "victor-regular": "VictorMono-v1.5.3-Regular",
    "victor-italic": "VictorMono-v1.5.3-Italic",
  },
  code_block,
);

const fence = rules.fence;
rules.fence = prefixLink(
  {
    "victor-regular": "VictorMono-v1.5.3-Regular",
    "victor-italic": "VictorMono-v1.5.3-Italic",
  },
  fence,
);

const code_inline = rules.code_inline;
rules.code_inline = prefixLink(
  {
    "victor-regular": "VictorMono-v1.5.3-Regular",
  },
  code_inline,
);

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

const criticalCSS = async (content, outputPath) => {
  if (outputPath && outputPath.endsWith(".html")) {
    const outputDir = require("./cfg").dir.output;

    // Generate HTML with critical CSS
    const { html } = await require("critical").generate({
      assetPaths: [path.dirname(outputPath)],
      base: outputDir,
      html: content,
      inline: true,
      ignore: {
        atrule: ["@font-face"],
        decl: (node, value) => /url\(/.test(value),
      },
      rebase: ({ originalUrl }) => originalUrl,
    });

    return html;
  }
  return content;
};

module.exports = {
  markdownLibrary,
  before: { generateCSS },
  plugins: {
    "@11ty/eleventy-plugin-syntaxhighlight": {},
    "@11ty/eleventy-plugin-rss": {},
    "eleventy-plugin-helmet": {},
  },
  transforms: {
    criticalCSS,
    minifyHtml,
  },
  asyncShortcodes: {
    image: imageShortcode,
  },
  shortcodes: {
    year: yearShortcode,
  },
};
