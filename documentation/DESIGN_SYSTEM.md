# Design System - Online Menu

This document defines the strict UI/UX rules applied to ensure a professional, luxury feel.

## 1. Spacing & Grid
- **The 8px Rule:** All paddings, margins, and gaps MUST be multiples of 8px (8, 16, 24, 32, 48, 64, etc.).
- **Visual Harmony:** No random pixel values. This ensures mathematical consistency across all devices.

## 2. Typography
- **Scale:** Use of a harmonic typographic scale (e.g., Major Third) to maintain a clear hierarchy.
- **Pairing:** 
  - **Serif (Titles):** Evokes sophistication, tradition, and luxury.
  - **Sans-Serif (Body):** Ensures maximum readability and modern feel.
- **Legibility:** Minimum font size of 12px for secondary text, 16px for body text.

## 3. Color Theory & Branding (SaaS approach)
- **Design Tokens:** All brand-specific colors are abstracted into CSS variables.
  - `--primary-color`: Brand's main color.
  - `--accent-color`: Used for highlights and CTAs.
  - `--bg-color`: Neutral background (off-white or deep charcoal).
  - `--text-main`: High contrast for readability.
- **Contrast:** Adherence to WCAG accessibility standards to ensure visibility in all lighting conditions (e.g., sunlight).

## 4. Interactive Elements (UX)
- **Hit Targets:** All clickable elements have a minimum size of 44x44px (Fitts's Law).
- **Motion:** Micro-interactions should be subtle (fade-ins, soft slides) to provide feedback without distracting from the content.
- **Transitions:** View changes use smooth transitions to avoid "page jumps," mimicking a native mobile application.
