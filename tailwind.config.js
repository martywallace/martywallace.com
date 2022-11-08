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
        'ui-light': {
          DEFAULT: '#CED1DE',
        },
        'ui-dark': {
          lighter: '#3A4955',
          light: '#222C34',
          DEFAULT: '#131E27',
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
            color: theme('colors.gray.400'),
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
