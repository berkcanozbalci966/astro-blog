/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,astro,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
