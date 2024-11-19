/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        mirage: {
          50: "#f6f6f9",
          100: "#edecf2",
          200: "#d6d5e2",
          300: "#b3afca",
          400: "#8884ac",
          500: "#6a6592",
          600: "#565079",
          700: "#474262",
          800: "#3d3953",
          900: "#363347",
          950: "#1b1923",
        },
      },
    },
  },
  plugins: [],
};
