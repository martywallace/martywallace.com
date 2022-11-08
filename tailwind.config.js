/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        type: {
          lightest: '#CFD8DD',
          lighter: '#B7C4CC',
          light: '#9FB1BB',
          DEFAULT: '#889DAA',
          dark: '#667F8F',
          darker: '#4C5F6B',
          darkest: '#334048',
        },
        ui: {
          lightest: '#334048',
          lighter: '#2A353C',
          light: '#222A30',
          DEFAULT: '#13181B',
          dark: '#121518',
          darker: '#090B0D',
          darkest: '#13181B',
        },
        primary: {
          lighter: '#E4F466',
          light: '#E0F353',
          DEFAULT: '#D8F024',
          dark: '#CCE50F',
          darker: '#BAD20F',
        },
        secondary: {
          light: '#7B82CC',
          DEFAULT: '#6C74C6',
          dark: '#5D66C0',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.type.DEFAULT'),
            a: {
              color: theme('colors.primary.DEFAULT'),
              textDecoration: 'underline',
              fontWeight: 'inherit',
              '&:hover': {
                color: theme('colors.white'),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      margin: ['last'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};
