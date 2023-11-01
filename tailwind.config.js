module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sharpfin: {
          blue: '#0095DA',
          gray: '#222731',
        },
        fondo: '#050C1F'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
