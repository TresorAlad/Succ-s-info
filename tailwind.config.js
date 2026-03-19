/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        secondary: {
          light: '#F3F4F6',
          dark: '#1F2937',
        },
        accent: {
          orange: '#F97316',
          green: '#10B981',
        },
      },
      fontFamily: {
        sans: ['"Open Sans"', 'Roboto', 'sans-serif'],
        display: ['Poppins', 'Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
