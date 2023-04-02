/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        dunes: "url('/src/assets/DefiImage.png')",
      }),
    },
  },
  plugins: [],
}
