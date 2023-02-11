/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "inter": "Inter",
      },
      colors: {
        "primary": "#00ebc7",
        "secondary": "#fde24f",
        "danger": "#ff5470",
        "dark": "#00214d",
        "white": "#fffffe",
      }
    },
  },
  plugins: [],
}
