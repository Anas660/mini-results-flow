import React from "react";

export const themeColors = {
    light: {
        background: "#F8F4F4",         // App background (light)
        cardBackground: "#fff",         // Card background (light)
        cardBorder: "#e5e7eb",          // Card border (light, Tailwind gray-100)
        textPrimary: "#183B49",         // Main text
        textSecondary: "#13556F",       // Secondary text
        textAccent: "#12241F",          // Accent text
        accent: "#36BC9F",              // Primary accent (buttons, highlights)
        accent2: "#F75950",             // Secondary accent
        white: "#fff",                  // White (for text/icons on dark backgrounds)
    },
    dark: {
        background: "#181A1B",          // App background (dark)
        cardBackground: "#232627",      // Card background (dark)
        cardBorder: "#2D3133",          // Card border (dark)
        textPrimary: "#F8F4F4",         // Main text (light on dark)
        textSecondary: "#B5C2C9",       // Secondary text (muted light)
        textAccent: "#E0E6E9",          // Accent text (lighter)
        accent: "#36BC9F",              // Primary accent (same as light)
        accent2: "#F75950",             // Secondary accent (same as light)
        white: "#fff",                  // White (for text/icons)
    }
};

export const ThemeContext = React.createContext<{
  dark: boolean;
  toggle: () => void;
  colors: typeof themeColors.light;
}>({
  dark: false,
  toggle: () => {},
  colors: themeColors.light,
});