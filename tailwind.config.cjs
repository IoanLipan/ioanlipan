/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik'],
      },
      colors: {
        primary: '#286266', // Teal Green
        secondary: '#E87461', // Soft Coral
        accent: '#EAD2AC', // Pale Gold
        neutral: '#F5EDE3', // Whisper
        textcolor: '#303030', // Gunmetal Gray
        negative: '#DB0001',
      },
    },
  },
  plugins: [],
};
