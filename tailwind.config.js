const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],

  theme: {
    fontFamily: {
      sans: ['Inter', ...fontFamily.sans]
    },
    extend: {
      colors: {
        orange: '#FAAE14',
        neon: '#1DCBDB'
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.100'),
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.600')
              },
              code: { color: theme('colors.blue.400') }
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.700'),
              color: theme('colors.gray.300')
            },
            'h2,h3,h4': {
              color: theme('colors.gray.100'),
              'scroll-margin-top': spacing[32]
            },
            hr: { borderColor: theme('colors.gray.700') },
            ol: {
              li: {
                '&:before': { color: theme('colors.gray.500') }
              }
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.gray.500') }
              }
            },
            strong: { color: theme('colors.gray.300') },
            thead: {
              color: theme('colors.gray.100')
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700')
              }
            }
          }
        }
      })
    }
  },
  variants: {
    typography: ['responsive', 'dark']
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/typography')]
};
