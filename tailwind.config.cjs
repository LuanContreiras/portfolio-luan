/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5'
        }
      },
      borderRadius:{
        'pf': '47% 53% 35% 65% / 44% 59% 41% 56%;',
      }
    },
    fontFamily:{
      roboto: "Roboto"
    },
  },
  plugins: [],
}
