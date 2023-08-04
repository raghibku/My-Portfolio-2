/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scrolll: {
          "0%": {
              transform: "none"
          },
          "100%":{
            transform: "translateY(-75%)"
          }
        },
      },
      animation: {
        'scrolling': 'scrolll 20s ease-in-out infinite',
      },
    },
    fontFamily:{
      signature: ['Great Vibes'],
    }
  },
  plugins: [],
}

