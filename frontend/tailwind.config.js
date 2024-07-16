/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    function ({ addUtilities }) {
      addUtilities({
        'input[type="number"]::-webkit-outer-spin-button, input[type="number"]::-webkit-inner-spin-button':
          {
            "-webkit-appearance": "none",
            margin: "0",
          },
        'input[type="number"]': {
          "-moz-appearance": "textfield",
        },
      });
    },
  ],

  daisyui: {
    themes: false,
    darkTheme: "light",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
};
