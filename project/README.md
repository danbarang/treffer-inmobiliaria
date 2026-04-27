# Treffer Inmobiliaria — Design System

## Company Overview

**Corredora Treffer** is a Chilean real estate brokerage specializing in the **sale and rental of properties** through digital-first promotion: high-resolution photography, professional video production, and *home staging* (positioning each property at its best). Their value proposition to owners is "buenos ingresos sin preocupaciones" — strong returns without headaches.

The brand sits at the intersection of **professionalism and warmth**: a real estate expert with a human touch. Not a cold corporate entity, not an informal agency — a trustworthy, modern property partner.

### Products / Surfaces
1. **Marketing Website** — Primary digital presence. Lists properties for sale/rent; showcases photography and video; captures leads from owners and renters.
2. **Property Listing Detail** — Full-page property view with photo gallery, pricing, features, agent contact, and inquiry form.
3. **Social Media / Digital Ads** — Instagram/Facebook-first visuals for property promotion.

### Sources Provided
- `uploads/Treffer.png` — Primary brand logo (PNG, 673×280px with transparency)

---

## Content Fundamentals

**Language:** Spanish (Chilean market). Copy is warm, professional and action-oriented.

**Tone:** Trustworthy, aspirational, and clear. Never salesy or hyperbolic. The brand speaks like a knowledgeable friend who happens to be an expert in real estate.

**Voice principles:**
- **Direct address:** "Tu propiedad" / "Tu próximo hogar" — uses "tú" (informal you), which is warmer and more personal than "usted".
- **Benefit-first:** Lead with the owner/buyer benefit, not the feature. "Arrienda sin preocupaciones" not "Ofrecemos gestión integral".
- **Confident but humble:** State capabilities clearly ("Garantizamos buenos ingresos") without overstatement.
- **No emoji** in formal web contexts. Occasional use allowed in social media posts.

**Copy examples:**
- Headlines: "Saca lo mejor de tu inmueble", "Vive donde siempre soñaste", "Tu propiedad, sin preocupaciones"
- CTAs: "Ver propiedades", "Contactar agente", "Solicitar tasación", "Publicar mi propiedad"
- Subheads: "Propiedades en arriendo", "En venta", "Home staging profesional"
- Tagline: *Inmobiliaria* (appears beneath TREFFER wordmark)

**Casing:** Title case for navigation items; sentence case for all body copy and CTAs.

---

## Visual Foundations

### Color
The palette centers on a **warm cream canvas + deep teal primary + charcoal ink** triad — projecting solidity and warmth rather than the cold white + blue palette of most real estate portals.

- **Primary Teal** (`--color-primary`: `#2B6F72`): The brand's signature voltage. Used for CTAs, active states, the key glyph in the logo, and the "Inmobiliaria" banner. A refined, trustworthy teal — not electric, not corporate.
- **Cream Canvas** (`--color-canvas`: `#EAE6D9`): The warm page floor. Replaces pure white. Gives the brand a sense of craft and quality over mass-market digital.
- **Charcoal Ink** (`--color-ink`: `#333333`): Headlines and body text. Never pure black.
- **Teal Dark** (`--color-primary-dark`: `#1E5255`): Hover/press state for teal elements.

### Typography
- **Raleway** (Google Fonts, weights 600/700/800): Geometric sans-serif for all display headings and the brand wordmark. Close match to the TREFFER logotype.
- **Cormorant Garamond** (Google Fonts, weights 400/500/600): Elegant serif for callout text, the "Inmobiliaria" logotype style, and editorial accent moments.
- **Inter** (Google Fonts, weights 400/500/600): Clean neutral sans for body copy, form labels, metadata, and UI chrome.

> ⚠️ **Font note:** The exact typeface in the TREFFER wordmark is not identified. Raleway ExtraBold is the closest open-source match for the display sans. The serif "Inmobiliaria" appears similar to Cormorant Garamond — please supply original font files to achieve pixel-perfect fidelity.

