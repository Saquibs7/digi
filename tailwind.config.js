module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        basewhite: "var(--basewhite)",
        "gray-25": "var(--gray-25)",
        "gray-300": "var(--gray-300)",
        "gray-50": "var(--gray-50)",
        "gray-600": "var(--gray-600)",
        "gray-700": "var(--gray-700)",
        "gray-900": "var(--gray-900)",
        "gray-950": "var(--gray-950)",
        "neutral-100": "var(--neutral-100)",
        "neutral-200": "var(--neutral-200)",
        "neutral-50": "var(--neutral-50)",
        "neutral-700": "var(--neutral-700)",
        "neutral-800": "var(--neutral-800)",
        "primary-200": "var(--primary-200)",
        "primary-300": "var(--primary-300)",
        "primary-400": "var(--primary-400)",
        "primary-600": "var(--primary-600)",
        "primary-700": "var(--primary-700)",
        "primary-900": "var(--primary-900)",
        primarybluebase: "var(--primarybluebase)",
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
      fontFamily: {
        "headline-m-desktop-bold": "var(--headline-m-desktop-bold-font-family)",
        "headline-m-desktop-semibold":
          "var(--headline-m-desktop-semibold-font-family)",
        "headline-s-desktop-medium":
          "var(--headline-s-desktop-medium-font-family)",
        "headline-XS-desktop-semibold":
          "var(--headline-XS-desktop-semibold-font-family)",
        "text-button-semibold-large":
          "var(--text-button-semibold-large-font-family)",
        "text-l-medium": "var(--text-l-medium-font-family)",
        "text-l-regular": "var(--text-l-regular-font-family)",
        "text-l-semibold": "var(--text-l-semibold-font-family)",
        "text-m-medium": "var(--text-m-medium-font-family)",
        "text-m-regular": "var(--text-m-regular-font-family)",
        "text-s-medium": "var(--text-s-medium-font-family)",
        "text-s-regular": "var(--text-s-regular-font-family)",
        "text-s-semibold": "var(--text-s-semibold-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: { "shadow-XSM": "var(--shadow-XSM)" },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
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
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
