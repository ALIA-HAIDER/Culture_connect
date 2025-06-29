import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4f0ff',
          100: '#e9ddff',
          200: '#d3bcff',
          300: '#bd9aff',
          400: '#a679ff',
          500: '#9747FF',
          600: '#8533f2',
          700: '#7320e6',
          800: '#610dd9',
          900: '#4f00cc',
        },
        magenta: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#9C1466',
          600: '#8b0f5a',
          700: '#7a0b4e',
          800: '#690742',
          900: '#580336',
        },
        deepBlack: {
          50: '#f5f5f5',
          100: '#e5e5e5',
          200: '#d4d4d4',
          300: '#a3a3a3',
          400: '#737373',
          500: '#0F0F0F',
          600: '#0e0e0e',
          700: '#0c0c0c',
          800: '#0a0a0a',
          900: '#080808',
        },
        softWhite: '#F1F1F1',
        mutedGray: {
          300: '#A3A3A3',
          400: '#6B7280',
        },
        accentBlue: '#00C6FF',
        neonGreen: '#CEF23F',
      },
      backgroundColor: {
        'app-bg': '#0F0F0F',
      }
    },
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      light: {
        colors: {
          background: '#0F0F0F',
          foreground: '#F1F1F1',
        }
      },
      dark: {
        colors: {
          background: '#0F0F0F',
          foreground: '#F1F1F1',
        }
      }
    }
  })],
}
