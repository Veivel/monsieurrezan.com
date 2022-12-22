/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "plus-jakarta": "Plus Jakarta Display"
      },
      colors: {
        "1-dark-blue": "#1c375b",
        "2-light-blue": "#6f8197",
        "3-tinted-white": "#f5f5f5",
        "4-light-red": "#d2544a",
        "5-dark-red": "#cd4236"
      }
    },
  },
  plugins: [],
}
