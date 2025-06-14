/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./components/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#e3d9cf',
          200: '#c7b29e',
          300: '#af9174',
          400: '#8e6f52',
          500: '#644f3a',
          10: '#c7b29e',
          25: '#c7b29e',
          40: '#c7b29e',
          50: '#c7b29e'
        },
        secondary: {
          100: '#c0bdbf',
          200: '#a09c9e',
          300: '#817c7e',
          400: '#605c5e',
          500: '#373435',
          10: '#605c5e',
          25: '#605c5e',
          40: '#605c5e',
          50: '#605c5e'
        },
        neutral: {
          100: '#fffefc',
          200: '#fceac8',
          300: '#f2d59a',
          400: '#e3bd73',
          500: '#cda251',
          600: '#a78340',
          700: '#76603b',
          800: '#4a402f',
          900: '#25221d',
          1000: '#070707',
          10: '#070707'
        },
        tertiary: {
          100: '#ea8099',
          200: '#e04167',
          300: '#b81e43',
          400: '#79142c',
          500: '#470c1a',
          10: '#79142c',
          50: '#79142c'
        },
        error: {
          100: '#fb3748',
          200: '#d00416',
          10: '#fb3748'
        },
        alert: {
          100: '#ffdb43',
          200: '#dfb400',
          10: '#ffdb43'
        },
        success: {
          100: '#84ebb4',
          200: '#1fc16b',
          10: '#1fc16b'
        },
        info: {
          100: '#07a0fa',
          10: '#07a0fa'
        }
      }
    },
  },
  plugins: [],
}