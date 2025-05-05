/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
    theme: {
      extend: {
        colors: {
          brandBlue: '#6D98BA',
          dark: '#333333',
          lightGray: '#f4f4f4',
          mediumGray: '#888888',
        },
        fontFamily: {
          sans: ['Montserrat', 'sans-serif'],
        },
        fontWeight: {
          medium: 500,
          semibold: 600,
        },
        boxShadow: {
          sm: '0 2px 4px rgba(0, 0, 0, 0.05)',
          md: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
        borderRadius: {
          sm: '4px',
          md: '8px',
        },
        spacing: {
          xs: '0.25rem',
          sm: '0.5rem',
          md: '1rem',
          lg: '2rem',
          xl: '4rem',
        },
        container: {
          center: true,
          padding: '1rem',
          screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1200px',
          },
        },
        animation: {
          'fade-in': 'fadeIn 0.5s ease-in-out',
          'slide-up': 'slideUp 0.5s ease-in-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
          slideUp: {
            '0%': { transform: 'translateY(20px)', opacity: 0 },
            '100%': { transform: 'translateY(0)', opacity: 1 },
          },
        },
      },
    },
    plugins: [],
  };