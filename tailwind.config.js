/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        'green': '#1B5B31',
        'beige': '#DCC1AB',
        'grey': '#F5F0EC',
        'white': '#FFFFFF',
        'black': '#111111',
      },
      maxWidth: {
        'small':'1040px',
        'medium': '1262px',
        'large':'1440px'
      },
      width: {
        '45':'45%',

      },
      borderWidth: {
        '1': '1px',
      },
      fontSize: {
        '28': '28px',
      },
      padding: {
        '30': '120px',
      },
      backgroundImage: {
        'slide-1': "url('/dist/img/slide1.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}

