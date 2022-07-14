const exec = require("node:util").promisify(require("child_process").exec);

const pandocArgs = ({ format, output }) => {
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

const pandoc = async ({ format, output }) =>
  await exec(pandocArgs({ format, output }), {
    cwd: require("./cfg").dir.resume,
  }).then((x) => x.stdout);

module.exports = { pandoc, pandocArgs };
