/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color :{
        pastelPrimary : "#47e6d7",
        pastelSecondary : "#7ac7de",
        pastelThird : "#788fdc",
        meetGreen: '"#34a853"',
      }
    },
  },
  plugins: [],
}

