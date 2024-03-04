/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        grey: '#f3f3f3'
      },
      fontFamily: {
        Lato: ['Lato', 'system-ui'],
        Arvo: ['Arvo', 'system-ui']
      }
    }
  },
  plugins: []
}
