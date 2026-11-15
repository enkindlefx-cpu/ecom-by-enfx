/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#120917",
        "dark-bg": "#050505",
        "electric-violet": "#9D14FF",
        crimson: "#670707",
        "soft-lilac": "#C858C6",
        border: "rgba(255, 255, 255, 0.1)",
        "border-subtle": "rgba(255, 255, 255, 0.07)",
        "border-glow": "rgba(157, 20, 255, 0.4)",
        "crimson-glow": "rgba(103, 7, 7, 0.5)",
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        space: ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        'glow-violet': '0 0 35px -5px rgba(157, 20, 255, 0.45)',
        'glow-crimson': '0 0 40px -5px rgba(103, 7, 7, 0.6)',
        'glow-lilac': '0 0 25px -5px rgba(200, 88, 198, 0.4)',
        'inner-hairline': 'inset 0 0 0 1px rgba(255, 255, 255, 0.12)',
        'luxury-card': '0 20px 50px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'border-spin': 'border-spin 7s linear infinite',
        'glow-breath': 'glowBreath 5s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowBreath: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(157,20,255,0.4))' },
          '100%': { opacity: '0.8', filter: 'drop-shadow(0 0 35px rgba(157,20,255,0.8))' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-ambient': 'radial-gradient(circle at 50% 0%, rgba(157, 20, 255, 0.22) 0%, rgba(103, 7, 7, 0.15) 45%, rgba(18, 9, 23, 1) 85%)',
        'fluted-stripes': 'repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 12px)',
      }
    },
  },
  plugins: [],
}
