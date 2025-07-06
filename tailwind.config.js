/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",            // for Vite
    "./src/**/*.{js,ts,jsx,tsx}", // for React
  ],
  colors: {
    'primary-green': '#00894E',
    'light-green': '#C7F7C1',
    'background-gray': '#F5F5F5',
    'standard-black': '#000000',
    'dark-text': '#404040',
    'pure-white': '#FFFFFF',
  },
  fontFamily: {
    inter: ['Inter', 'sans-serif'],
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

