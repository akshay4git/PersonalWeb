
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,html}"],
  theme: {
    extend: {
      colors: {
        'customBlue': '#4392F1',
        'magnolia': '#ECE8EF', 
        'lavender': '#E3EBFF',
      }
    },
  },
  plugins: [],
}
