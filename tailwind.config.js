/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
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
      
      }
    },
  },
  darkMode: "class",
  plugins: [],
}
