import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        '3xl': '1920px',
      },
    },
    container: {
      padding: {
        DEFAULT: '16px',
        md: '40px',
        '2xl': '80px',
        '3xl': '160px',
      },
    },
  },
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            background: '#392217',
            foreground: '#FFFEF3',
          },
        },
      },
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'grid-cols-fill': (value) => ({
            gridTemplateColumns: `repeat(auto-fill,minmax(${value},1fr))`,
          }),
          'grid-cols-fit': (value) => ({
            gridTemplateColumns: `repeat(auto-fit,minmax(${value},1fr))`,
          }),
        },
        {
          values: theme('width'),
        },
      );
    }),
  ],
};
export default config;
