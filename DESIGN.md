---
name: Modern Gallery Design System
colors:
  surface: '#f9f9fa'
  surface-dim: '#dadadb'
  surface-bright: '#f9f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeef'
  surface-container-high: '#e8e8e9'
  surface-container-highest: '#e2e2e3'
  on-surface: '#1a1c1d'
  on-surface-variant: '#47464b'
  inverse-surface: '#2f3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#77767b'
  outline-variant: '#c8c5cb'
  surface-tint: '#5f5e61'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1e'
  on-primary-container: '#858387'
  inverse-primary: '#c8c5ca'
  secondary: '#4648d4'
  on-secondary: '#ffffff'
  secondary-container: '#6063ee'
  on-secondary-container: '#fffbff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1d1b16'
  on-tertiary-container: '#88837c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e4e1e6'
  primary-fixed-dim: '#c8c5ca'
  on-primary-fixed: '#1b1b1e'
  on-primary-fixed-variant: '#47464a'
  secondary-fixed: '#e1e0ff'
  secondary-fixed-dim: '#c0c1ff'
  on-secondary-fixed: '#07006c'
  on-secondary-fixed-variant: '#2f2ebe'
  tertiary-fixed: '#e8e2d9'
  tertiary-fixed-dim: '#cbc6bd'
  on-tertiary-fixed: '#1d1b16'
  on-tertiary-fixed-variant: '#494640'
  background: '#f9f9fa'
  on-background: '#1a1c1d'
  surface-variant: '#e2e2e3'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  gallery-gap: 16px
---

## Brand & Style

This design system is built upon the principles of **Curated Minimalism**. The core objective is to retreat into the background, allowing the visual content to take center stage. It targets professional photographers, architects, and designers who require a digital portfolio that feels like a physical high-end gallery.

The aesthetic is characterized by expansive white space, a disciplined avoidance of unnecessary decoration, and a focus on structural alignment. While the primary interface is light and airy to evoke a sense of clarity and professionalism, the system employs a "Sophisticated Dark" mode specifically for media consumption, ensuring the images are viewed without chromatic interference. Micro-interactions are designed to be "liquid"—smooth, intentional transitions that provide tactile feedback without distracting the user.

## Colors

The color palette is strictly neutral to ensure it never competes with the images being displayed. 

- **Primary & Neutrals:** We use a monochromatic scale based on Zinc grays. The background is pure white (#FFFFFF) to maximize "breathability." Text and primary icons use Zinc-900 (#18181B) for high legibility and a premium feel.
- **Accent:** A sophisticated Indigo (#6366F1) is used sparingly. It is reserved exclusively for interactive states—such as button backgrounds, active navigation markers, and focus rings.
- **The Lightbox:** When media is expanded, the system shifts to a deep-space black (#09090B). This "Sophisticated Dark" mode minimizes eye strain and increases the perceived contrast and vibrancy of the photographs.

## Typography

This design system utilizes **Manrope** for all levels of hierarchy. Manrope was selected for its modern, geometric construction and its excellent legibility at both large display sizes and small caption sizes.

- **Headlines:** Use tighter letter spacing and heavier weights to create a sense of authority and structure.
- **Body Text:** Set with generous line height (1.6) to ensure long-form descriptions or artist statements remain highly readable.
- **Labels:** Small labels and metadata (e.g., ISO settings, camera gear) utilize uppercase styling and increased letter spacing to differentiate technical data from narrative content.
- **Mobile Scaling:** On devices below 768px, `display-lg` should scale down to 32px to maintain visual balance and prevent awkward text wrapping.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid** model. The main content is centered within a 1440px max-width container, while the gallery itself utilizes a fluid masonry or justified grid that adapts to the viewport.

- **Rhythm:** All spacing is derived from an 8px base unit. 
- **The Gallery Grid:** Images are separated by a consistent 16px gap (`gallery-gap`). On desktop, page margins are a spacious 64px to create the "white space" luxury feel requested.
- **Breakpoints:**
  - **Desktop (1024px+):** 12-column grid, 64px margins.
  - **Tablet (768px - 1023px):** 8-column grid, 32px margins.
  - **Mobile (<767px):** 4-column grid, 16px margins.

## Elevation & Depth

This design system prioritizes flatness and structural integrity over faux-depth. 

- **Tonal Layers:** In the light theme, different container tiers are separated by subtle gray fills (Zinc-50) or 1px borders (Zinc-200) rather than shadows. 
- **Lightbox Elevation:** When the lightbox is active, the image is placed on the highest elevation layer. A 40% blur is applied to the background layer to pull all focus to the media.
- **Interactions:** Subtle "Lift" shadows (8% opacity, 12px blur) are used only during hover states on gallery cards to indicate interactivity without cluttering the static view.

## Shapes

The shape language is **Soft and Architectural**. We use a 0.25rem (4px) base radius for standard UI elements. 

- **Gallery Items:** Images should have a consistent 4px corner radius to soften the grid without making it appear "bubbly."
- **Buttons and Inputs:** These follow the base roundedness. 
- **Large Components:** Modular elements like the lightbox container or large modal overlays use `rounded-lg` (8px) to provide a more refined, modern finish.

## Components

### Buttons
Buttons are clean and high-contrast. The primary action button uses the Accent color (#6366F1) with white text. Secondary buttons use a Zinc-100 background with Zinc-900 text. Hover states involve a subtle brightness shift (10% darker) and a 150ms ease-in-out transition.

### Gallery Cards
The core component. It consists of the image, a subtle 1px border for very light images, and a hidden-until-hover overlay. The overlay should be a light 10% black tint with the image title and category appearing at the bottom-left in white Manrope labels.

### Chips (Filters)
Used for categorizing images (e.g., "Architecture," "Portrait"). Chips are pill-shaped with a Zinc-100 background and no border. When active, they transition to the Accent color.

### Lightbox Controls
Navigation arrows (Left/Right) and the Close (X) button are rendered in semi-transparent Zinc-800 circles with white icons. They should fade out after 3 seconds of mouse inactivity to provide an unobstructed viewing experience.

### Input Fields
Search bars and contact forms use a 1px Zinc-200 border. On focus, the border color shifts to the Accent color, and a very soft 2px Accent-colored outer glow is applied to signify activity.