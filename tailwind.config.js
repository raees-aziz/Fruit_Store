/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#de2c4d", // Removed the duplicate
        secondary: "#dfb923", // Added 'secondary' for the other color
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Fixed 'Poppons' to 'Poppins'
        averia: ["Averia Serif Libre", "serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
