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
          light: '#E0F353',
          DEFAULT: '#D8F024',
        },
        secondary: {
          light: '#1098F7',
          DEFAULT: '#39A9F9',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.ui-light.DEFAULT'),
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
