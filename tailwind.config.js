/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif']
      },
      colors: {
        'black': '#000000',
        'white': '#FFFFFF',
        'blue': {
          600: '#2563eb'  // This is the blue color used in headers
        },
        'green': {
          500: '#22C55E'  // This is the green used for buttons
        },
        'red': {
          600: '#DC2626'  // This is the red used for selection headers
        },
        'gray': {
          100: '#F3F4F6',  // Light gray for backgrounds
          300: '#D1D5DB',  // Border colors
          400: '#9CA3AF',  // Disabled button
          600: '#4B5563'   // Disabled text
        }
      },
      spacing: {
        '44': '11rem',    // For image containers (w-44 h-44)
        '32': '8rem',     // For theme selection grid (w-32 h-32)
      },
      fontSize: {
        'xl': '1.25rem',  // 20px
        '2xl': '1.5rem',  // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem'  // 36px - Used in headers
      },
      borderWidth: {
        '2': '2px'        // Border width for images and containers
      },
      lineHeight: {
        'normal': '1.4'   // Line spacing as specified
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
  safelist: [
    'text-left',
    'text-center',
    'text-right'
  ]
};
