# Project Log - Online Menu SaaS

This file tracks all architectural and design decisions for the Online Menu project.

## Phase 1: Discovery & Definition
- **Date:** 2026-09-20
- **Decision:** The product will be a high-fidelity Online Menu for restaurants, designed as a SaaS model where brand identity is separated from the core logic.
- **Core Value Proposition:** Focus on high-end design (UI/UX) as the main differentiator compared to standard PDF menus.
- **Monetization Strategy:** Tiered pricing based on imagery (Basic: Section Images vs. Premium: Per-Item Images).
- **Navigation Model:** Single Page Application (SPA) using "Views". The flow starts with a Mandatory Language Selection screen to ensure global accessibility before entering the menu.

## Phase 2: Design Framework
- **Design Direction:** "Elegant and Functional" / "Neutral Luxury".
- **Visual Rules:** 
  - 8px Grid system for all spacings.
  - Harmonic typographic scale.
  - Focus on white space and high contrast for accessibility.
- **UX Flow:** QR Scan $\rightarrow$ Main Menu $\rightarrow$ (Optional) Item Detail $\rightarrow$ (Optional) Branding/About $\rightarrow$ (Optional) Contacts.
