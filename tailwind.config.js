/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      SourceCodePro: ["Source Code Pro", "normal"],
      herrVonMuellerhoff: ["Herr Von Muellerhoff", "cursive"],
    },
  },
  plugins: [],
};
