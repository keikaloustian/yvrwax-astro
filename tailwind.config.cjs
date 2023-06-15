/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        "bg-mountains": "url('/layered-peaks-haikei.svg')",
      },
      fontFamily: {
        title: ["Playfair Display", ...defaultTheme.fontFamily.serif],
        sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
      },
      // keyframes: {
      //   slowFall: {
      //     "0%": { transform: "translate(0, -100vh)" },
      //     "100%": { transform: "translate(0, 200vh)" },
      //   },
      // },
      // animation: {
      //   slowFall: "slowFall 5s infinite linear",
      // },
    },
  },
  plugins: [],
};
