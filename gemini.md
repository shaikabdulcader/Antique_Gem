# ANTIQUE GEM – DESIGN SYSTEM SPECIFICATION

**Version:** 1.0
**Purpose:** Ensure 100% visual consistency between Figma design and production website (AntiGravity build)

---

# 1. Brand Overview

Antique Gem follows a **premium luxury gemstone aesthetic** built on:

* Deep burgundy primary tones
* Cinematic desert imagery
* Soft rounded UI elements
* Wide futuristic headings
* Clean modern sans-serif body typography
* High contrast light/dark section alternation

Design personality:

* Premium
* Elegant
* Trustworthy
* Modern luxury
* International quality

---

# 2. Typography System

## 2.1 Font Families

### Primary Body Font

Geometric Sans-Serif

Recommended match:

* `Poppins`
* or `Montserrat`
* or `Outfit`

Usage:

* Paragraph text
* Navigation links
* Product names
* Contact info
* Buttons
* Footer text

---

### Display / Heading Font

Wide futuristic uppercase font.

Recommended match:

* `Orbitron`
* or `Eurostile`
* or `Michroma`
* or similar wide geometric display font

Usage:

* Hero headline
* Section headings (OUR MISSION, OUR PRODUCTS, etc.)

---

# 3. Typography Scale

## 3.1 Hero Display Heading

Desktop:

* Font Size: 56–64px
* Font Weight: 600
* Letter Spacing: 2–3px
* Text Transform: Uppercase
* Color: #FFFFFF
* Line Height: 110–120%

Mobile:

* Font Size: 32–40px
* Letter Spacing: 1.5–2px

---

## 3.2 Section Headings

Example:

* OUR MISSION

* OUR PRODUCTS

* WE ARE HERE TO HELP

* Font Size: 28–32px

* Font Weight: 600

* Letter Spacing: 1.5px

* Text Transform: Uppercase

* Color: #7A0A0A

* Line Height: 120%

---

## 3.3 Hero Paragraph Text

* Font Size: 20–22px
* Font Weight: 400
* Line Height: 160–170%
* Letter Spacing: 0.3px
* Color: #FFFFFF
* Text Align: Center

---

## 3.4 Section Paragraph Text

* Font Size: 16–18px
* Font Weight: 400
* Line Height: 160%
* Letter Spacing: 0.2px
* Color: #2E2E2E
* Text Align: Left or Center (depending on section)

---

## 3.5 Navigation Links

* Font Size: 16px
* Font Weight: 500
* Letter Spacing: 0.5px
* Color: #FFFFFF

---

## 3.6 Product Names

* Font Size: 16px
* Font Weight: 500
* Color: #444444
* Margin Top: 12px

---

## 3.7 Footer Text

* Font Size: 14px
* Font Weight: 400
* Line Height: 150%
* Color: #E6E6E6

---

# 4. Color System

## 4.1 Primary Brand Color

Deep Luxury Burgundy

```
#7A0A0A
```

Usage:

* Footer background
* Feature strip
* Buttons
* Section heading accents

---

## 4.2 Hero Overlay Tint

Dark red transparent overlay

```
rgba(122, 10, 10, 0.85)
```

Used over hero images.

---

## 4.3 Light Section Background

```
#E9E9E9
```

Used in:

* OUR PRODUCTS section
* ABOUT / MISSION sections

---

## 4.4 Text Colors

Primary Dark Text:

```
#2E2E2E
```

Secondary Dark:

```
#444444
```

White:

```
#FFFFFF
```

Footer Text:

```
#E6E6E6
```

---

# 5. Button Styles

## 5.1 Primary Button (See More)

* Background: #7A0A0A
* Text Color: #FFFFFF
* Border Radius: 30px
* Padding: 12px 28px
* Font Size: 16px
* Font Weight: 500
* Border: None
* Hover: Slight darken (#5C0606)

---

## 5.2 Hero Ghost Button (Get Started)

* Background: rgba(255,255,255,0.15)
* Border: 1px solid #FFFFFF
* Text Color: #FFFFFF
* Border Radius: 30px
* Padding: 12px 28px
* Backdrop Blur: Optional
* Hover: Slight white opacity increase

---

# 6. Navigation Bar

* Background: rgba(255,255,255,0.15)
* Backdrop Filter: blur(8px–12px)
* Border Radius: 40px
* Padding: 16px 32px
* Layout: Logo left, Links right
* Mobile: Hamburger icon

---

# 7. Card & Product Grid System

## Product Card

* Border Radius: 20px
* Image Border Radius: 20px
* Shadow: Soft shadow

  ```
  0px 8px 20px rgba(0,0,0,0.08)
  ```
* Gap Between Cards: 32px (desktop)
* Mobile: 2-column layout

---

# 8. Spacing System

Spacing scale used consistently:

* 8px → micro spacing
* 16px → small spacing
* 24px → medium spacing
* 32px → internal section spacing
* 64px → section gap (desktop)
* 100–120px → hero vertical spacing

---

# 9. Layout Structure

## Hero Section

* Full-width background image
* Dark red overlay
* Centered text
* Large heading
* Supporting paragraph
* CTA button

---

## Feature Strip

Dark burgundy background
Icons + text
Equal spacing
White icons

---

## Light Content Sections

Background: #E9E9E9
Dark heading
Left-aligned paragraphs

---

## Footer

Background: #7A0A0A
3-column layout (desktop)
Stacked layout (mobile)
Thin divider line above copyright

---

# 10. Border Radius System

* Buttons: 30px (pill style)
* Navbar: 40px
* Product cards: 20px
* Images: 20px

Rounded UI is consistent across entire website.

---

# 11. Shadow Style

Soft subtle shadow only (not heavy)

Recommended:

```
box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.08);
```

---

# 12. Responsive Behavior

Desktop:

* 4-column product grid
* Full navigation visible

Tablet:

* 2–3 column grid

Mobile:

* 2-column product grid
* Hamburger menu
* Reduced heading size
* Center-aligned content

---

# 13. CSS Variables Reference

```css
:root {
  --color-primary: #7A0A0A;
  --color-light-bg: #E9E9E9;
  --color-text-dark: #2E2E2E;
  --color-white: #FFFFFF;
  --color-footer-text: #E6E6E6;

  --font-body: 'Poppins', sans-serif;
  --font-display: 'Orbitron', sans-serif;

  --radius-button: 30px;
  --radius-card: 20px;
  --radius-navbar: 40px;

  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 24px;
  --spacing-lg: 32px;
  --spacing-xl: 64px;
}
```

---

# 14. Implementation Requirement for AntiGravity

To match Figma exactly:

1. Ensure correct font import (Google Fonts or custom upload).
2. Apply exact hex codes (no approximate reds).
3. Maintain uppercase + letter spacing in headings.
4. Preserve border radius values.
5. Maintain hero overlay tint.
6. Use consistent spacing scale.
7. Ensure buttons remain pill-shaped.
8. Do not substitute font weights.

---

# Final Note

This document defines the **visual identity contract** between Figma and the production site.

Any deviation in:

* Font family
* Letter spacing
* Heading weight
* Primary red tone
* Border radius

will break brand consistency.

