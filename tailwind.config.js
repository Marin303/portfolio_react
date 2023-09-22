/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },transitionProperty: {
        'width': 'width',
      },
      transitionDuration: {
        '2000': '2s'
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.4xl") },
        h2: { fontSize: theme("fontSize.2xl") },
        h3: { fontSize: theme("fontSize.lg") },
      });
    }),
  ],
};
