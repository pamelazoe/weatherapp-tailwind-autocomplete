module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Nunito"],
    },
    extend: {
      gridTemplateRows: {
        8: "repeat(8, minmax(0, 1fr))",
        16: "repeat(16, minmax(0, 1fr))",
      },
      gridRow: {
        "span-9": "span 9 / span 9",
        "span-11": "span 11 / span 11",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
