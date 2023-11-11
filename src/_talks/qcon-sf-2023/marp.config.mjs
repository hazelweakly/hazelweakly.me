import { Marp } from "@marp-team/marp-core";
import jsdom from "jsdom";
import path from "path";

import { run } from "@mermaid-js/mermaid-cli";
import temp from "temp";
import fs from "fs/promises";

import mia from "markdown-it-attrs";
import mis from "markdown-it-sup";
import misu from "markdown-it-sub";
import mibs from "markdown-it-bracketed-spans";
import mibt from "markdown-it-multimd-table";
import mditTOC from "markdown-it-table-of-contents";
import markdownitinclude from "markdown-it-include";
import deflist from "markdown-it-deflist";

temp.track();

let cache = {};
let cleanupInterval = 2; // minutes
let cleanupTreshold = 30; // minimum cache size
setInterval(() => {
  if (Object.keys(cache).length < cleanupTreshold) return;
  console.log("clear mermaid cache!");
  cache = {};
}, cleanupInterval * 60000);

async function marpMermaid(md) {
  const { fence } = md.renderer.rules; // super fence block rule
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const info = md.utils.unescapeAll(tokens[idx].info).trim();
    const graphDefinition = tokens[idx].content;
    const cssClassName = `mermaid-${idx}`;
    const [_, lang, userOptions] = info?.match(/(\w+)\s*(?:\s*(.+)\s*)?/) || {};
    if (lang !== "mermaid")
      return fence.call(self, tokens, idx, options, env, self);

    let opts = { width: "100%", type: "png", align: "center" };
    userOptions
      ?.replaceAll(" = ", "=")
      .split(" ")
      .forEach((pair) => {
        const [key, value] = pair.split("=");
        opts[key] = value;
      });
    return `
      <style>
        .${cssClassName} {
          text-align: ${opts.align};
        }
        .${cssClassName} img,
        .${cssClassName} svg {
          width: ${opts.width};
        }
      </style>
      <div class="__mermaid ${cssClassName}"
           data-type="${opts.type}"
           data-idx=${idx}>
        ${graphDefinition}
      </div>
    `;
  };
}

async function postProcessor(_markdown, _env, html, css, comments) {
  const doc = new jsdom.JSDOM(html); // parse html to DOM
  const mermaidDivs = doc.window.document.querySelectorAll("div.__mermaid");
  for (const element of mermaidDivs) await processMermaidDivCli(element);
  const processedHtml = doc.window.document.documentElement.outerHTML;
  return { html: processedHtml, css, comments };
}

async function processMermaidDivCli(div) {
  const graphDefinition = div.textContent;
  const cacheKey = btoa(graphDefinition) + div.dataset.type;

  // Return cached Image
  if (cache[cacheKey]) {
    if (div.dataset.type === "png")
      div.innerHTML = `<img src="data:image/png;base64,${cache[cacheKey]}" alt="" />`;
    else div.innerHTML = cache[cacheKey];
    return;
  }

  const dirPath = await temp.mkdir("mermaid");
  let inputFile = path.join(dirPath, "input.mmd");
  let outputFile = path.join(dirPath, "output");
  await fs.writeFile(inputFile, graphDefinition);
  await run(inputFile, outputFile, {
    outputFormat: div.dataset.type || "png",
    puppeteerConfig: {
      headless: "new",
      args: [
        "--no-sandbox",
        "--disable-web-security",
        "--disable-features=IsolateOrigins,site-per-process",
        "--force-color-profile=srgb",
        "--font-render-hinting=none",
      ],
      ignoreHTTPSErrors: true,
    },
    parseMMDOptions: {
      viewport: { height: 600, width: 800, deviceScaleFactor: 2 },
    },
  });
  if (div.dataset.type === "png") {
    cache[cacheKey] = await fs.readFile(outputFile, {
      encoding: "base64",
    });
    div.innerHTML = `<img src="data:image/png;base64,${cache[cacheKey]}" alt="" />`;
  } else {
    cache[cacheKey] = await fs.readFile(outputFile);
    div.innerHTML = cache[cacheKey];
  }
}

/*
 * Custom Marp engine with async post-processing
 * Useful for async rendering
 * https://github.com/markdown-it/markdown-it/issues/248
 */
class PostprocessMarpitEngine extends Marp {
  constructor(options, postprocess) {
    super(options);
    this.postprocess = postprocess;
  }

  withPostprocess(postprocess) {
    this.postprocess = postprocess;
    return this;
  }

  async render(markdown, env = {}) {
    const { html, css, comments } = super.render(markdown, env);
    if (this.postprocess) {
      return await this.postprocess(markdown, env, html, css, comments);
    }
    return { html, css, comments };
  }
}

/** @type {import('@marp-team/marp-cli').Config} */
const config = {
  theme: "hazel",
  allowLocalFiles: true,
  themeSet: "./themes",
  inputDir: ".",
  html: true,
  engine: async (constructorOptions) => {
    return new PostprocessMarpitEngine(constructorOptions)
      .use(mia)
      .use(mis)
      .use(misu)
      .use(mibs)
      .use(mibt, {
        multiline: true,
      })
      .use(mditTOC, { includeLevel: [1] })
      .use(marpMermaid)
      .use(markdownitinclude)
      .use(deflist)
      .withPostprocess(postProcessor);
  },
};
export default config;
