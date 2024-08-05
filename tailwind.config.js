/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: '1rem'
    },
    extend: {
      colors: {
        light: "#FFFFFF",
        dark: "#000000",
        primaryRed: "#DB4444",
        primaryGray: "#c1c0c1",
        secondaryRed: "#E07575",
        secondaryGray: "#7D8184",
        secondaryLight: "#F5F5F5",
        buttonLime: "#00FF66",
      },
      fontSize: {
        '14': '14px'
      },
      spacing: {
        '54': '217px',
        '34': '140px'
      },
      screens: {
        'xs': "560px"
      },
      height: {
        '18': "70px"
      },
      width: {
        '18': "70px"
      }
    },
  },
  plugins: [],
}

