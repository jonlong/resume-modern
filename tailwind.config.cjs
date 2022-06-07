const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors')

console.log(defaultTheme.colors.sky)

module.exports = {
  content: ["./src/**/*.{astro,html,js}"],
  theme: {
    extend: {
      maxWidth: {
        letter: "66.40625rem",
      },
      fontFamily: {
        sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
      },
      tracking: {
        tight: "-0.035em",
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              '&:hover': {
                '& *': {
                  color: colors.sky['600'],
                },
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
