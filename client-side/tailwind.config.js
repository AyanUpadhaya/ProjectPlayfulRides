/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cs-primary': '#F379A7',
        'cs-secondary':'#F379A7',
        'cs-light':'#F5F5F5',
      },
    },
  },
  plugins: [require("daisyui")],

}

