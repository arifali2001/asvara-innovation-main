/**
 * Animation Presets for Asvara Innovation
 * Centralized configuration for consistent animations across the app
 * --------------------- BY ARIF and CHATGPT ------------------------
 */

// ==========================================
// TEXT ANIMATION PRESETS (LetterRevealBlur)
// ==========================================
// WE WILL HAVE TO UPDATE THIS IS FUTURE AS PER OUR REQUIREMENTS

export const textPresets = {
  // Premium & Smooth Animations
  hero: {
    blurAmount: 22,
    duration: 1.3,
    stagger: 0.028,
    yOffset: 45,
    scaleFrom: 0.75,
    ease: "power4.out" as const,
  },

  heroSubtitle: {
    blurAmount: 15,
    duration: 1.1,
    stagger: 0.02,
    yOffset: 30,
    scaleFrom: 0.85,
    ease: "power3.out" as const,
  },

  sectionTitle: {
    blurAmount: 18,
    duration: 1.2,
    stagger: 0.025,
    yOffset: 35,
    scaleFrom: 0.8,
    ease: "power3.out" as const,
  },

  // Fast & Modern Animations
  fast: {
    blurAmount: 12,
    duration: 0.8,
    stagger: 0.015,
    yOffset: 20,
    scaleFrom: 0.9,
    ease: "power3.out" as const,
  },

  snappy: {
    blurAmount: 10,
    duration: 0.6,
    stagger: 0.01,
    yOffset: 15,
    scaleFrom: 0.95,
    ease: "power2.out" as const,
  },

  // Elegant & Refined Animations
  elegant: {
    blurAmount: 20,
    duration: 1.5,
    stagger: 0.03,
    yOffset: 40,
    scaleFrom: 0.7,
    ease: "power4.out" as const,
  },

  refined: {
    blurAmount: 16,
    duration: 1.4,
    stagger: 0.025,
    yOffset: 35,
    scaleFrom: 0.75,
    ease: "power3.out" as const,
  },

  // Dreamy & Smooth Animations
  dreamy: {
    blurAmount: 25,
    duration: 1.8,
    stagger: 0.035,
    yOffset: 50,
    scaleFrom: 0.65,
    ease: "expo.out" as const,
  },

  float: {
    blurAmount: 20,
    duration: 2,
    stagger: 0.04,
    yOffset: 45,
    scaleFrom: 0.7,
    ease: "power4.out" as const,
  },

  // Playful & Dynamic Animations
  bounce: {
    blurAmount: 15,
    duration: 1.4,
    stagger: 0.025,
    yOffset: 35,
    scaleFrom: 0.5,
    scaleTo: 1,
    ease: "elastic.out(1, 0.6)" as const,
  },

  spring: {
    blurAmount: 12,
    duration: 1.2,
    stagger: 0.02,
    yOffset: 30,
    scaleFrom: 0.6,
    ease: "back.out(1.7)" as const,
  },

  // Subtle & Professional Animations
  subtle: {
    blurAmount: 8,
    duration: 0.9,
    stagger: 0.015,
    yOffset: 12,
    scaleFrom: 0.95,
    ease: "power2.out" as const,
  },

  minimal: {
    blurAmount: 6,
    duration: 0.7,
    stagger: 0.01,
    yOffset: 8,
    scaleFrom: 0.98,
    ease: "power1.out" as const,
  },

  // Heavy & Dramatic Animations
  dramatic: {
    blurAmount: 30,
    duration: 2,
    stagger: 0.04,
    yOffset: 60,
    scaleFrom: 0.6,
    ease: "expo.out" as const,
  },

  intense: {
    blurAmount: 28,
    duration: 1.6,
    stagger: 0.035,
    yOffset: 55,
    scaleFrom: 0.65,
    ease: "power4.out" as const,
  },

  // Directional Animations
  slideLeft: {
    blurAmount: 15,
    duration: 1,
    stagger: 0.02,
    xOffset: -30,
    yOffset: 0,
    scaleFrom: 0.9,
    ease: "power3.out" as const,
  },

  slideRight: {
    blurAmount: 15,
    duration: 1,
    stagger: 0.02,
    xOffset: 30,
    yOffset: 0,
    scaleFrom: 0.9,
    ease: "power3.out" as const,
  },

  diagonal: {
    blurAmount: 18,
    duration: 1.2,
    stagger: 0.025,
    xOffset: -25,
    yOffset: 25,
    scaleFrom: 0.8,
    ease: "power3.out" as const,
  },

  // Special Effects
  glitch: {
    blurAmount: 20,
    duration: 0.4,
    stagger: 0.005,
    yOffset: 15,
    xOffset: 5,
    scaleFrom: 0.9,
    ease: "steps(4)" as const,
  },

  wave: {
    blurAmount: 16,
    duration: 1.5,
    stagger: 0.05,
    yOffset: 30,
    scaleFrom: 0.8,
    ease: "sine.inOut" as const,
  },
} as const;

