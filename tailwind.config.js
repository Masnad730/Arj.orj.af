/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DC4452',
        secondary: '#53B6D8',
        tertiary: '#CDD15A',
        'grey-light-1': '#f7f7f780',
        'grey-light-2': '#c3c3c3',
        accents_0: '#f8f9fa',
        accents_1: '#f1f3f5',
        accents_2: '#e9ecef',
        accents_3: '#dee2e6',
        accents_4: '#ced4da',
        accents_5: '#adb5bd',
        accents_6: '#868e96',
        accents_7: '#495057',
        accents_8: '#343a40',
        accents_9: '#212529',
      },
      backgroundColor: {
        'white-layer': 'rgba(255, 255, 255, 0.7)',
        'black-alpha-0.7': 'rgba(0, 0, 0, 0.79)',
        'black-alpha-0.6': 'rgba(0, 0, 0, 0.69)',
        'tertiary-overlay-color': 'rgba(205,209,90,0.3884427521008403)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        lato: ['Lato', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        monoton: ['Monoton', 'cursive'],
      },
      boxShadow: {
        card: '0 12px 26px rgb(0 0 0 / 6%)',
        box: '0 6px 12px 0 rgba(0, 0, 0, 0.25);',
        navbar: '0px 11px 6px -6px rgb(0 0 0 / 22%)',
      },
    },
  },
  plugins: [],
})
