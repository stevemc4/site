/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './resume/*.html'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        ink: '#2d2d2d',
        'ink-dark': '#ebebeb',
        muted: '#636363',
        'muted-dark': '#c4c4c4',
        paper: '#ffffff'
      },
      fontFamily: {
        sans: [
          'Plus Jakarta Sans',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Open Sans',
          'Helvetica Neue',
          'sans-serif'
        ]
      }
    }
  },
  plugins: []
}
