const { fontFamily } = require('tailwindcss/defaultTheme');
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    enabled: true,
    content: ['./pages/**/*.js', './components/**/*.js'],
    options: {
      safelist: ['prose']
    }
  },
  darkMode: 'class', // or 'media' or 'class',

  theme: {
    extend: {
      colors: {
        ...defaultTheme.colors,
        ...colors,
        orange: '#FAAE14',
        neon: '#1DCBDB'
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      }
    },
    variants: {
      extend: {}
    },
    // eslint-disable-next-line global-require
    plugins: [require('@tailwindcss/typography')]
  }
};
