const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  fontFamily: {
    sans: ['Inter', ...fontFamily.sans]
  },
  theme: {
    extend: {},
    textColor: {
      orange: {
        DEFAULT: '#f7b733'
      }
    }
  },
  variants: {
    extend: {}
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/typography')]
};
