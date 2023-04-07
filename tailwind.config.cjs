/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Playfair Display", ...defaultTheme.fontFamily.serif],
        sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        verticalFade: {
          "0%, 100%": { transform: "translate(0, 0)", opacity: 1 },
          "49%": { transform: "translate(0, 100%)", opacity: 0 },
          "50%": { transform: "translate(0, -100%)", opacity: 0 },
        },
      },
      animation: {
        verticalFade: "verticalFade 1.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
