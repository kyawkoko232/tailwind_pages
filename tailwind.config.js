// /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.{js,ts,jsx,tsx,html}"
  ],
  darkMode: 'class',
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        xxl: '1320px'
      },
    },
    extend: {
      spacing: {
        'mobile': '1rem',
      },
      fontFamily:{
        'roboto':['Roboto','Padauk'],
        'poppins': ['Poppins','Padauk']
        },
        fontSize: {
        },
        colors: {
          'primary': '#0d6efd',
          'secondary': '#6c757d',
          'success': '#198754',
          'danger': '#dc3545',
          'warning': '#ffc107',
          'info': '#0dcaf0',
          'light': '#f8f9fa',
          'dark': '#343a40',
          'bluesoft': 'var( --picton-blue)',
          dark: {
            primary: '#1A202C',
            secondary: '#2D3748',
            tertiary: '#4A5568',
          }
        }
    },
    screens:{
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      'xxl': '1400px'
    },
   
  },
  plugins: [],
}