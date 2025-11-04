/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
      },
      colors: {
        primary: '#6366f1', // Indigo tone for highlights
        secondary: '#14b8a6', // Teal accent
      },
      animation: {
        textShimmer: "textShimmer 3s ease-in-out infinite",
      },
      keyframes: {
        textShimmer: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
