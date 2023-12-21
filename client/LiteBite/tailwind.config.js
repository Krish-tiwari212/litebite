/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:"#F3D9A44D",
        secondary:"#498463",
      },
      fontFamily: {
        decol:"Kaisei Decol, serif",
        jacques: "Jacques Francois, serif",
      },
    },
  },
  
  plugins: [],
}


