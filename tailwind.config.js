/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        'primary-dark': '#1B1A1B',
        secondary: {
          100: '#E2E2D5',
          200: '#888883'
        }
      }
    }
  },
  plugins: []
}
