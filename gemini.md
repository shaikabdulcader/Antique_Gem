ANTIQUE GEM — Typography Implementation Guide
1. Overview

This document defines the exact typography system that must be used across the ANTIQUE GEM website to match the approved Figma design.

No deviations in font size, weight, spacing, or line-height are permitted unless approved.

2. Font Imports
2.1 Good Times (Primary Brand Font)

This is a custom font and must be self-hosted.

Folder Structure
public/
 └── fonts/
      └── good-times.woff2

CSS Import (Add to src/input.css or global CSS)
@font-face {
  font-family: 'Good Times';
  src: url('/fonts/good-times.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}


⚠️ Important:

Font file must be placed inside the public/fonts directory.

The path /fonts/good-times.woff2 assumes public root access.

Do NOT rename the font-family.

2.2 Montserrat (Secondary Font)

Import from Google Fonts.

Add to <head>:
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="stylesheet">


Or via CSS:

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');

3. Typography System
3.1 Navbar Brand (ANTIQUE GEM)

Used for:

Website Logo Text (Navbar)

Specifications:

Font Family: Good Times

Font Weight: 400

Font Size: 60px

Line Height: 85px

Letter Spacing: 5% (converted to 0.05em)

Text Transform: Uppercase (if used in Figma)

CSS Implementation
.navbar-brand {
  font-family: 'Good Times', sans-serif;
  font-weight: 400;
  font-size: 60px;
  line-height: 85px;
  letter-spacing: 0.05em;
}

3.2 Navbar Menu Items

Used for:

Home

About

Contact

Specifications:

Font Family: Montserrat

Font Weight: 400

Font Size: 22.69px

Line Height: 22px

Letter Spacing: 0%

CSS Implementation
.navbar-item {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 22.69px;
  line-height: 22px;
  letter-spacing: 0;
}

3.3 Hero Section Heading

Used for:

"THERE'S ONE FOR EVERYONE"

Specifications:

Font Family: Good Times

Font Weight: 400

Font Size: 60px (Confirm if different in Figma)

Line Height: 85px

Letter Spacing: 0.05em

CSS Implementation
.hero-heading {
  font-family: 'Good Times', sans-serif;
  font-weight: 400;
  font-size: 60px;
  line-height: 85px;
  letter-spacing: 0.05em;
}

3.4 Section Title (OUR PRODUCTS)

Used for:

Section headings

Specifications:

Font Family: Good Times

Font Weight: 400

Letter Spacing: 0.05em

CSS Implementation
.section-title {
  font-family: 'Good Times', sans-serif;
  font-weight: 400;
  letter-spacing: 0.05em;
}

3.5 Product Names

Used for:

Blue Sapphire

Ruby

Tsavorite

etc.

Specifications:

Font Family: Montserrat

Font Weight: 400

Letter Spacing: 0%

CSS Implementation
.product-name {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  letter-spacing: 0;
}

3.6 Buttons

Used for:

Get Started

See More

Specifications:

Font Family: Montserrat

Font Weight: 600 (if bold in Figma)

Letter Spacing: 0%

CSS Implementation
.primary-button {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}

4. Tailwind Configuration (If Using Tailwind)

Add to tailwind.config.js:

theme: {
  extend: {
    fontFamily: {
      brand: ["'Good Times'", "sans-serif"],
      body: ["Montserrat", "sans-serif"],
    },
    fontSize: {
      navHeading: ["60px", { lineHeight: "85px", letterSpacing: "0.05em" }],
      navItem: ["22.69px", { lineHeight: "22px" }],
    }
  }
}

5. Typography Rules

Good Times must only be used for:

Logo

Major Headings

Section Titles

Montserrat must be used for:

Navigation Items

Body Text

Product Names

Buttons

Footer Text

No font substitutions allowed.

No rounding of decimal font sizes.

Letter-spacing must follow Figma specifications.

6. Verification Checklist

After implementation:

Inspect logo in DevTools → Confirm font-family is "Good Times"

Confirm font-size = 60px

Confirm letter-spacing = 0.05em

Confirm navbar items = 22.69px

Confirm Montserrat loads properly

If any fallback font appears → font import is incorrect.

End of Typography Specification Document.