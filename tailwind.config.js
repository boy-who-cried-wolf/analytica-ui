/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B3C53',
        secondary: '#456882',
        accent: '#D2C1B6',
        background: '#F9F3EF',
      },
    },
  },
  plugins: [],
}

