/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "lightgreen": "#2DBBAD",
        "lightgray": "#f0f2f5"
      },
      colors: {
        'lightgreen': '#2DBBAD',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
