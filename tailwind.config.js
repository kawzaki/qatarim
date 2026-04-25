/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A1A1A', // Charcoal
          container: '#2D2D2D',
        },
        tertiary: {
          DEFAULT: '#C5A059', // Bronze
          container: '#3A2800',
          fixed: '#E9C176',
        },
        background: '#FFFFFF',
        surface: {
          DEFAULT: '#FFFFFF',
          low: '#F9F8F7',
          high: '#F2F1EF',
          highest: '#EBEAE8',
          lowest: '#FFFFFF',
        }
      },
      fontFamily: {
        title: ['Almarai', 'sans-serif'],
        body: ['IBM Plex Sans Arabic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
