module.exports = {
  purge: [],
  theme: {
      backgroundImage: {
          'gradient-to-t': 'linear-gradient(to top, var(--gradient-color-stops))',
          'gradient-to-tr': 'linear-gradient(to top right, var(--gradient-color-stops))',
          'gradient-to-r': 'linear-gradient(to right, var(--gradient-color-stops))',
          'gradient-to-br': 'linear-gradient(to bottom right, var(--gradient-color-stops))',
          'gradient-to-b': 'linear-gradient(to bottom, var(--gradient-color-stops))',
          'gradient-to-bl': 'linear-gradient(to bottom left, var(--gradient-color-stops))',
          'gradient-to-l': 'linear-gradient(to left, var(--gradient-color-stops))',
          'gradient-to-tl': 'linear-gradient(to top left, var(--gradient-color-stops))',
      },
      gradientColorStops: (theme) => theme('colors'),
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
      backgroundClip: ['responsive', 'hover', 'focus'],
      backgroundImage: ['responsive'],
      gradientColorStops: ['responsive', 'hover', 'focus'],
  },
  plugins: [
      require('@tailwindcss/ui')({
          layout: 'sidebar',
      }),
  ],
}
