/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // <-- Add this line
    './src/**/*.{js,jsx,ts,tsx}',

    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite/**/*.js',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',

    './public/**/*.html',
    './pages/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#000000',
      dark: '#1D2144',
      primary: '#4A6CF7',
      yellow: '#FBB040',
      blue3: '#2F285B',
      // blue3: '#0A2640',
      'body-color': '#959CB1'
    },
    screens: {
      xs: '450px',
      // => @media (min-width: 450px) { ... }

      sm: '575px',
      // => @media (min-width: 576px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '992px',
      // => @media (min-width: 992px) { ... }

      xl: '1200px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1400px'
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      display: ["group-hover"],

      boxShadow: {
        signUp: '0px 5px 10px rgba(4, 10, 34, 0.2)',
        one: '0px 2px 3px rgba(7, 7, 77, 0.05)',
        sticky: 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)'
      }
    }
  },
  plugins: [
    require('flowbite/plugin', 'tailwind-scrollbar')({ nocompatible: true })
  ]
}
