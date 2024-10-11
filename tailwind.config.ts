import type { Config } from 'tailwindcss';
import aspectRatio from '@tailwindcss/aspect-ratio';
import typoGraphy from '@tailwindcss/typography';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        '2xl': '128px',
      },
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      keyframes: {
        'lds-ellipsis1': {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        'lds-ellipsis2': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(24px, 0)' },
        },
        'lds-ellipsis3': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
      },
      animation: {
        'lds-ellipsis1': 'lds-ellipsis1 0.6s infinite cubic-bezier(0, 1, 1, 0)',
        'lds-ellipsis2': 'lds-ellipsis2 0.6s infinite cubic-bezier(0, 1, 1, 0)',
        'lds-ellipsis3': 'lds-ellipsis3 0.6s infinite cubic-bezier(0, 1, 1, 0)',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    typoGraphy,
    aspectRatio,
  ],
};
export default config;
