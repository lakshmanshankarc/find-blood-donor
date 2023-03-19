/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu': ['Ubuntu Mono', 'monospace'],
        'rale': ['Raleway', 'sans-serif']
      },
    },
  },
  plugins: [require("daisyui")],
}