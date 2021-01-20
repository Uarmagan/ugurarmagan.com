const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  fontFamily: {
    sans: ['Inter', ...fontFamily.sans]
  },
  typography: (theme) => ({
    DEFAULT: {
      css: {
        color: theme('colors.gray.700'),
        a: {
          color: theme('colors.blue.500'),
          '&:hover': {
            color: theme('colors.blue.700')
          },
          code: { color: theme('colors.blue.400') }
        },
        'h2,h3,h4': {
          'scroll-margin-top': spacing[32]
        },
        code: { color: theme('colors.pink.500') },
        'blockquote p:first-of-type::before': false,
        'blockquote p:last-of-type::after': false
      }
    }
  }),
  theme: {
    extend: {
      colors: {
        orange: '#f7b733'
      }
    }
  },
  variants: {
    extend: {}
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/typography')]
};
