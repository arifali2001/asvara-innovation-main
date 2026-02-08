/**
 * Asvara Innovation Design System
 * A modern, sophisticated color palette with stone tones
 */

export const colors = {
  // Primary Text & Dark Elements
  text: {
    primary: "#292929",
    secondary: "#4a4a4a",
    tertiary: "#6b6b6b",
    muted: "#8a8a8a",
  },

  // Background & Light Elements
  background: {
    primary: "#e1dfdd",
    secondary: "#ebe9e7",
    tertiary: "#f5f3f1",
    white: "#fafaf9",
  },

  // Accent Colors (subtle and refined)
  accent: {
    primary: "#8b7355", // Warm brown
    secondary: "#a68a6d", // Light brown
    tertiary: "#c4b5a0", // Beige
    cream: "#e8dfd5", // Light cream
  },

  // Borders & Dividers
  border: {
    light: "#d4d2d0",
    medium: "#c0bebb",
    dark: "#a8a6a3",
  },

  // Hover & Active States
  interactive: {
    hover: "#d1cfcd",
    active: "#c7c5c3",
    focus: "#8b7355",
  },
};

export const typography = {
  // Font Families
  fonts: {
    primary: "Montserrat, system-ui, -apple-system, sans-serif",
    secondary: "Inter, system-ui, -apple-system, sans-serif",
    accent: "Cormorant Garamond, Georgia, serif",
    mono: "JetBrains Mono, Courier New, monospace",
  },

  // Font Sizes (using clamp for responsive)
  sizes: {
    xs: "clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)", // 12-14px
    sm: "clamp(0.875rem, 0.8rem + 0.375vw, 1rem)", // 14-16px
    base: "clamp(1rem, 0.95rem + 0.25vw, 1.125rem)", // 16-18px
    lg: "clamp(1.125rem, 1rem + 0.625vw, 1.5rem)", // 18-24px
    xl: "clamp(1.25rem, 1.1rem + 0.75vw, 1.75rem)", // 20-28px
    "2xl": "clamp(1.5rem, 1.3rem + 1vw, 2.25rem)", // 24-36px
    "3xl": "clamp(1.875rem, 1.5rem + 1.875vw, 3rem)", // 30-48px
    "4xl": "clamp(2.25rem, 1.75rem + 2.5vw, 3.75rem)", // 36-60px
    "5xl": "clamp(3rem, 2rem + 5vw, 6rem)", // 48-96px
    "6xl": "clamp(3.75rem, 2.5rem + 6.25vw, 7.5rem)", // 60-120px
  },

  // Font Weights
  weights: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },

  // Line Heights
  lineHeights: {
    tight: 1.1,
    snug: 1.25,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },

  // Letter Spacing
  tracking: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
};

export const spacing = {
  // Base spacing scale (in rem)
  0: "0",
  1: "0.25rem", // 4px
  2: "0.5rem", // 8px
  3: "0.75rem", // 12px
  4: "1rem", // 16px
  5: "1.25rem", // 20px
  6: "1.5rem", // 24px
  8: "2rem", // 32px
  10: "2.5rem", // 40px
  12: "3rem", // 48px
  16: "4rem", // 64px
  20: "5rem", // 80px
  24: "6rem", // 96px
  32: "8rem", // 128px
  40: "10rem", // 160px
  48: "12rem", // 192px
  56: "14rem", // 224px
  64: "16rem", // 256px
};

export const effects = {
  // Border Radius
  radius: {
    none: "0",
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    "2xl": "1.5rem",
    "3xl": "2rem",
    full: "9999px",
  },

  // Shadows (subtle for light theme)
  shadows: {
    sm: "0 1px 2px 0 rgba(41, 41, 41, 0.05)",
    md: "0 4px 6px -1px rgba(41, 41, 41, 0.07), 0 2px 4px -1px rgba(41, 41, 41, 0.03)",
    lg: "0 10px 15px -3px rgba(41, 41, 41, 0.08), 0 4px 6px -2px rgba(41, 41, 41, 0.03)",
    xl: "0 20px 25px -5px rgba(41, 41, 41, 0.08), 0 10px 10px -5px rgba(41, 41, 41, 0.02)",
    "2xl": "0 25px 50px -12px rgba(41, 41, 41, 0.15)",
    inner: "inset 0 2px 4px 0 rgba(41, 41, 41, 0.06)",
  },

  // Transitions
  transitions: {
    fast: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
    base: "300ms cubic-bezier(0.4, 0, 0.2, 1)",
    slow: "500ms cubic-bezier(0.4, 0, 0.2, 1)",
    slowest: "700ms cubic-bezier(0.4, 0, 0.2, 1)",
  },

  // Animations
  animations: {
    fadeIn: "fadeIn 0.6s ease-out forwards",
    slideUp: "slideUp 0.6s ease-out forwards",
    scaleIn: "scaleIn 0.6s ease-out forwards",
  },
};

export const layout = {
  // Container Max Widths
  container: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  // Breakpoints
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
};

// CSS Custom Properties Generator
export const generateCSSVariables = () => {
  return `
    :root {
      /* Colors */
      --color-text-primary: ${colors.text.primary};
      --color-text-secondary: ${colors.text.secondary};
      --color-text-tertiary: ${colors.text.tertiary};
      --color-text-muted: ${colors.text.muted};
      
      --color-bg-primary: ${colors.background.primary};
      --color-bg-secondary: ${colors.background.secondary};
      --color-bg-tertiary: ${colors.background.tertiary};
      --color-bg-white: ${colors.background.white};
      
      --color-accent-primary: ${colors.accent.primary};
      --color-accent-secondary: ${colors.accent.secondary};
      --color-accent-tertiary: ${colors.accent.tertiary};
      --color-accent-cream: ${colors.accent.cream};
      
      --color-border-light: ${colors.border.light};
      --color-border-medium: ${colors.border.medium};
      --color-border-dark: ${colors.border.dark};
      
      /* Typography */
      --font-primary: ${typography.fonts.primary};
      --font-secondary: ${typography.fonts.secondary};
      --font-accent: ${typography.fonts.accent};
      --font-mono: ${typography.fonts.mono};
      
      /* Spacing */
      --spacing-section: clamp(4rem, 8vw, 8rem);
      --spacing-container: clamp(1rem, 5vw, 3rem);
      
      /* Effects */
      --transition-base: ${effects.transitions.base};
      --shadow-md: ${effects.shadows.md};
      --radius-lg: ${effects.radius.lg};
    }
  `;
};

// Utility Classes
export const utils = {
  // Text styles
  heading: `font-[${typography.fonts.primary}] font-${typography.weights.semibold} text-[${colors.text.primary}] tracking-${typography.tracking.tight}`,
  body: `font-[${typography.fonts.secondary}] font-${typography.weights.regular} text-[${colors.text.secondary}] leading-${typography.lineHeights.relaxed}`,
  accent: `font-[${typography.fonts.accent}] font-${typography.weights.regular} text-[${colors.accent.primary}]`,
};

export default {
  colors,
  typography,
  spacing,
  effects,
  layout,
  utils,
  generateCSSVariables,
};
