module.exports = {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
        './resources/views/**/*.html',
        './resources/js/**/*.js',
    ],
    theme: {
        // backgroundImage: {
        //     'gradient-to-t': 'linear-gradient(to top, var(--gradient-color-stops))',
        //     'gradient-to-tr': 'linear-gradient(to top right, var(--gradient-color-stops))',
        //     'gradient-to-r': 'linear-gradient(to right, var(--gradient-color-stops))',
        //     'gradient-to-br': 'linear-gradient(to bottom right, var(--gradient-color-stops))',
        //     'gradient-to-b': 'linear-gradient(to bottom, var(--gradient-color-stops))',
        //     'gradient-to-bl': 'linear-gradient(to bottom left, var(--gradient-color-stops))',
        //     'gradient-to-l': 'linear-gradient(to left, var(--gradient-color-stops))',
        //     'gradient-to-tl': 'linear-gradient(to top left, var(--gradient-color-stops))',
        //     'img-none': 'none',
        // },
        gradientColorStops: (theme) => theme('colors'),
            boxShadow: {
                xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
                'bright': '5px 5px 0 #FF269E, 10px 10px #A832B7',
                // 'hotpink': "3px 3px 0 theme('colors.primary')",
                // 'md': "3px 3px 0 theme('colors.blue-darkest', 'currentColor')",
                sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
                inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
                focus: '0 0 0 3px rgba(66, 153, 225, 0.5)',
                none: 'none',
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
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    //   require('@tailwindcss/ui')({
    //       layout: 'sidebar',
    //   }),
    //   require('@tailwindcss/typography'), removing because Ill use the classify statamic plugin and customize text
  ],
}
