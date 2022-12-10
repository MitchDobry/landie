/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '425px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    colors: {
      'black': '#000000',
      'blue-primary': '#37447E',
      'blue': {
        100: '#E7ECFF',
        300: '#929ECC',
        500: '#505F98',
        600: '#37447E',
        700: '#222F65',
        800: '#111B47',
      },
      'gray': {
        100: '#B0B8BC',
        200: '#CDD1D4',
        400: '#939EA4',
        600: '#5D6970',
        700: '#454E54',
      },
      'white': '#FFFFFF'
    },
    fontSize: {
      xs: '12px',
      s: '14px',
      m: '16px',
      l: '18px',
      xl: '26px',
      xxl: '50px',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      black: 900,
    },
    lineHeight: {
      xs: '18px',
      s: '24px',
      m: '26px',
      l: '30px',
      xl: '38px',
      xxl: '66px',
    },
    extend: {
      maxHeight: {
        'nav': '66px',
      },
      height: {
        'button': '26px',
      },
      margin: {
        '1': '18px',
        '2': '20px',
        '3': '24px',
        '4': '26px',
        '5': '30px',
        '6': '46px',
        '7': '60px',
        '8': '69px',
        '9': '127px'
      },
      width: {
        'button': '160px',
        '83': '83%',
        '73': '73%',
        '51': '51%',
        '42': '42%',
        '600': '600px'
      },
      spacing: {
        '1': '8px',
        '2': '12px',
        '3': '14px',
        '4': '16px',
        '5': '24px',
        '6': '32px',
        '7': '60px',
        '8': '62px',
        'auto': 'auto'
      },
      padding: {
        '1': '4px',
        '2': '29px',
        '14': '14px',
        '121': '120px',
        '155': '155px',
        '114': '114px',
        'section-feat': '160px',
        'section-feat2': '165px',
      },
    }
  },
  plugins: [
    plugin(function ({
      addBase,
      theme
    }) {
      addBase({
        'h1': {
          fontSize: '50px',
          lineHeight: '66px',
          fontWeight: theme('fontWeight.normal'),
          color: theme('colors.gray[700]'),
          letterSpacing: '1px',
        },
        'h2': {
          fontSize: '36px',
          lineHeight: '48px',
          fontWeight: theme('fontWeight.normal'),
          color: theme('colors.gray[700]'),
          letterSpacing: '1px',
          marginBottom: '16px',
        },
        'h3': {
          fontSize: '16px',
          lineHeight: '26px',
          fontWeight: theme('fontWeight.normal'),
          color: theme('colors.gray[700]'),
          letterSpacing: '1px',
          marginBottom: '6px',
        },
        'h4': {
          fontSize: '50px',
          lineHeight: '66px',
          fontWeight: theme('fontWeight.normal'),
          color: theme('colors.blue[700]'),
          letterSpacing: '1px',
        },
      })
    })
  ]
}