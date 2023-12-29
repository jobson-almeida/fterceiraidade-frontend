/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'lgg': '1200px'
      },
      colors: {
        palette: {
          '50': '#ffffff',
          '100': '#dbdbdb',
          '200': '#c8c8c8',
          '300': '#b6b6b6',
          '400': '#a4a4a4',
          '500': '#929292',
          '600': '#808080',
          '700': '#6d6d6d',
          '800': '#5b5b5b',
          '900': '#494949',
          '950': '#373737',
          '960': '#242424',
          '970': '#121212',
          '980': '#000000'
        }
      },
      backgroundImage: ({ theme }) => ({
        'bk-image-test': theme('colors.palette.500')
      }),
      keyframes: ({ theme }) => ({
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      }),
      transitionTimingFunction: {
        'open': 'cubic-bezier(0.0, 0, 0.2, 1)',
        'close': 'cubic-bezier(0.4, 0, 0.6, 1)',
        'modal': 'cubic-bezier(0.4, 0, 0.2, 1)'
      },
      transitionDuration: {
        'open': '225ms',
        'close': '195ms',
        'modal': '225ms'
      },
      gridTemplateColumns: {
        'test1': 'repeat(1, minmax(0, 440px))',
        'test2': 'repeat(2, minmax(0, 440px))',
        'test3': 'repeat(3, minmax(0, 440px))'
      },
    },
  },
  plugins: [],
}
