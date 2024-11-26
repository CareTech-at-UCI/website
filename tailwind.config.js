/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Montserrat', 'sans-serif'], // For general Montserrat font
        normal: ['Montserrat', 'sans-serif'],  // For Regular weight (400)
        medium: ['Montserrat', 'sans-serif'],  // For Medium weight (500)
        semibold: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}