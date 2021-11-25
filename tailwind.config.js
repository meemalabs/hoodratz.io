const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "kumbh-bold": ["Kumbh Sans", "sans-serif"],
        sora: ["Sora", "sans-serif"],
        "sora-semibold": ["Sora Semibold", "sans-serif"],
      },
      borderRadius: {
        "4xl": "1.875rem",
      },
      letterSpacing: {
        widest: ".5rem",
      },
      width: {
        108: "27rem",
      },
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      hoodratz: {
        "grey-1": "#F5F4F6",
        "grey-2": "#DED8DC",
        "grey-3": "#D6D3D9",
        "grey-4": "#A7A1AB",
        "grey-5": "#675C70",
        "grey-6": "#463851",
        "grey-7": "#32233F",
        "grey-8": "#20142B",
        "pink-1": "#FAF3F5",
        "pink-2": "#F7CFDB",
        "pink-3": "#F05B88",
        nude: "#F1B1A3",
      },
    }),
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: Object.assign(colors.trueGray, {
        1: "#F5F4F6",
        2: "#DED8DC",
        3: "#D6D3D9",
        4: "#A7A1AB",
        5: "#675C70",
        6: "#463851",
        7: "#32233F",
        8: "#20142B",
      }),
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      pink: Object.assign(colors.pink, {
        1: "#FAF3F5",
        2: "#F7CFDB",
        3: "#F05B88",
        nude: "#F1B1A3",
        gradient:
          "radial-gradient(82.01% 81.61% at 94.63% 16.78%, #ED9DB9 0%, #EC83A2 57.37%, #F05281 100%)",
      }),
    },
    backgroundImage: {
      hero: "url('/images/home/hero.png')",
      "hero-sm": "url('/images/home/hero-sm.png')",
      "hoodratz-card-bg": "url('/images/home/hoodratz-card-bg.png')",
      "hoodratz-pink-bg": "url('/images/home/hoodratz-pink-bg.png')",
      "hoodratz-bldg": "url('/images/home/hoodratz-bldg.png')",
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      h1: ["68px", "90px"],
      h2: ["48px", "60px"],
      h3: ["28px", "36px"],
      h4: ["16px", "22px"],
      title: ["22px", "28px"],
      body: ["20px", "30px"],
      "body-2": ["16px", "30px"],
      button: ["18px", "26px"],
      caption: ["14px", "22px"],
      "caption-3": ["12px", "22px"],
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      "hoodratz-btn": "6px 30px 60px 5px #592736",
      none: "none",
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
