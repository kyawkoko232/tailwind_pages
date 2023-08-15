// /** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/dashboard/*.{js,ts,jsx,tsx,html}"],
  darkMode: "class",
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        xxl: "1320px",
      },
    },
    extend: {
      spacing: {
        mobile: "1rem",
      },
      fontFamily: {
        roboto: ["Roboto", "Padauk"],
        poppins: ["Poppins", "Padauk"],
      },
      fontSize: {},
      colors: {
        primary: "#0d6efd",
        secondary: "#6c757d",
        success: "#198754",
        danger: "#dc3545",
        warning: "#ffc107",
        info: "#0dcaf0",
        light: "#f8f9fa",
        dark: "#343a40",
        bluesoft: "var( --picton-blue)",
        black: {
          100: "#d1d2d5",
          200: "#a3a6ab",
          300: "#767980",
          400: "#484d56",
          500: "#1a202c",
          600: "#151a23",
          700: "#10131a",
          800: "#0a0d12",
          900: "#050609",
        },
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
  },
  plugins: [],
};
