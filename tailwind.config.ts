import type { Config } from "tailwindcss";

interface MatchUtilities {
  (
    utilities: Record<string, (value: string) => Record<string, string>>,
    options: { values: Record<string, string> }
  ): void;
}

interface Theme {
  (key: string): Record<string, string>;
}

interface Parameters {
  matchUtilities: MatchUtilities;
  theme: Theme;
}

const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "svg-background": "url('/landingPageBg.svg')",
      },
      colors: {
        maroon: "#A60221",
        pure: "#FFAE00",
        yellowOrange: "#F8A425",
        grayText: "#616161",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      fontSize: {
        txl: [
          "7rem",
          {
            lineHeight: "1",
            letterSpacing: "-0.02em",
            fontWeight: "1500",
          },
        ],
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }: Parameters) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
export default config;
