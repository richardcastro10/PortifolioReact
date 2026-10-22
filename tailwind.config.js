/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F3F1EC',
        'paper-2': '#EAE7E0',
        ink: '#171717',
        muted: '#6E6B64',
        line: '#D6D2C8',
        forest: '#2E5E45',
        'forest-deep': '#234A36',
        rust: '#B5552C',
      },
      fontFamily: {
        display: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        card: '0 30px 60px -40px rgba(23, 23, 23, 0.45)',
      },
    },
  },
  plugins: [],
}
