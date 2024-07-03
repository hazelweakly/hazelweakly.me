// https://github.com/GoogleChrome/web.dev/blob/main/src/site/_transforms/minify-html.js

import minify from "@minify-html/node";
import { join, dirname } from "path";
import markdownIt from "markdown-it";
import Image, { generateHTML } from "@11ty/eleventy-img";
import slugify from "slugify";
import { pandoc } from "./utils.js";
import fs from "fs";
import prettier from "prettier";
import resolveConfig from "tailwindcss/resolveConfig.js";
import initialConfig from "../../tailwind.config.js";
import { all, createStarryNight } from "@wooorm/starry-night";
import { toHtml } from "hast-util-to-html";
import markdownItEleventyImg from "markdown-it-eleventy-img";
import markdownItDeflist from "markdown-it-deflist";
import markdownItFootnote from "markdown-it-footnote";
import markdownItAttrs from "markdown-it-attrs";
import markdownItAnchor from "markdown-it-anchor";
import { dir } from "./cfg.js";

const __dirname = import.meta.dirname;

// absolutely disgusting bullshit going on here
// because I can't use top level async or ESM anywhere
// This is also pretty fragile and is breaking the watch functionality
// occasionally.
// Eventually eleventy will support ESM everywhere and it'll be fine.
import { exec as execSync } from "child_process";
import { promisify } from "util";
const exec = promisify(execSync);

const starryNight = await createStarryNight(all);

const isProd = process.env.ELEVENTY_ENV === "prod";

const minifyHtml = (content, outputPath) => {
  if (isProd && outputPath && outputPath.endsWith(".html")) {
    try {
      content = minify(Buffer.from(content), {
        // See https://docs.rs/minify-html/latest/minify_html/struct.Cfg.html
        do_not_minify_doctype: true,
        ensure_spec_compliant_unquoted_attribute_values: true,
        keep_html_and_head_opening_tags: true,
        minify_css: true,
        minify_js: true,
        remove_processing_instructions: true,
        keep_closing_tags: true,
      });
    } catch (err) {
      console.warn(err, "while minifying", outputPath);
    }
  }

  return content;
};

const generateCSS = async ({ dir, runMode, outputMode } = {}) => {
  const config = resolveConfig(initialConfig);

  let result = "";

  const aliasedGroups = [
    { key: "spacing", prefix: "space" },
    { key: "fontSize", prefix: "size" },
  ];

  // Add a note that this is auto generated
  result += `
    /* VARIABLES GENERATED WITH TAILWIND CONFIG. */

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

    /* Convenience classes for setting flow-space */
  `;

  const { key, prefix } = aliasedGroups[0];
  const group = config.theme[key];

  if (!group) return;

  // prefix is generic here but really it's just space
  Object.keys(group).forEach((key) => {
    result += `.flow-${key === "DEFAULT" ? "base" : key}  > * + * {
        --flow-space: var(--${prefix}-${key === "DEFAULT" ? "base" : key});
      }`;
  });

  // Make the CSS readable to help people with auto-complete in their editors
  result = await prettier.format(result, { parser: "css" });

  // Push this file into the CSS dir, ready to go
  fs.writeFileSync(join(dir?.input ?? ".", "css", "custom-props.css"), result);
};

const generateResumePDF = async ({ dir, runMode, outputMode } = {}) => {
  if (!isProd) return;
  return await pandoc({
    format: "pdf",
    output: join(__dirname, "..", "..", dir.output, "resume.pdf"),
  });
};

const generateSlides = async ({ dir, runMode, outputMode } = {}) => {
  if (!isProd) return;

  const outputFile = join(
    __dirname,
    "..",
    "..",
    dir.output,
    "talks",
    "qcon-sf-2023",
    "slides.html",
  );
  const output = await exec(`pnpm build:html`, {
    cwd: join(__dirname, "..", "_talks", "qcon-sf-2023"),
  }).catch((e) => e);

  await exec(`cp ./${dir.input}/_talks/qcon-sf-2023/index.html ${outputFile}`, {
    cwd: join(__dirname, "..", ".."),
  }).catch((e) => e);

  return output;
};

