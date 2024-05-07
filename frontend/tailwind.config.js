const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      'primari': '#3161A3',
      'sekunder': '#EBFFFB',
      'danger': '#B80F0A',
      'block': '#D9DDDC'
    },

    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },

      backgroundImage: {
        'landing-background': "url('/src/assets/bg-landing_page.svg')",
        'footer-background': "url('/src/assets/bg-footer.svg')",
        'kontak-background': "url('/src/assets/bg_kontak.svg')",
        'landing-profil': "url('/src/assets/bg_profil.svg')"
      }
    },
  },
  plugins: [
    
  ]
}

