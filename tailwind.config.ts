import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Mapped directly from cvveinandwound.com color palette
        brand: {
          50:  '#FFF8E0',  // color_26 — very light cream
          100: '#EBE0D5',  // color_12 — warm beige (light section backgrounds)
          200: '#D5C4BC',  // between color_12–13
          300: '#AF968C',  // color_13 — warm taupe
          400: '#7E6B63',  // color_14 — medium warm brown
          500: '#413A38',  // color_15 — dark warm text
          600: '#0088CB',  // color_5  — blue (links, CTAs, highlights)
          700: '#461E09',  // color_6  — dark brown (navbar, footer, dark sections)
          800: '#2E1408',  // color_20-ish — deeper brown
          900: '#1A0B04',  // darkest brown
        },
        gold: {
          400: '#FFE14D',
          500: '#FFCC00',  // color_9  — brand yellow
          600: '#FFCB05',  // color_3  — brand yellow variant
        },
      },
    },
  },
  plugins: [],
}

export default config
