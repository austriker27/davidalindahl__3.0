module.exports = {
  purge: [],
  theme: {
    extend: {
          fontSize: {
              '7xl': '5rem',
              '8xl': '6rem',
              '9xl': '7rem',
              '10xl': '8rem',
          },
          spacing: {
              '72': '18rem',
              '84': '21rem',
              '96': '24rem',
              '128': '32rem',
          },
          colors: {
              'primary': '#FF269E', // hot pink
              'secondary': '#A832D7', // purple
              'success': '#F1F5F9', // off white thing
              'background': '#181527', // deep blue
              'surface': '#35314e', // lighter deep blue
              'muted': '#9483aa', // muted for text copy/links
          }
    },
  },
  variants: {
      textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [
      require('@tailwindcss/ui')({
          layout: 'sidebar',
      }),
  ],
}
