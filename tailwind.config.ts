import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        navy: "#0A192F",
        green: "#64FFDA",
        slate: "#8892B0",
        "light-slate": "#CCD6F6",
        "lightest-slate": "#E6F1FF",
        "navy-light": "#112240",
        "navy-lighter": "#233554",
      },
      fontFamily: {
        sans: ["Calibre", "Inter", "San Francisco", "SF Pro Text", "sans-serif"],
        mono: ["SF Mono", "Fira Code", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "slide-down": "slideDown 0.5s ease-out forwards",
        "glow": "glow 1.5s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        glow: {
          "from": { 
            textShadow: "0 0 10px #64FFDA, 0 0 20px #64FFDA, 0 0 30px #64FFDA"
          },
          "to": {
            textShadow: "0 0 20px #64FFDA, 0 0 30px #64FFDA, 0 0 40px #64FFDA"
          }
        }
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;