/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'spin-once': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        'spin-once': 'spin-once 0.8s ease-in-out'
      },
      colors: {
        'navy': {
          900: '#1a1f3d',
        },
        'gold': {
          500: '#d4af37',
          600: '#b4941f',
        },
      },
      fontFamily: {
        'archivo': ['archivo', 'sans-serif'],
        'marcellus': ['marcellus', 'sans-serif'],
      },
    },
  },
  plugins: [],
}