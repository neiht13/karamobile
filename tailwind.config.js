/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {

    },
  },
  plugins: [],
}
const konstaConfig = require('konsta/config');

// wrap config with konstaConfig config
module.exports = konstaConfig({
  content: [
    './pages/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media', // or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#9d174d',
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
          blue: {
          100: '#dbeafe',
          200: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          800: '#1e40af',
          },
        red: '#ff0000',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
      },
    },  },

  konsta: {
    colors: {
      // "primary" is the main app color, if not specified will be default to '#007aff'
      primary: '#007aff',
      red: '#ff0000',

    }
  },

  variants: {
    extend: {},
  },
  plugins: [],
});