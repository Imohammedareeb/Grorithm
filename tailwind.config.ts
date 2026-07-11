import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F5F5F0',
        lime: '#C6F23D',
        ink: '#262626',
      },
      fontFamily: {
        display: ['"Archivo Black"', 'sans-serif'],
        body: ['Manrope', '"General Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '14px',
      },
      transitionTimingFunction: {
        brand: 'cubic-bezier(.22,1,.36,1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
