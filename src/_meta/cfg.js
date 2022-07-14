module.exports = {
  dir: {
    input: "src",
    output: "public",
    resume: require("path").join(__dirname, "..", "_resume"),
  },
  markdownTemplateEngine: "njk",
  dataTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
};
