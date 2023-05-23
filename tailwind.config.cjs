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
      keyframes: {
        move: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(25%)' },
          '50%': { transform: 'translateX(50%)' },
          '75%': { transform: 'translateX(25%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        move: 'move 3s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
}
