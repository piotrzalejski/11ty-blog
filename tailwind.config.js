/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}', './.elevemty.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"M PLUS Rounded 1c"', 'system-ui', 'sans-serif'],
      },
      colors: {
        'bg-dark': '#0d0f14',
        'text-dark': '#f2f6fa',
      },
    },
  },
  plugins: [],
};
