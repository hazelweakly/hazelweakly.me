const resolveConfig = require("tailwindcss/resolveConfig");
const initialConfig = require("../../tailwind.config.js");
const config = resolveConfig(initialConfig);

module.exports = {
  colors() {
    let response = [];

    Object.keys(config.theme.colors).forEach((key) => {
      response.push({
        value: config.theme.colors[key],
        key,
      });
    });

    return response;
  },
  sizes() {
    let response = [];

    Object.keys(config.theme.spacing).forEach((key) => {
      response.push({
        value: config.theme.spacing[key],
        key,
      });
    });

    return response;
  },
};
