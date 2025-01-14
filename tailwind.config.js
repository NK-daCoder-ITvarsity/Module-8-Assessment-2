/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'neumorphism-dark-inset': 'inset 1px 1px 4px #141414, inset -1px -1px 4px #cccccc;',
        'neumorphism-dark': '2px 2px 5px #141414, -2px -2px 5px #cccccc;',
      },
    },
  },
  plugins: [],
}