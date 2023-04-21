/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        title: ["Montserrat-Bold"],
      },
      colors: {
        background: "8ecae6",
        button: "#2565f5",  
        blue: "8ecae6"
      }
    },
  },
  plugins: [],
}
