/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white": "#FFFFFF",
        "salat-10": "#BFD087",
        "salat-30": "#7DA00C",
        "salat-50": "#688800",

        "italian-10": "#8BDFB4",
        "italian-50": "#009246",
        "meet-10": "#E8847E",
        "meet-50": "#D73A31",
        "orange-10": "#F4B979",
        "orange-50": "#E67F10",
        "text-color": "#4A4A4A",
      },
      borderRadius: {
        'none': '0',
        'full': '50%',
        'large': '12px',
      },
      fontFamily: {

        amaticSC: ["Amatic SC", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      content: {
        evolvetext: "url('.assets/react.svg')",
      }
    },
    screens:  {
      xs: '320px',
      sm: '768px',
      md: '1366px',
    }
  },
  plugins: [],
}

