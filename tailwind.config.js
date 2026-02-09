/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px) rotate(4deg)' },
        },
        'spin-slow': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.3)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.3)' },
          '70%': { transform: 'scale(1)' },
        },
      },
      animation: {
        float: 'float 10s ease-in-out infinite',
        'spin-slow': 'spin-slow 3s linear infinite',
        heartbeat: 'heartbeat 1.5s ease-in-out infinite',
      },
      colors: {
        primary: "#4250EB",
        dark: "#0B0B0B",
        // Campaign colors (Valentine's red)
        campaign: "#DC2626",
        "campaign-dark": "#B91C1C",
        "campaign-light": "#FEE2E2",
        // Social media brand colors
        discord: "#5865F2",
        youtube: "#FF0000",
        instagram: "#E4405F",
        twitter: "#000000",
        tiktok: "#000000",
        linkedin: "#0077B5",
        facebook: "#1877F2"
      },
      fontFamily: {
        'clash': ['Clash Display', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'sans': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}