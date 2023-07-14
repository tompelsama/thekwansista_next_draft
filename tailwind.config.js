const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'gray': '#E5E5E5',
      'blue': '#14213D',
      'yellow': '#FCA311',
      'black': colors.black
    },
    backgroundColor: {
      'black': colors.black,
      'light-black': '#0D0D0D',
      'gray': '#E5E5E5',
      'yellow': '#FCA311',
    }
  },
  plugins: [],
}
