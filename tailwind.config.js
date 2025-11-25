/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{css}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bapi-blue': '#0066cc',
        'bapi-blue-dark': '#004999',
        'bapi-yellow': '#ffc843',
      },
    },
  },
  plugins: [],
};
