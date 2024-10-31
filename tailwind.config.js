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
      'grey': '#d4d4d4',
      'darkGrey': '#a1a1a1'
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
    backgroundImage: {
      'main': "url('/App/img/fonsMainMenu.png')",
      'smallmain': "url('/App/img/fonsMainMenuSmall.png)",
    },
  },
  plugins: [],
};
