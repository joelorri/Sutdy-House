/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./App/*.html"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'green': '#7BDCB5',
      'darkGreen': '#1ABC9C',
      'whiteBackgroun': '#F9EAE1',
      'whiteContainer': '#fafafa',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],

      rubik: ['Rubik Mono One','sans-serif']
    //      /* Aplicar la fuente Rubik Mono One */
    // .font-rubik {
    //   font-family: 'Rubik Mono One', sans-serif;
    // }
    // /* Estilo para el borde dashed */
    },
  },
  plugins: [],
};
