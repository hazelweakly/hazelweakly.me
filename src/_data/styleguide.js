import resolveConfig from "tailwindcss/resolveConfig.js";
import initialConfig from "../../tailwind.config.js";
const config = resolveConfig(initialConfig);

export function colors() {
  let response = [];

  Object.keys(config.theme.colors).forEach((key) => {
    response.push({
      value: config.theme.colors[key],
      key,
    });
  });

  return response;
}
export function sizes() {
  let response = [];

  Object.keys(config.theme.spacing).forEach((key) => {
    response.push({
      value: config.theme.spacing[key],
      key,
    });
  });

  return response;
}
