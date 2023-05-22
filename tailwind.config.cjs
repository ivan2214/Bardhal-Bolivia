/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        bar: '#FFF400',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
}
