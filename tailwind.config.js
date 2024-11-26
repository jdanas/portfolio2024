/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        monotone: {
          background: '#ffffff', // White background
          text: '#000000', // Black text
        },
      },
    },
  },
  darkMode: 'media',
  plugins: [],
}