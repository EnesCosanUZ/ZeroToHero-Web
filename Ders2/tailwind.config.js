/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'potground': "url('./src/pot.png')"
      }
    },
  },
  plugins: [],
}

