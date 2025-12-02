/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Updated Brighter Pastel Palette
        cream: '#FFF9F5', // Warmer, brighter cream
        'primary-sage': '#A7D7C5', // Brighter Mint
        'accent-pink': '#FFC4D6', // Brighter Pink
        'soft-lavender': '#E0C3FC', // Brighter Lavender
        'text-charcoal': '#5D4E7A', // Deep Muted Purple (New Base Color)
        'card-white': '#FFFFFF',
        
        // Additional Vibrant Pastels
        'pastel-blue': '#AEC6CF',
        'pastel-yellow': '#FDFD96',
        'pastel-green': '#77DD77',
        'pastel-purple': '#B39EB5',
        'pastel-orange': '#FFB347',
        
        // Legacy mapping
        background: '#FFF9F5', 
        foreground: '#5D4E7A',
        muted: '#9AA0A6',
        primary: '#A7D7C5',
        secondary: '#E0C3FC',
        accent: '#FFC4D6',
        'card-bg': '#FFFFFF',
      },
      fontFamily: {
        sans: ['var(--font-quicksand)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-sniglet)', 'cursive'],
        mono: ['JetBrains Mono', 'monospace'],
        handwriting: ['var(--font-patrick)', 'cursive'],
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'sticker': '4px 4px 0px #E2E2E2', // Lighter shadow
        'sticker-hover': '6px 6px 0px #D4D4D4',
        'sticker-active': '2px 2px 0px #E2E2E2',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'blob': 'blob 10s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
    },
  },
  plugins: [],
}
