/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,astro,tsx,vue}",
    "./src/**/**/*.{html,js,astro,tsx,vue}",
  ],
  theme: {
    fontSize: {
      "2xl": "1.5rem",
      "3xl": "2rem",
      "8xl": "10rem",
    },
    extend: {},
    daisyui: {
      themes: ["cupcake", "dark", "cmyk"],
    },
  },
  plugins: [require("daisyui")],
};
