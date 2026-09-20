# UX Strategy - Online Menu

Definition of the user journey and information architecture.

## 1. User Journey Map
`QR Code Scan` $\rightarrow$ `Language Selection` $\rightarrow$ `Main Menu View` $\rightarrow$ `Item Detail View` $\rightarrow$ `Back to Menu`

## 2. View Definitions

### A. Language Selection (The Welcome)
- **Purpose:** Establish the user's language preference before accessing the content.
- **Key Components:**
  - Minimalist Welcome Message.
  - Grid of Language Options: Portuguese, English, Spanish, French.
  - Visual Indicators: High-quality flags for each language.
- **Interaction:** Single tap selection $\rightarrow$ Immediate transition to Main Menu.
- **Persistence:** Choice saved in `localStorage` to avoid repeated selection on refresh.

### B. Main Menu (The Hub)
- **Purpose:** Fast discovery of offerings.
- **Key Components:**
  - Branding Header.
  - Horizontal Category Navigation (Sticky).
  - Section Banners (Basic Tier).
  - Item List (Title, Price, Short Description).
- **Interaction:** Vertical scroll with smooth reveal of items.

### B. Item Detail (The Desire)
- **Purpose:** Detailed conversion.
- **Key Components:**
  - High-Res Image (Premium Tier).
  - Full Description.
  - Ingredient List.
  - Allergen Indicators.
  - Pairing Suggestion.
- **Interaction:** Modal slide-up or full-screen overlay.

### C. Branding/About (The Story)
- **Purpose:** Emotional connection.
- **Key Components:**
  - Narrative about the restaurant/chef.
  - Brand philosophy.
  - Atmosphere imagery.

### D. Contacts/Utility (The Utility)
- **Purpose:** Practical resolution.
- **Key Components:**
  - Google Maps integration.
  - Business Hours.
  - Social Media links.
  - Contact info.

## 3. Navigation Logic
- **Non-Linearity:** The user can access Branding or Utility views from the main hub without losing their scroll position in the menu.
- **State Management:** The app tracks the active category to provide instant jumps in the main menu.
