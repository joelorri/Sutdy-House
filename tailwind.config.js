/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./index.html"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'ButtonColor': '#7BDCB5',
      'hoverColor': '#1ABC9C',
      'bgColor': '#F9EAE1',
      'mentaColor': '#1ABC9C',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],

      //    /* Aplicar la fuente Rubik Mono One */
    // .font-rubik {
    //   font-family: 'Rubik Mono One', sans-serif;
    // }
    // /* Estilo para el borde dashed */
    // .border-dashed-custom {
    //   border-bottom: 4px dashed #1ABC9C; /* Cambiar el color del borde aquí */
    // }
    },
  },
  plugins: [],
};
