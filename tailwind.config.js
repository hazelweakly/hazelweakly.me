module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,njk,js,md}"],
  theme: {
    // soft summer color palette
    colors: {
      inherit: "inherit",
      current: "current",
      transparent: "transparent",
      primary: "#8996c6",
      secondary: "#aa4064",
      light: "#f9f9f9",
      dark: "#43464c",
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
    },
    fontSize: ({ theme }) => theme("spacing"),
    textColor: ({ theme }) => ({
      ...Object.fromEntries(
        Object.entries(theme("colors")).filter(([k, _]) => k !== "current")
      ),
      currentColor: "currentColor",
    }),
    fontFamily: {
      sans: [
        '"Inter"',
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ],
    },
  },
};
