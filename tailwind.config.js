/** @type {import('tailwindcss').Config} */
export default{
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero':"url('/src/assets/mainPage.png')"
      }
    },
    colors: {
      'dark-gray':"#404040",
      'navbar': "#485454",
      'lighter-gray':"C0C0C0",
      'normal': "#DCE3E3",
      'secondary': '#3EFC02',
      'dark-green':'#00994c',
      'light-green':'#66ffb2'
    }
  },
  plugins: [require('daisyui')],
}

