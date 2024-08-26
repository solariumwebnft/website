import type { Config } from "tailwindcss";
const svgToDataUri = require("mini-svg-data-uri");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const config = {
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
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        "roboto-mono": ["Roboto Mono", "monospace"],
      },
      fontSize: {
        h1: ["2.5rem", { lineHeight: "1.2", fontWeight: "800" }], // 40px, Extra Bold (Mobile)
        h2: ["2.1875rem", { lineHeight: "1.2", fontWeight: "800" }], // 35px, Extra Bold (Mobile)
        h3: ["1.875rem", { lineHeight: "1.2", fontWeight: "800" }], // 30px, Extra Bold (Mobile)
        h4: ["1.75rem", { lineHeight: "1.2", fontWeight: "800" }], // 28px, Extra Bold (Mobile)
        h5: ["1.5rem", { lineHeight: "1.2", fontWeight: "700" }], // 24px, Bold (Mobile)
        h6: ["1.25rem", { lineHeight: "1.2", fontWeight: "700" }], // 20px, Bold (Mobile)
        h7: ["1rem", { lineHeight: "1.2", fontWeight: "800" }], // 16px, Extra Bold (Mobile)
        p16: ["1rem", { lineHeight: "1.5", fontWeight: "400" }], // 16px, Regular (Mobile)
        p14: ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }], // 14px, Regular (Mobile)
        p14bold: ["0.875rem", { lineHeight: "1.5", fontWeight: "700" }], // 14px, Bold (Mobile)
      },

      colors: {
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        resize: {
          "0%, 100%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.6)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        resize: "resize 0.5s ease-in-out",
      },
    },
  },
  plugins: [
    addVariablesForColors,
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-dot-thick": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme("backgroundColor")),
          type: "color",
        },
      );
    },
  ],
} satisfies Config;

export default config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}
