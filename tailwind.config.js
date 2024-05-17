/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'heading': ['Acme', 'sans-serif'],
      'body': ['ABeeZee', 'sans-serif'],
    }
  },
  plugins: [],
}