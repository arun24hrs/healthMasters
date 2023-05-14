/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "off-white": "#DAD7CD",
        "pale-green": "#A3B18A",
        "green-clr": "#588157",
        "dark-green": "#3A5A40",
        "core-green": "#344E41"
      }
    },
  },
  plugins: [],
}