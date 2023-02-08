/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F8F9FA",
        "gray-custom": "#67748E",
        "dark-gray": "#384764",
        purple: "#8553FB",
        "purple-start": "#A76FFF",
        "purple-end": "#7445F8",
        red: "#4B4EFC",
        green: "#01B052",
        blue: "#4B4EFC",
      },
      boxShadow: {
        "nav-icon": "0px 4px 6px -0.5px rgba(0, 0, 0, 0.2)",
        "hero-items": "0px 20px 27px 0px #0000000D",
        "date-view": "0px 20px 27px 0px #0000000D"
      },
    },
  },
  plugins: [],
};
