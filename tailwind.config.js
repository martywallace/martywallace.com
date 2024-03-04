/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.400'),
            a: {
              color: theme('colors.amber.500'),
              textDecoration: 'underline',
              fontWeight: 'inherit',
              '&:hover': {
                color: theme('colors.white'),
              },
            },
            pre: {
              backgroundColor: theme('colors.gray.900'),
            },
            blockquote: {
              color: theme('colors.gray.500'),
              borderLeftColor: theme('colors.gray.700'),
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
