/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'epilogue': ['Epilogue', 'sans-serif'],
      
      },
    },
  },
  plugins: [],
}

