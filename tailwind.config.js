const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        "kumbh-bold": ["Kumbh Sans", "sans-serif"],
        "sora": ["Sora", "sans-serif"],
        "sora-semibold": ["Sora Semibold", "sans-serif"],
      },
      borderRadius: {
        '4xl': '1.875rem',
      }
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      hoodratz: {
        "grey-1": '#F5F4F6',
        "grey-2": "#DED8DC",
        "grey-3": '#D6D3D9',
        "grey-4": '#A7A1AB',
        "grey-5": '#675C70',
        "grey-6": '#463851',
        "grey-7": '#32233F',
        "grey-8": "#20142B",
        "pink-1": "#FAF3F5",
        "pink-2": "#F7CFDB",
        "pink-3": "#F05B88",
        "nude": "#F1B1A3"
      },
    }),
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: Object.assign(colors.trueGray, {
        300: '#D6D3D9',
        400: '#A7A1AB',
        500: '#675C70',
      }),
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      purple: Object.assign(colors.purple, {
        700: '#32233F',
        800: '#463851',
        900: '#20142B',
      }),
      pink: colors.pink,
      hoodratz: {
        "grey-1": '#F5F4F6',
        "grey-2": "#DED8DC",
        "grey-3": '#D6D3D9',
        "grey-4": '#A7A1AB',
        "grey-5": '#675C70',
        "grey-6": '#463851',
        "grey-7": '#32233F',
        "grey-8": "#20142B",
        "pink-1": "#FAF3F5",
        "pink-2": "#F7CFDB",
        "pink-3": "#F05B88",
        "nude": "#F1B1A3"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
