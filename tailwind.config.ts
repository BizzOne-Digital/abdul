import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'titan-navy': '#0F1A2E',
        'titan-midnight': '#060B14',
        'titan-blue': '#1E3A5F',
        'titan-steel': '#8B9CB5',
        'titan-off-white': '#F4F7FA',
        'titan-white': '#FFFFFF',
        'titan-orange': '#F5A623',
        'titan-coral': '#E8940A',
        'titan-sage': '#1E3A5F',
        'titan-amber': '#FFB84D',
        'titan-cream': '#F8FAFC',
        'titan-mint': '#E2E8F0',
        'titan-peach': '#FFF4E5',
        'titan-sky': '#3B5998',
        'titan-periwinkle': '#A8C4E8',
      },
      fontFamily: {
        display: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'titan': '0 4px 24px rgba(6, 11, 20, 0.15)',
        'titan-lg': '0 8px 40px rgba(6, 11, 20, 0.25)',
        'glow-coral': '0 0 30px rgba(245, 166, 35, 0.35)',
        'glow-sage': '0 0 30px rgba(245, 166, 35, 0.2)',
        'soft': '0 2px 16px rgba(6, 11, 20, 0.08)',
        'orange': '0 4px 20px rgba(245, 166, 35, 0.4)',
      },
      backgroundImage: {
        'gradient-titan': 'linear-gradient(135deg, #0F1A2E 0%, #060B14 100%)',
        'gradient-blue': 'linear-gradient(135deg, #1E3A5F 0%, #0F1A2E 100%)',
        'gradient-warm': 'linear-gradient(135deg, #F5A623 0%, #E8940A 100%)',
        'gradient-hero': 'linear-gradient(160deg, #0F1A2E 0%, #1a2744 100%)',
        'gradient-mesh': 'radial-gradient(at 20% 50%, rgba(245, 166, 35, 0.08) 0px, transparent 50%), radial-gradient(at 80% 20%, rgba(30, 58, 95, 0.3) 0px, transparent 50%)',
        'hero-sunset': 'var(--img-hero-truck)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-up': 'fadeUp 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        fadeUp: { from: { opacity: '0', transform: 'translateY(30px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        slideInLeft: { from: { opacity: '0', transform: 'translateX(-50px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
        slideInRight: { from: { opacity: '0', transform: 'translateX(50px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
        scaleIn: { from: { opacity: '0', transform: 'scale(0.9)' }, to: { opacity: '1', transform: 'scale(1)' } },
        'bounce-subtle': { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-20px)' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
      },
    },
  },
  plugins: [],
};

export default config;