### Backgrounds
- Primary surface: warm cream `#EAE6D9`
- Card surfaces: white `#FFFFFF` over the cream floor — property cards lift off the cream background
- Teal band: used for footers, section headers, and the logo banner
- **Photography is central**: hero images are full-bleed; property cards are photo-first

### Shape Language
- Softly rounded: 8px for buttons and inputs, 12px for cards, 4px for tags/badges
- No pill shapes (unlike Airbnb) — Treffer uses more measured, architectural radii reflecting real property
- No hard corners except grid layouts

### Elevation
One shadow tier: `0 2px 8px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)` — used on property cards and modals. The rest is flat.

### Hover & Press States
- Buttons: darken background by ~10% (`--color-primary-dark`)
- Cards: subtle upward shadow lift (`translateY(-2px)` + heavier shadow)
- Links: underline appears on hover; no color change
- No opacity tricks — always use color transitions

### Animation
- Gentle, fast fades (150–200ms ease-out) for UI chrome (nav dropdowns, modals)
- Property card hover: 200ms ease transform + shadow
- No bounces or spring animations — the brand is composed, not playful

### Imagery
- **Warm, golden-hour tones** preferred for interiors. Natural light over flash.
- Exteriors: architecture-forward framing, good sky exposure
- No stock-photo people — focus on spaces, not characters
- Color grade: slightly warm, +10 saturation, never cold or desaturated

### Iconography
Treffer does not ship its own icon font. The brand uses **simple stroke icons** (1.5px line weight). Recommended CDN library: **Lucide Icons** (closest match to the brand's refined, architectural line style).

---

## VISUAL FOUNDATIONS: Quick Reference

| Property | Value |
|---|---|
| Primary | `#2B6F72` |
| Primary dark | `#1E5255` |
| Canvas | `#EAE6D9` |
| Ink | `#333333` |
| Muted | `#6B6B6B` |
| Hairline | `#D5D0C4` |
| Card surface | `#FFFFFF` |
| Button radius | `8px` |
| Card radius | `12px` |
| Display font | Raleway 700/800 |
| Accent serif | Cormorant Garamond |
| Body font | Inter |
| Base unit | 4px |
| Section gap | 80px |

---

## Iconography

**Approach:** Lucide Icons (CDN) — geometric, clean, 1.5px stroke weight. Matches the architectural, precise feel of the brand.

**CDN:** `https://unpkg.com/lucide@latest/dist/umd/lucide.min.js`

Commonly used icons:
- `home` — property type, homepage link
- `key` — brand symbol, access/unlock CTAs
- `map-pin` — location
- `camera` — photography/video services
- `phone` — agent contact
- `search` — property search
- `heart` — save/wishlist property
- `star` — ratings
- `bed` / `bath` / `maximize` — property attributes
- `arrow-right` — CTA continuation

No custom icon font. No PNG icons. No emoji in web UI.

---

## File Index

| File | Description |
|---|---|
| `README.md` | This file — brand overview, content/visual foundations |
| `colors_and_type.css` | CSS custom properties for all color + typography tokens |
| `assets/Treffer-logo.png` | Primary brand logo (PNG, transparent) |
| `preview/colors-brand.html` | Brand color swatches |
| `preview/colors-surface.html` | Surface + border color tokens |
| `preview/colors-semantic.html` | Semantic/state color tokens |
| `preview/type-display.html` | Display typography specimens |
| `preview/type-body.html` | Body + UI typography specimens |
| `preview/spacing-tokens.html` | Spacing scale tokens |
| `preview/radii-shadows.html` | Border radius + elevation tokens |
| `preview/buttons.html` | Button component states |
| `preview/inputs.html` | Form input components |
| `preview/property-card.html` | Property card component |
| `preview/badges-tags.html` | Badges and tag components |
| `preview/logo-brand.html` | Logo display + brand mark |
| `ui_kits/website/index.html` | Treffer website UI kit — main entry |
| `SKILL.md` | Agent skill descriptor |
