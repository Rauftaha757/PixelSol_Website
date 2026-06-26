import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
        // shadcn semantic tokens (retained; referenced by border-border etc.)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        // ── "The Thinking System" palette ──────────────────────────────
        canvas: {
          DEFAULT: "#0d0d0c", // warm near-black page background
          raised: "#15140f", // panels / screens (+8 over canvas)
        },
        energy: {
          indigo: "#7a66e1",
          pink: "#fb3081",
          coral: "#f8805f",
        },
        led: "#5eead4", // channel "online" LED teal
        // text opacity tiers — hierarchy via opacity, not named grays
        t: {
          100: "#ffffff",
          90: "rgba(255, 255, 255, 0.9)",
          70: "rgba(255, 255, 255, 0.7)",
          42: "rgba(255, 255, 255, 0.42)",
          16: "rgba(255, 255, 255, 0.16)",
        },
        // hairlines
        hair: {
          DEFAULT: "rgba(255, 255, 255, 0.08)",
          strong: "rgba(255, 255, 255, 0.12)",
          energy: "rgba(122, 102, 225, 0.45)",
        },

        // Legacy named colours — retained ONLY so the not-yet-migrated
        // sections keep rendering. Removed as each section is rewritten.
        "charcoal-black": "#0F111A",
        "midnight-navy": "#050714",
        "deep-slate": "#131521",
        "alt-slate": "#1B1D2D",
        "steel-gray": "#222538",
        "cool-border": "#373C4E",
        "fog-white": "#F3F4F6",
        "soft-gray": "#4C5263",
        "muted-gray": "#61687D",
        "cool-blue": "#777F99",
        "accent-blue": "#8E96AA",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        // mixed-radius system
        screen: "8px", // sharp panels / "screens" / titlebars
        card: "22px", // cards
        pill: "9999px", // buttons / inputs / badges
      },
      fontFamily: {
        display: ["var(--font-display)"], // Space Grotesk
        body: ["var(--font-body)"], // Satoshi
        mono: ["var(--font-mono)"], // JetBrains Mono
        sans: ["var(--font-body)"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(119, 127, 153, 0.3)" },
          "100%": { boxShadow: "0 0 30px rgba(119, 127, 153, 0.6)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
