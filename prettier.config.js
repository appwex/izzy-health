module.exports = {
  semi: false,
  singleQuote: true,
  arrowParens: "avoid",
  endOfLine: "auto",
};

// One limitation with this approach is that prettier-plugin-tailwindcss must be loaded last
// https://github.com/tailwindlabs/prettier-plugin-tailwindcss
module.exports = {
  plugins: [require("prettier-plugin-tailwindcss")],
};
