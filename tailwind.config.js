/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#54b192',
        'custom-green-light': '#a4cec0',
        'custom-gray': '#3f3d56',
      },
      fontFamily: {
        'mulish': ['Mulish', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 