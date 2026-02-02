/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        aeh: {
          bg: "#020408", // Darker, richer black
          panel: "rgba(10, 15, 30, 0.6)", // More transparent, glassier
          cyan: "#4ECDC4", // Magic Blue/Green (Hytale Magic)
          blue: "#3B82F6",
          magenta: "#BE0AFF", // Deep Void Purple
          twitch: "#9146FF",
          kick: "#53FC18",   // Kick Green
          live: "#FF0000",
          gold: "#FFD700", // Hytale Gold
          emerald: "#2ECC71", // Kweebec Green
          line: "rgba(255, 255, 255, 0.1)"
        }
      },
      boxShadow: {
        glowCyan: "0 0 20px -5px rgba(78, 205, 196, 0.25), 0 0 0 1px rgba(255,255,255,0.05)",
        glowMagenta: "0 0 20px -5px rgba(190, 10, 255, 0.25), 0 0 0 1px rgba(255,255,255,0.05)",
        glowGold: "0 0 20px -5px rgba(255, 215, 0, 0.25), 0 0 0 1px rgba(255,255,255,0.05)",
        glowKick: "0 0 20px -5px rgba(83, 252, 24, 0.25), 0 0 0 1px rgba(83, 252, 24, 0.1)",
        glowTwitch: "0 0 20px -5px rgba(145, 70, 255, 0.25), 0 0 0 1px rgba(145, 70, 255, 0.1)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.3)"
      },
      borderRadius: { 
        xl2: "1rem", // Slightly tighter curves are more "pro" than 1.25rem sometimes, but 1.25 is fine. Let's stick closer to standard sizes or go big.
        '3xl': '1.5rem'
      },
      fontFamily: { 
        sans: ["Inter", "sans-serif"],
        display: ["Cinzel", "serif"],
        mono: ["JetBrains Mono", "monospace"]
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-up-delayed': 'slideUp 0.6s ease-out 0.2s forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glitch': 'glitch 1s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glitch: {
          '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
          '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
          '62%': { transform: 'translate(0,0) skew(5deg)' },
        }
      }
    }
  },
  plugins: []
};
