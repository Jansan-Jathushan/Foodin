module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A82C4B',
        'secondary-dark': '#3f0c17',
        'text-gray': '#999',
      },
      fontFamily: {
        primary: ['Roboto', 'sans-serif'],
        secondary: ['Quicksand', 'sans-serif']
      }
    },
  },
  plugins: [],
}