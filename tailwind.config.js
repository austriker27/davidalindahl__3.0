module.exports = {
  purge: [],
  theme: {
      borderWidth: {
        default: '0.5px'
      },
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
    },
  },
  variants: {},
  plugins: [
      require('@tailwindcss/ui')({
          layout: 'sidebar',
      }),
  ],
}
