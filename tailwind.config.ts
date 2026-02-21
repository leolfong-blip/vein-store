import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f0f7ff',
          100: '#dceef7',
          200: '#a8d4ee',
          300: '#6db3d8',
          400: '#3a8fc0',
          500: '#2c6fa0',
          600: '#1e5280',
          700: '#163d63',
          800: '#0f2a47',
          900: '#071929',
        },
        gold: {
          400: '#f0b429',
          500: '#d4920a',
          600: '#b8780a',
        },
      },
    },
  },
  plugins: [],
}

export default config
