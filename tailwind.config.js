/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'katurao-green': '#7BA089',
        'katurao-lightgreen': '#A5C393',
        'katurao-creem': '#FFF9EA',
        'katurao-black': '#7C635B',
        'katurao-black2': '#7C635C',
        'katurao-yellow': '#FDEFC9',
        'katurao-red': '#C39493',
        'katurao-brown': '#C4AD93',
        'katurao-gray': '#777777',
      },
      fontFamily: {
        title: ['"Helvetica"'],
        body: ['"YuGothic"']
      }

    },
  },
  plugins: [],
}