export const markdownLibrary = markdownIt({
  html: true,
  typographer: true,
  highlight: function (value, lang) {
    const scope = starryNight.flagToScope(lang);

    return toHtml({
      type: "element",
      tagName: "pre",
      properties: {
        className: scope
          ? [
              "highlight",
              "highlight-" + scope.replace(/^source\./, "").replace(/\./g, "-"),
            ]
          : undefined,
      },
      children: scope
        ? starryNight.highlight(value, scope).children
        : [{ type: "text", value }],
    });
  },
})
  .use(markdownItEleventyImg, {
    imgOptions: {
      urlPath: "/images/",
      widths: [1000, 600, 300],
      formats: ["avif", "webp", "jpeg"],
      outputDir: join("public", "images"),
    },
    globalAttributes: {
      decoding: "async",
      sizes: "100vw",
    },
    renderImage(image, attributes) {
      const [Image, options] = image;
      const [src, attrs] = attributes;

      Image(src, options);

      const metadata = Image.statsSync(src, options);
      const imageMarkup = Image.generateHTML(metadata, attrs, {
        whitespaceMode: "inline",
      });

      return `<figure class="flow bordered-box ${
        attrs.title ? `has-caption` : ""
      }">${imageMarkup}${
        attrs.title ? `<figcaption>${attrs.title}</figcaption>` : ""
      }</figure>`;
    },
  })
  .use(markdownItDeflist)
  .use(markdownItFootnote)
  .use(markdownItAttrs, {
    leftDelimiter: "{",
    rightDelimiter: "}",
    allowedAttributes: ["id", "class", /^data-.*$/],
  })
  .use(markdownItAnchor, {
    level: 2,
    permalink: markdownItAnchor.permalink.headerLink({
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
  const prefix = links
    .map(
      (url) =>
        `<link rel="preload" href="/fonts/${url}.woff2" as="font" type="font/woff2" crossorigin="anonymous" data-helmet="${url}" />`,
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
rules.em_open = prefixLink(["zilla-slab-v11-latin-400italic"], em_open);

const strong_open = rules.strong_open;
rules.strong_open = prefixLink(["zilla-slab-v11-latin-700"], strong_open);

const code_block = rules.code_block;
rules.code_block = prefixLink(
  ["VictorMono-v1.5.3-Regular", "VictorMono-v1.5.3-Italic"],
  code_block,
);

const fence = rules.fence;
rules.fence = prefixLink(
  ["VictorMono-v1.5.3-Regular", "VictorMono-v1.5.3-Italic"],
  fence,
);

const code_inline = rules.code_inline;
rules.code_inline = prefixLink(["VictorMono-v1.5.3-Regular"], code_inline);

const hr = rules.hr;
rules.hr = (tokens, idx, options, env, self) =>
  `<div class="py-4">` +
  (hr
    ? hr(tokens, idx, options, env, self)
    : self.renderToken(tokens, idx, options)) +
  `</div>`;

async function imageShortcode(src, alt, sizes) {
  const metadata = await Image(src, {
    widths: [300, 600],
    formats: ["avif", "jpeg"],
  });

  const imageAttributes = { alt, sizes, loading: "lazy", decoding: "async" };

  return generateHTML(metadata, imageAttributes, {
    whitespaceMode: "inline",
  });
}

const yearShortcode = () => `${new Date().getFullYear()}`;

const criticalCSS = async (content, outputPath) => {
  if (isProd && outputPath && outputPath.endsWith(".html")) {
    const outputDir = dir.output;

    // Generate HTML with critical CSS
    try {
      const { html, css } = await import("critical").then((critical) =>
        critical.generate({
          assetPaths: [dirname(outputPath)],
          base: outputDir,
          html: content,
          inline: true,
          ignore: {
            atrule: ["@font-face"],
            decl: (_, value) => /url\(/.test(value),
          },
          rebase: ({ originalUrl }) => originalUrl,
        }),
      );

      // compute sha256 here.
      // somehow CSP header something. Dump shit into a netlify file or smth
      return html;
    } catch (_) {}
  }
  return content;
};

const pages = (api) =>
  api
    .getFilteredByTag("_pages")
    .sort((a, b) => +a?.data?.order - +b?.data?.order);

const blog = (api) =>
  api
    .getFilteredByTag("_blog")
    .filter((p) => !p?.data?.draft)
    .sort((a, b) => +a?.data?.order - +b?.data?.order);

const headerPages = (api) =>
  pages(api).filter(
    (p) =>
      !!p?.data?.header ||
      (p?.data?.header === undefined && p?.data?.footer === undefined),
  );

const footerPages = (api) => pages(api).filter((p) => !!p?.data?.footer);

const talks = (api) =>
  api.getFilteredByTag("talk").sort((a, b) => +a?.data?.date - +b?.data?.date);

export default {
  markdownLibrary,
  before: { generateCSS },
  after: { generateResumePDF, generateSlides },
  plugins: {
    // "@11ty/eleventy-plugin-syntaxhighlight": {},
    "@11ty/eleventy-plugin-directory-output": {},
    "@11ty/eleventy-plugin-rss": {},
    "@11ty/eleventy-plugin-webc": {
      components: "src/_components/**/*.webc",
    },
    "eleventy-plugin-helmet": {},
    "eleventy-plugin-embed-everything": {
      youtube: {
        options: {
          lite: true,
        },
      },
    },
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
  collections: {
    pages,
    blog,
    headerPages,
    footerPages,
    talks,
  },
};
