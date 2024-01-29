/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        robo: ["Roboto Mono", "monospace"],
        ai: ["Sixtyfour", "sans-serif"],
        pop: ['Poppins', "sans-serif"],
      },
    },
  },
  plugins: [],
};
