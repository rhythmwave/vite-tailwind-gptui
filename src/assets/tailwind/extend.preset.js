/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
      extend: {
        animation: {
          background: 'background ease infinite',
        },
        keyframes: {
          background: {
            from: { backgroundPosition: '0% 50%' },
            to: { backgroundPosition: '100% 50%' },
          },
        },
      },
    },
  }
