module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'home-background': "url('./assets/homeBackground.jpg')"
      }),
      colors: {
          greenColor: '#457E76',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
