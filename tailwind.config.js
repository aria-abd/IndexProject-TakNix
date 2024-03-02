/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}",
            "./node_modules/tw-elements/dist/js/**/*.js"
          ],
  theme: {
    extend: {
      screens: {
        'mobile': '300px',
        // => @media (min-width: 300px) { ... }

        'tablet': '640px',
        // => @media (min-width: 640px) { ... }

        'desktop': '1200px',
        // => @media (min-width: 1200px) { ... }
      },
      fontFamily:{
        'yb_r':['YekanBakh-Regular'],
        'yb_m':['YekanBakhMedium-latinNum'],
        'yb_b':['YekanBakhBold-latinNum'],
        'yb_f':['YekanBakh-Fat']
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}

