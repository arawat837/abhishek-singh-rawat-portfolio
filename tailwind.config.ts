import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090b",
        foreground: "#f8fafc",
        brand: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
          purple: "#8b5cf6",
          violet: "#7c3aed",
          deep: "#4c1d95",
        },
        surface: {
          DEFAULT: "#121218",
          secondary: "#161622",
          elevated: "#1c1c28",
          muted: "#0e0e13",
          border: "rgba(255, 255, 255, 0.08)",
          hover: "rgba(255, 255, 255, 0.04)",
        },
      },
      boxShadow: {
        "glow-sm": "0 0 15px -3px rgba(139, 92, 246, 0.25)",
        "glow-md": "0 0 25px -4px rgba(139, 92, 246, 0.35)",
        "glow-lg": "0 0 40px -5px rgba(139, 92, 246, 0.45)",
        "card": "0 10px 30px -10px rgba(0, 0, 0, 0.7)",
        "card-hover": "0 20px 40px -15px rgba(124, 58, 237, 0.2)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
