/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#4ADE80",
        darkBg: "#0F172A",   // <- кастомный цвет
        steelGray: "#334155",
      },
    },
  },
  plugins: [],
};