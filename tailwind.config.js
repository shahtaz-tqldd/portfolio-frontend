/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "350px",
      sm: "576px",
      md: "764px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: "20px",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1270px",
        "2xl": "1320px",
        // '3xl': '1538px',
      },
    },
    extend: {
      colors: {
        primary: "#03C988",
        sec: "#f6d860",
        accent: "#2B2A4C",
        neutral: "#fff",
        "base-100": "#1f1f1f",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
