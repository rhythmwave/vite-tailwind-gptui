/** @type {import('tailwindcss').Config} */
module.exports = function (options) {
  return {
    darkMode: 'class',
    content: [
      './public/components/**/*.html',
    ],
    presets: [require('./extend.preset.js')],
    ...options,
  }
}
