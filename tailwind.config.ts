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

        // ── "Studio Dossier" editorial palette ─────────────────────────
        bone: {
          DEFAULT: "#f4f1ea", // warm off-white canvas (primary)
          deep: "#ebe6d9", // secondary surface / alt rows
          receipt: "#efe9da", // raised panel surface
        },
        ink: {
          DEFAULT: "#1a1714", // primary text / rules / solid fills (warm near-black)
          90: "#1a1714e5",
          80: "#1a1714cc",
          60: "#1a171499",
          42: "#1a17146b",
          35: "#1a171459",
        },
        rule: {
          DEFAULT: "#1a17141f", // 1px hairline (ink @ 12%)
          strong: "#1a171433", // active divider (ink @ 20%)
        },
        vermilion: {
          DEFAULT: "#c8412b", // THE single accent — surgical, AA-safe on bone at 16px+
          dim: "#a8341f", // pressed/active
        },
        marker: "#f5c842", // marker-pen highlight fill behind ink text
        // "evidence room" dark sections
        evidence: {
          DEFAULT: "#13110f", // ink-dark section bg
          raised: "#1c1916", // panel on dark
          hair: "#ffffff14", // hairline on dark
        },

        // Legacy named colours — retained ONLY so not-yet-migrated sections
        // keep rendering. Removed as each section is rewritten.
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
        none: "0", // hairline-ruled rows, panels
        sharp: "4px", // buttons, tags, pills edges
        panel: "16px", // raised panels / tiles
      },
      fontFamily: {
        display: ["var(--font-display)"], // Fraunces (serif)
        body: ["var(--font-body)"], // Satoshi (grotesk)
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
