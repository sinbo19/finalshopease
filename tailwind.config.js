
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#6D28D9",
          light: "#8B5CF6",
          dark: "#4C1D95",
        },
        accent: "#F59E0B",
        surface: "#F8FAFC",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      spacing: {
        section: "5rem",
      },
    },
  },

  plugins: [],
};


