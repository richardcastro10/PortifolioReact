/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A2540',
        azure: '#0E63E6',
        'azure-deep': '#0A4FBF',
        sky: '#EAF2FF',
        mist: '#F6F9FE',
        slate: '#4A5A6E',
        glint: '#F4B740',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        soft: '0 18px 50px -22px rgba(10, 37, 64, 0.35)',
        lift: '0 28px 60px -24px rgba(14, 99, 230, 0.45)',
      },
      borderRadius: { '4xl': '2rem' },
    },
  },
  plugins: [],
}
