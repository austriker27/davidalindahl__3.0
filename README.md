## USES
- Statamic V3
- TailwindCSS
- AlpineJS for menu
- Responsive Image Addon for Statamic

## About
Hello 3rd version my personal site! This time built completely from scratch using Statamic V3, with design inspired by V2 (which was a Paulio Scalon Gatsby template)

## TODOs

### general:
- [x] : More epic hover states (underline bottom border on hover?)
- [ ] : add favicon
- [ ] : add social media meta ogg tags/image
- [ ] : fix multiline hover states
- [ ] : add page for "design" work (apparel design and that design.davidalindahl.com page)
- [ ] : improve footer and hover states
- [ ] : add link fieldtype via : https://github.com/jonassiewertsen/Link-fieldtype
- [x] : replace `.bg-img-none` with actual solution (probably use `.link` for link underlines)
- [ ] : fix navbar logo so its aligned right
- [ ] : add code snippet for blog posts ([good reference](https://austencam.com/posts/how-to-add-syntax-highlighting-to-a-statamic-site))

## homepage
- [ ] : add hyperlinks to the header sections on the homepage (ex `#about`)
- [ ] : add something like ` sort="total_results"` to sort the project_tags by frequency
  - possibly use this instead: https://statamic.dev/tags/taxonomy

### components:
- [ ] : add target blank to button component
- [ ] : fix hover transition on project card component

### navbar 
- [x] : double opening bug of navbar
- [ ] : fix overflow and lock scroll and stuff when mobile nav is open

### articles: 
- [x] : add importing old articles disclosure
- [ ] : add lotti animation to 'currently importing articles'
- [ ] : add read time and word count to article
- [ ] : use `truncate` modifier to add brief description to article cards on index
- [ ] : add caption below images
- [ ] : add gif support to single_image component
- [ ] : get image gallery component working
- [ ] : add comments
- [ ] : add tweet this article to footer

### content:
- [ ] : fix hotpink shadow box shadow
- [ ] : add projects
- [ ] : import prior writings

### testimonials
- [ ] : standalone page for testimonials?
- [ ] : add images for testimonials
- [ ] : add more testimonials

### other
- [ ] : figure out why postcss import not letting me put `@import "tailwindcss/utilities";` at end of tailwind file
- [ ] : get multiple tailwind applies in one line working

## theme UI components from: 
https://gatsby-theme-terminal.netlify.app/theme-ui-components/

## general inspiration from: 

- Jack McDade