// ==========================================
// PARALLAX PRESETS
// ==========================================

export const parallaxPresets = {
  // Standard Parallax Speeds
  slowest: {
    speed: 0.1,
  },

  slow: {
    speed: 0.2,
  },

  medium: {
    speed: 0.3,
  },

  fast: {
    speed: 0.5,
  },

  fastest: {
    speed: 0.7,
  },

  // Background Elements
  backgroundBlob: {
    speed: 0.3,
  },

  backgroundGradient: {
    speed: 0.4,
  },

  // Content Elements
  card: {
    speed: 0.2,
  },

  image: {
    speed: 0.35,
  },

  text: {
    speed: 0.25,
  },

  // Layered Parallax (for depth)
  layer1: {
    speed: 0.1, // Furthest back
  },

  layer2: {
    speed: 0.25,
  },

  layer3: {
    speed: 0.4,
  },

  layer4: {
    speed: 0.55, // Closest to viewer
  },

  // Special Effects
  reverse: {
    speed: -0.2, // Moves opposite direction
  },

  reverseStrong: {
    speed: -0.4,
  },

  static: {
    speed: 0, // No parallax
  },
} as const;

// ==========================================
// FADEIN PRESETS
// ==========================================

export const fadeInPresets = {
  default: {
    direction: "up" as const,
    delay: 0,
  },

  quick: {
    direction: "up" as const,
    delay: 0.2,
  },

  delayed: {
    direction: "up" as const,
    delay: 0.5,
  },

  longDelay: {
    direction: "up" as const,
    delay: 1,
  },

  fromBottom: {
    direction: "up" as const,
    delay: 0,
  },

  fromTop: {
    direction: "down" as const,
    delay: 0,
  },

  fromLeft: {
    direction: "right" as const,
    delay: 0,
  },

  fromRight: {
    direction: "left" as const,
    delay: 0,
  },
} as const;

// ==========================================
// COMBINED PRESETS (Pre-configured combinations)
// ==========================================

export const combinedPresets = {
  // Hero Section
  heroSetup: {
    title: textPresets.hero,
    subtitle: textPresets.heroSubtitle,
    titleParallax: parallaxPresets.medium,
    backgroundParallax: parallaxPresets.backgroundBlob,
  },

  // Feature Cards
  featureCards: {
    title: textPresets.sectionTitle,
    card1Parallax: parallaxPresets.slow,
    card2Parallax: parallaxPresets.medium,
    card3Parallax: parallaxPresets.fast,
  },

  // Stats Section
  statsSection: {
    text: textPresets.fast,
    parallax1: parallaxPresets.slowest,
    parallax2: parallaxPresets.slow,
    parallax3: parallaxPresets.medium,
    parallax4: parallaxPresets.fast,
  },

  // CTA Section
  ctaSection: {
    title: textPresets.elegant,
    subtitle: textPresets.subtle,
    backgroundParallax: parallaxPresets.backgroundGradient,
  },
} as const;

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

/**
 * Get a text preset with optional overrides
 */
export function getTextPreset(
  presetName: keyof typeof textPresets,
  overrides?: Partial<(typeof textPresets)[keyof typeof textPresets]>,
) {
  return {
    ...textPresets[presetName],
    ...overrides,
  };
}

/**
 * Get a parallax preset with optional overrides
 */
export function getParallaxPreset(
  presetName: keyof typeof parallaxPresets,
  overrides?: Partial<(typeof parallaxPresets)[keyof typeof parallaxPresets]>,
) {
  return {
    ...parallaxPresets[presetName],
    ...overrides,
  };
}

/**
 * Get a fade-in preset with optional overrides
 */
export function getFadeInPreset(
  presetName: keyof typeof fadeInPresets,
  overrides?: Partial<(typeof fadeInPresets)[keyof typeof fadeInPresets]>,
) {
  return {
    ...fadeInPresets[presetName],
    ...overrides,
  };
}

// ==========================================
// TYPE EXPORTS
// ==========================================

export type TextPresetName = keyof typeof textPresets;
export type ParallaxPresetName = keyof typeof parallaxPresets;
export type FadeInPresetName = keyof typeof fadeInPresets;
export type CombinedPresetName = keyof typeof combinedPresets;
