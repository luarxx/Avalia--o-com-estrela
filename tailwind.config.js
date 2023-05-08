/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        orange1: "hsl(25, 97%, 53%)",
      },
    },
  },
  plugins: [],
  plugins: [require("daisyui")],
};
