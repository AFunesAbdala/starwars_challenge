/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'red': {
        '500': '#FF0000',
        '700': '#8A0000',
        '900': '#0E0000'
      },
      'sky': {
        '300': '#8BE3FF',
        '500': '#00C2FF',
        '600': '#0085FF'
      }
    },
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s',
        fadeOut: 'fadeOut 0.5s'
      },
      boxShadow: {
        redOne: '0 0 5px #8A0000',
        redTwo: '0 0 20px #8A0000',
      }
    },
  },
  plugins: [],
};
