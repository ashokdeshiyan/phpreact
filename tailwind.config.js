/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,css,jsx}'],
  theme: {
    extend: {},
  },
  primary: {
    400: '#a78bfa', // light (input focus borders)
    500: '#323C7A', // normal
    600: '#7c3aed', // dark
  },
  secondary: {
    400: '#9ca3af',
    500: '#ED7181',
    600: '#4b5563',
  },
  plugins: [],
};
