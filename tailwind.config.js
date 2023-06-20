  /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.{html,js,md}',
    './_layouts/**/*.{html,js,md}',
    './_*/*.{html,js,md}',
    './*.{html,js,md}'
  ],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Italiana', 'serif'],
    },
    fontSize: { 
      xs: ['0.75rem', '1.2'],
      sm: ['0.875rem;', '1.2'],
      base: ['1rem', '1.2'],
      lg: ['1.125rem;', '1.2'],
      xl: ['1.25rem', '1.2'],
      '2xl': ['1.5rem', '1.2'],
      '3xl': ['1.875rem', '1'],
      '4xl': ['2.25rem', '1'],
      '5xl': ['3rem', '1'],
      '6xl': ['3.75rem', '1'],
      '7xl': ['4.5rem', '1'],
      '8xl': ['6rem', '1'],
      '9xl': ['8rem', '1'],
    },
    extend: {
      lineHeight: {
        'tight': '.85',
        'snug': '.95',
        '12': '3rem',
      },
      spacing: {
        '5p': '5%',
        '10p': '10%',
        '15p': '15%',
        '1/3': '33.33%',
        '1/2': '50%',
        '2/3': '75%',
        '1/1': '100%',
      },
      aspectRatio: {
        '5/3': '5 / 3',
        'landscape': '3 / 2 ',
        'portrait': '3 / 4',
        'portrait-tall': '3 / 5',  
      },
      minHeight:{
        '100': '100vh',
        '90': '90vh',
        '80': '80vh',
        '70': '70vh',
        '60': '60vh',
        '50': '50vh',
      },
      colors: {
        'dark': '#1E1E1E',
        'light': '#EDECEB',
        'featured': '#d4d1cd',
        'blue': '#0000FF',
        'purple': '#A020F0',
        'teal': '#008080',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
