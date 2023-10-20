/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    
    screens: {
      'sm': '340px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily:{
       raleway:'Raleway, sans-serif',
       catamaran: 'Catamaran, sans-serif',
       montserrat: 'Montserrat',
       Manrope : 'Manrope, sans-serif'
    },
    colors: {
      'greyblue':'#515966',
      'darkblue':'#101323',
      'black':'#000000',
      'blue': '#2157A7',
      'gray':'#808080',
      'lightgray':'#B0B0B0',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'bodygray' : 'rgb(128, 128, 128)',
      "offwhite" : "#F8F8F8",
      "reddishgray" : "#FCFCFD"
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height : {
        'laptopimg' : '60vh',
        'mobileimg' : '40vh'
      },
      width : {
        'lapimg' : '80vh',
      },
      screens: {
        'rag': '840px',
        ...defaultTheme.screens,
      },
      boxShadow: {
        '3xl':"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
        },
    },
  },
  plugins: [],
}

      