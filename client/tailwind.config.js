/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      position: {
        'sticky': 'sticky'
      },
      fontFamily: {
        alfa: ['Alfa Slab One']
      }
    },
  },
  plugins: [],
}