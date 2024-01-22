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
        "salat-5": "#cada97",
        "salat-5a": "#e4ecc7d2",
        "salat-10": "#BFD087",
        "salat-15": "#728536",
        "salat-30": "#7DA00C",
        "salat-40": "##546B06",
        "salat-50": "#688800",
        "salat-60": "#EDF4D2",
        "salat-60a": "#e4ecc7",
        "salat-100": "#97C20B",
        "salat-200": "#536614",
        "salat-500": "#e2f1a6b2",
        "red-100": "#880019",
        "grey-10": "#949494",

        "italian-10": "#8BDFB4",
        "italian-50": "#009246",
        "meet-10": "#E8847E",
        "meet-50": "#D73A31",
        "meet-100": "#E84239",
        "meet-200": "#99160E",
        "meet-500": "#c45e5950",
        "orange-10": "#F4B979",
        "orange-50": "#E67F10",
        "orange-100": "#FF9D34",
        "orange-200": "#BA6400",
        "orange-500": "#fbae5b71",
        "text-color": "#4A4A4A",
        "green-700": "#8bdfb450",
        "green-800": "#0092470f",
        "italian-100": "#00DB69",
        "italian-200": "#076534",
        "italian-500": "#59e99f5a",
      },
   

      borderRadius: {
        'none': '0',
        'full': '50%',
        'large': '12px',
      },
      fontFamily: {

        amaticSC: ["Amatic SC", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        messiri: [" El Messiri", "sans-serif"]
      },
      fontSize: {
        '1xl': ['22px', {
          lineHeight: '27px',
        }],
        '4xl':  ['32px', {
          lineHeight: '40px',
        }],
        '5xl':  ['40px', {
          lineHeight: '50px',
        }],
        'xxs': ['10px', {
          lineHeight: '11px',
        }],
        'xs': ['12px', {
          lineHeight: '20px',
        }],
        '2xs': ['12px', {
          lineHeight: '14px',
        }],
        's': ['14px', {
          lineHeight: '32px',
        }],
        '2xm': ['16px', {
          lineHeight: '32px',
        }],
        '2m': ['16px', {
          lineHeight: '18px',
        }],
      },
      content: {
        herbs: "url('./assets/herbs.png')",
        olives: "url('./assets/olives.png')",
        bigOlives: "url('./assets/olivesBig.png')",
        bigHerbs: "url('./assets/bigHerbs.png')"
      },
    },
    screens:  {
      xs: '320px',
      sm: '768px',
      md: '1366px',
    }
  },
  plugins: [],
 
}

