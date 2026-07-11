/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#4682B4',
          secondary: '#36454F',
          accent: '#737CA1',
          highlight: '#79BAEC',
        },
        surface: {
          light: '#FAFBFC',
          card: '#FFFFFF',
          navbar: 'rgba(255,255,255,0.80)',
          dark: '#0F172A',
          darkCard: '#1E293B',
          darkNavbar: 'rgba(15,23,42,0.80)',
        },
        ink: {
          main: '#1E293B',
          secondary: '#475569',
          muted: '#64748B',
          darkMain: '#FFFFFF',
          darkSecondary: '#CBD5E1',
          darkMuted: '#94A3B8',
        },
      },
      fontFamily: {
        logo: ['"Black Ops One"', 'cursive'],
        hero: ['"Geist"', 'sans-serif'],
        heading: ['"Saira"', 'sans-serif'],
        body: ['"Saira"', 'sans-serif'],
        btn: ['"Share Tech"', 'sans-serif'],
        spec: ['"Pixelify Sans"', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4.5s ease-in-out infinite',
        'float-fast': 'float 3.5s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-up': 'fadeUp 0.9s ease-out forwards',
        'fade-down': 'fadeDown 0.9s ease-out forwards',
        'blur-reveal': 'blurReveal 1.2s ease-out forwards',
        'scale-in': 'scaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'shimmer': 'shimmer 3s linear infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blurReveal: {
          '0%': { opacity: '0', filter: 'blur(12px)', transform: 'scale(0.96)' },
          '100%': { opacity: '1', filter: 'blur(0)', transform: 'scale(1)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass-light': '0 8px 32px rgba(70, 130, 180, 0.12)',
        'glass-dark': '0 8px 32px rgba(0, 0, 0, 0.4)',
        'premium': '0 20px 60px -15px rgba(70, 130, 180, 0.25)',
        'premium-dark': '0 20px 60px -15px rgba(121, 186, 236, 0.15)',
        'inner-glow': 'inset 0 1px 0 rgba(255,255,255,0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
