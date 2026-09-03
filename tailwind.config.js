/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0E1316",
        panel: "#151B1F",
        panel2: "#1B2226",
        line: "#2A343A",
        ink: "#ECEEEE",
        muted: "#8B969C",
        faint: "#5C666B",
        amber: "#E8A33D",
        amberDim: "#8A6326",
        teal: "#5FA8A0",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        grid:
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "36px 36px",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.25 },
        },
        rise: {
          "0%": { opacity: 0, transform: "translateY(14px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        scan: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        blink: "blink 1.6s ease-in-out infinite",
        rise: "rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        scan: "scan 2.4s linear infinite",
      },
    },
  },
  plugins: [],
};
