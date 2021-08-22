module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     backgroundColor: theme => ({
       ...theme('colors'),
       'notification': '#FE7A55'
     })
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }