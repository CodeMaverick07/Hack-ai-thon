/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        robo: ["Roboto Mono", "monospace"],
        ai: ["Russo One", "sans-serif", "system-ui"],
        nav: ["Electrolize", "sans-serif"],
        pop: ["Poppins", "sans-serif"],
      },
      colors: {
        background: "#C0C0C0",
        darkbg: "#21262d",
      },
    },
  },
  plugins: [],
};
