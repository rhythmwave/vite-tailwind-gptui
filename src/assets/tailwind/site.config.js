/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.vue',
    './src/components/**/*.vue'
  ],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans'],
      },
    },
  },
}
