// config/theme.ts
// Shared design theme for all pages.
// Update colors, typography, spacing, or component styles here -> changes propagate site-wide.

import { cormorant, poppins } from "./fonts";

export const theme = {
  colors: {
    bg: "bg-[#e8dfd5]",
    primary: "text-[#292929]",
    secondary: "text-[#4a4a4a]",
    muted: "text-[#5a5a5a]",
    accent: "text-[#8b7355]",
    white: "text-white",
    border: "border-[#292929]/10",
    cardBg: "bg-[#f5f3f1]",
  },

  text: {
    // Hero
    heroTitle: `text-5xl md:text-7xl leading-tight font-bold ${cormorant.className}`,
    heroSubtitle: `text-5xl md:text-7xl italic font-light ${cormorant.className}`,

    // Section headers
    sectionHeading: `text-3xl md:text-4xl leading-tight font-bold ${cormorant.className}`,
    sectionSubtext: `font-light text-sm tracking-wide ${poppins.className}`,

    // Sub-headings (used on product pages)
    subHeading: `text-xl md:text-2xl font-semibold ${cormorant.className}`,

    // Cards / items
    cardTitle: `text-2xl font-bold ${cormorant.className}`,
    stepTitle: `text-lg font-bold ${cormorant.className}`,

    // Body
    bodyMain: `text-base font-light leading-relaxed ${poppins.className}`,
    bodySmall: `text-sm leading-relaxed ${poppins.className}`,

    // Labels / tags
    label: `text-xs font-bold tracking-[0.2em] uppercase ${poppins.className}`,
    tag: `text-[10px] font-bold uppercase tracking-wider ${poppins.className}`,

    // Quote
    quote: `text-lg md:text-xl leading-relaxed italic ${cormorant.className}`,
    quoteLarge: `text-lg md:text-2xl leading-relaxed italic ${cormorant.className}`,
  },

  components: {
    button: {
      base: `px-5 py-2 rounded-lg transition shadow-md font-medium text-sm ${poppins.className}`,
      primary: "bg-[#8b7355] text-white hover:bg-[#7a654a]",
      secondary:
        "bg-transparent text-[#292929] border border-[#292929]/20 hover:border-[#8b7355] hover:text-[#8b7355]",
      dark: "bg-[#292929] text-white hover:bg-gray-800",
    },
    pill: "inline-flex items-center gap-2 bg-[#f5f3f1]/50 border border-[#292929]/10 rounded-full px-3 py-1 hover:border-[#8b7355]/50 transition-colors",
    card: {
      feature: "relative group h-full",
      workflow:
        "relative bg-[#292929] border border-[#333] hover:border-[#8b7355]/50 p-8 rounded-2xl h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(139,115,85,0.1)] overflow-hidden",
    },
  },

  layout: {
    section: "py-20 relative overflow-hidden",
    sectionLarge: "py-24 md:py-32 relative",
    container: "max-w-7xl mx-auto px-6 relative z-10",
    containerNarrow: "max-w-4xl mx-auto px-6 relative z-10",
  },
};

export type Theme = typeof theme;
