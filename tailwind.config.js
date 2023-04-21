/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1360px",
        "2xl": "1496px",
      },
    },
    extend: {
      fontFamily: {
        normal: ["var(--font-noir-normal)"],
        bold: ["var(--font-noir-bold)"],
        light: ["var(--font-noir-light)"],
        medium: ["var(--font-noir-medium)"],
      },
    },
  },
  plugins: [],
};
