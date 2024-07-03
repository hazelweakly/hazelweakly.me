import { promisify } from "node:util";
import { exec as execSync } from "node:child_process";
import { dir } from "./cfg.js";
const exec = promisify(execSync);

export const pandocArgs = ({ format, output }) => {
  const pdfArgs = [
    "-s --pdf-engine=tectonic --template mcdowell.tex",
    `--pdf-engine-opt=-Zsearch-path=${process.env.FONT_DIR ?? ""}`,
  ];
  return [
    `pandoc --to=${format} --lua-filter filter.lua`,
    ...(format === "pdf" ? pdfArgs : []),
    `-o ${output} cv.md`,
  ].join(" ");
};

export const pandoc = async ({ format, output }) =>
  await exec(pandocArgs({ format, output }), {
    cwd: dir.resume,
  }).then((x) => x.stdout);

export default { pandoc, pandocArgs };
