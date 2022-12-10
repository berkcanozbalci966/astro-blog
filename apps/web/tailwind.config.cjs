/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,astro,jsx,vue}"],
  theme: {
    fontSize: {
      "2xl": "1.5rem",
      "3xl": "2rem",
      "8xl": "10rem",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
