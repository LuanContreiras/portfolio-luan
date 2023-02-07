/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.jsx'],
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
      borderRadius: {
        pf: '47% 53% 35% 65% / 44% 59% 41% 56%;'
      }
    },
    fontFamily: {
      roboto: 'Roboto'
    },
    backgroundImage: {
      wave1: "url('./wave1.svg')",
      wave2: "url('./wave2.svg')",
      wave3: "url('./wave3.svg')",
      waveBlack1: "url('./wave-black1.svg')",
      waveBlack2: "url('./wave-black2.svg')",
      waveBlack3: "url('./wave-black3.svg')"
    },
    aspectRatio: {
      '900/300': '900 / 300'
    }
  },
  plugins: []
}
