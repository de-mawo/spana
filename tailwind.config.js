/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  theme: {
    extend: {
      colors: {
        'deep-sapphire': {
          '50': '#edf7ff',
          '100': '#d7ecff',
          '200': '#b8dfff',
          '300': '#88cdff',
          '400': '#4fb1ff',
          '500': '#278eff',
          '600': '#106dff',
          '700': '#0956ec',
          '800': '#0e46bf',
          '900': '#0f337a',
      },
      'yellow-orange': {
        '50': '#fff8eb',
        '100': '#ffebc6',
        '200': '#ffd488',
        '300': '#ffb545',
        '400': '#ff9d20',
        '500': '#f97707',
        '600': '#dd5302',
        '700': '#b73606',
        '800': '#94290c',
        '900': '#7a230d',
    },
    'turquoise': {
      '50': '#ebfef5',
      '100': '#cefde5',
      '200': '#a1f9d1',
      '300': '#65f0ba',
      '400': '#30e0a1',
      '500': '#03c686',
      '600': '#00a16e',
      '700': '#00815c',
      '800': '#00664a',
      '900': '#01533f',
  },
  'radical-red': {
    '50': '#fff0f3',
    '100': '#ffe3e7',
    '200': '#ffcbd6',
    '300': '#ffa1b4',
    '400': '#ff6c8b',
    '500': '#fa2256',
    '600': '#e81653',
    '700': '#c40c46',
    '800': '#a40d41',
    '900': '#8c0f3e',
},

      
      }
    },
  },
  darkMode: "class",
  plugins: [],
}
