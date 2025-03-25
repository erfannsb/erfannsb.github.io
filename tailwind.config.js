module.exports = {
    theme: {
      extend: {},
    },
    plugins: [
      function ({ addUtilities }) {
        addUtilities({
          '.text-stroke': {
            'font-weight': 'bold',
            'color': 'black', /* Text color */
            'text-shadow': 
              '-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white', /* Stroke effect */
          },
        })
      },
    ],
  }
  