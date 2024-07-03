import { join } from "path";
const __dirname = import.meta.dirname;
export const dir = {
  input: "src",
  output: "public",
  resume: join(__dirname, "..", "_resume"),
};
export const markdownTemplateEngine = "njk";
export const dataTemplateEngine = "njk";
export const htmlTemplateEngine = "njk";

export default {
  dir,
  markdownTemplateEngine,
  dataTemplateEngine,
  htmlTemplateEngine,
};
