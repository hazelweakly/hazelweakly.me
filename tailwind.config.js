// https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js

/** @type {import('tailwindcss').Config} */
export const darkMode = "class";
export const mode = "jit";
export const content = [
  "./src/{_includes,_includes/partials,pages}/*.html",
  "./src/*.njk",
  "./src/{_data,_includes,_meta,blog,cfps,pages,podcasts,talks}/*.js",
  "./src/*.md",
  "./src/{blog,cfps,pages,podcasts,talks}/*.md",
];
export const safelist = [
  "text-inherit",
  "text-current",
  "text-transparent",
  "text-primary",
  "text-secondary",
  "text-bg",
  "text-fg",
  "font-display",
  "font-heading",
  "font-body",
  "font-mono",
  "w-full",
  "px-0",
  "text-0",
  "text-1",
  "text-2",
  "text-3",
  "text-4",
  "text-5",
  "text-6",
  "text-7",
  "text-8",
  "text-px",
  "text-DEFAULT",
  "text-0-5",
  "flow-5",
];
export const theme = {
  // soft summer color palette
  colors: {
    inherit: "inherit",
    current: "current",
    transparent: "transparent",
    primary: "hsl(var(--color-primary))",
    secondary: "hsl(var(--color-secondary))",
    bg: "hsl(var(--color-bg))",
    fg: "hsl(var(--color-fg))",
  },
  /* @link https://utopia.fyi/type/calculator?c=320,18,1.25,2160,26,1.5,6,4,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l */
  spacing: {
    px: "2px",
    0: "0",
    DEFAULT: "clamp(1.00rem, 1.00rem + 0.00vw, 1.00rem)",
    "0-5": "clamp(0.72rem, 0.72rem + 0.00vw, 0.72rem)",
    1: "clamp(1.00rem, 0.87rem + 0.16vw, 1.08rem)",
    2: "clamp(1.13rem, 1.04rem + 0.43vw, 1.63rem)",
    3: "clamp(1.41rem, 1.23rem + 0.90vw, 2.44rem)",
    4: "clamp(1.76rem, 1.43rem + 1.65vw, 3.66rem)",
    5: "clamp(2.20rem, 1.63rem + 2.86vw, 5.48rem)",
    6: "clamp(2.75rem, 1.79rem + 4.77vw, 8.23rem)",
    7: "clamp(3.43rem, 1.88rem + 7.75vw, 12.34rem)",
    8: "clamp(4.29rem, 1.82rem + 12.36vw, 18.51rem)",
  },
  fontSize: ({ theme }) => theme("spacing"),
  textColor: ({ theme }) => ({
    ...Object.fromEntries(
      Object.entries(theme("colors")).filter(([k, _]) => k !== "current"),
    ),
    currentColor: "currentColor",
  }),
  fontFamily: {
    display: ["Italiana", "ui-serif", "serif"],
    heading: ['"Zilla Slab"', "ui-serif", "serif"],
    body: ['"Zilla Slab"', "ui-sans-serif", "sans-serif"],
    mono: ['"Victor Mono"', "ui-mono", "mono"],
  },
  fontWeight: {
    bold: 700,
    normal: 400,
  },
};
export const corePlugins = {
  preflight: false,
};

export default {
  darkMode,
  mode,
  content,
  theme,
  corePlugins,
  safelist,
};
