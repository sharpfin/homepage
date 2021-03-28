module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sharpfin: {
          blue: '#0094DD',
          gray: '#222731',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
