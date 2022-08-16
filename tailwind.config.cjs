/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        bounce: "bounce 0.3s infinite",
      },
    },
  },
  plugins: [],
};
