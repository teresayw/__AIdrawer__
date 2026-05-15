/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        'tech-bg': '#05070a',
        'tech-card': '#0d1117',
        'tech-accent': '#00f2ff',
        'tech-secondary': '#d000ff',
        'tech-border': 'rgba(0, 242, 255, 0.2)',
        'tech-text': '#e6edf3',
        'tech-muted': '#8b949e',
      },
    },
  },
  plugins: [],
}