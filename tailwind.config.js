/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'typing': 'typing 3s steps(30) 1s forwards',
        'blink': 'blink 0.75s step-end infinite'
      },
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        },
        blink: {
          '0%': { borderColor: 'transparent' },
          '50%': { borderColor: 'transparent' },
          '100%': { borderColor: 'black' }
        }
      }
    }
  },
  plugins: [],
}