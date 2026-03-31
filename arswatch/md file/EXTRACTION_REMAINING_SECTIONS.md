# REMAINING SECTIONS EXTRACTION GUIDE

## Built For Movement Section (Lines 1742-1933)

### Key Features

- Two-column layout: left text + right 3D model
- AnimatedSection wrapper with fadeInLeft/fadeInRight
- model-viewer element for 3D smartwatch display
- Floating stat boxes overlaid on model
- Radial gradient glow effect background

### Colors Used

- olive, gold, white, ink, midGray, goldLight

### CSS Classes

- `.teko` (heading)

### Responsive Breakpoints

- 768px: Stack to single column, text center
- Model viewer: 300px (mobile) → 320px (tablet) → 350px (desktop) → 400px (1024px+)

### Critical Dependencies

- AnimatedSection component
- model-viewer web component (must be loaded in HTML)
- Heart Rate and Sprint Speed stat displays

### External Assets

- 3D Model: `/smartwatch.glb`

### Extraction Tips

1. Wrap entire section in React.memo for performance
2. Consider lazy loading the 3D model
3. Move stat data to separate constants
4. Ensure model-viewer styling is preserved

---

## Features Section (Lines 1989-2256)

### Key Features

- 10 feature cards in 5-column grid
- Alternating olive/gold colored icons
- Animated with staggered fadeInUp
- Gradient background with accent overlays
- Icon circles with colored backgrounds

### Colors Used

- All colors (full palette)
- Card borders: color + "25" opacity

### CSS Classes

- `.teko` (heading)
- `.ch` (card hover)
- `.feat-grid` (responsive grid)

### Card Data Structure

```javascript
[
  { label: "...", c: olive/gold, icon: <SVG> },
  // ... 10 total
]
```

### Responsive Breakpoints

- 1024px+: 5 columns
- 900px-1024px: 4 columns
- 768px: 3 columns
- 480px: 2 columns

### Animation Details

- Staggered delay: idx \* 0.15s
- Transition duration: 1.2s
- Trigger: fadeInUp on scroll

### Extraction Tips

1. Extract card data to separate file
2. Create reusable FeatureCard component
3. Use CSS Grid for layout (already done)
4. Test responsive grid at all breakpoints

---

## Team Deployment / Bento Grid Section (Lines 2311-2983)

### Key Features

- Asymmetric bento grid layout
- 5 cards with background images
- Overlaid stats (heart rate waveform, SpO₂ gauge, etc.)
- Tag badges with hover effects
- Live pulse animation
- Top and bottom dotted dividers
- Dark background (#0d1117)

### Colors Used

- #0d1117 (dark bg)
- white, gold, olive
- #00e85a (neon green for live indicator)
- Extensive use of rgba overlays

### CSS Classes

- `.bento-grid`
- `.bento-card`
- `.bento-label`
- `.bento-tag`

### Grid Layout

```css
Desktop (900px+):
- grid-template-columns: 1.15fr 1fr
- grid-template-rows: auto auto auto
- .bento-card-tall: grid-row: span 2
- .bento-card-wide: grid-column: span 2

Tablet (560px-899px):
- grid-template-columns: 1fr 1fr
- .bento-card-tall: single row
- .bento-card-wide: span 2

Mobile (<560px):
- grid-template-columns: 1fr
- All cards: single column
```

### Card Components

1. **Heart Rate** (tall, left)
   - Live pulse indicator with waveform
   - PPG Sensor tag
   - Green glow effect

2. **SpO₂** (top right)
   - SVG circular gauge
   - Optical Sensor tag
   - 97% display

3. **Multi-Sport** (mid right)
   - Sport icons row
   - 100+ Sport Modes tag

4. **Battery** (wide, bottom)
   - Battery visualization

5. **Watch & App** (wide, bottom)
   - Watch → Cloud → App flow diagram
   - Companion App tag

### Animations

- Hover: translateY(-8px) + shadow
- Tag hover: scale(1.05) + color change
- Live pulse: opacity 0.2 → 1 (0.9s loop)
- Scan effect: top -30% → 130% (3.5s)

### Extraction Challenges

- Complex CSS Grid with asymmetric layout
- Multiple overlay types and depths
- SVG animations and custom graphics
- Responsive grid layout changes
- Many style combinations

### Extraction Tips

1. Extract bento card component
2. Create separate card type components
3. Move CSS to CSS modules
4. Test grid at all breakpoints thoroughly
5. Consider performance of animations
6. Extract SVG diagrams to separate components

### Assets Required

- Background images from Unsplash (6 images)
- All URLs in backgroundImage properties

---

## Specifications Section (Lines 3021-3147)

### Key Features

- Data table with grouped rows
- 4 specification groups (Hardware, Connectivity, Performance, Physical)
- Color-coded header rows
- Alternating row backgrounds
- Responsive table layout

### Colors Used

- olive, oliveDark, ink, white, offWhite, midGray

### CSS Classes

- `.teko` (headers)
- `.spec-row` (row styling)
- `.spec-label` (label column)

### Data Structure

```javascript
[
  {
    heading: "Hardware",
    rows: [
      ["PPG Sensor", "Heart Rate + SpO₂ (optical)"],
      // ... more rows
    ],
  },
  // ... 3 more groups
];
```

### Responsive Behavior

- Flex layout ensures proper alignment
- Labels take 30% width (clamp 120px-200px)
- Values take remaining space
- Table scrolls horizontally on small screens

### Extraction Tips

1. Move spec data to separate file
2. Create SpecificationTable component
3. Consider making specs editable (future enhancement)
4. Add filtering/search (future enhancement)

---

## FAQs Section (Lines 3149-3197)

### Key Features

- Uses imported FAQ component
- 6 pre-defined Q&A pairs
- Expandable/collapsible items
- Centered layout with max-width

### Colors Used

- offWhite (background)
- ink (heading)
- olive (accent word in heading)
- midGray (body text)

### CSS Classes

- `.teko` (heading)

### FAQ Items Data

```javascript
[
  ["Question 1", "Answer text"],
  // ... 6 total pairs
];
```

### FAQ Component Props

```javascript
<FAQ q={question} a={answer} key={index} />
```

### Extraction Tips

1. Extract FAQ data to separate file
2. FAQ component is already separate (check ui/)
3. Consider dynamic FAQ loading
4. Add search/filter functionality
5. Add category tags to FAQs

---

## Overview Section (Lines 2258-2307)

### Key Features

- Title and description
- Dashed border container
- Architecture image placeholder
- AnimatedSection wrapper

### Colors Used

- white (background)
- ink (heading)
- midGray (description)
- offWhite (container bg)
- olive (border color)

### CSS Classes

- `.teko` (heading)

### Image Details

- Source: `/architecture.png`
- Responsive sizing
- Border radius 12px

### Extraction Tips

1. Very simple section to extract
2. Consider making image dynamic
3. Add alt text to image
4. Consider lazy loading image

---

## Built For Movement - Responsive Styles

The entire landing page uses complex responsive styles. Here are key breakpoints to test:

```javascript
// 480px breakpoint
- Hero min-height: clamp(450px, 80vh, 700px)
- Feature grid: 2 columns
- Model viewer: 300px height

// 768px breakpoint
- Hidden mobile classes toggle
- Feature grid: 3 columns
- Model viewer: 320px height
- Tab navigation becomes sticky below navbar

// 900px breakpoint
- Feature grid: 4 columns
- Bento grid: 2 column asymmetric

// 1024px breakpoint
- Feature grid: 5 columns
- Model viewer: 400px height
```

---

## Styling Pattern Reference

### Card Styling Pattern (Used throughout)

```javascript
{
  background: white,
  borderRadius: 14,
  padding: "28px 16px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 14,
  boxShadow: "0 2px 12px rgba(0,0,0,.06)",
  border: `1.5px solid ${color}25`,
  minHeight: 170,
  height: "100%",
}
```

### Button Styling Pattern

```javascript
{
  background: color,
  color: white,
  border: "none",
  padding: "13px 28px", // or custom
  fontSize: 11,
  fontWeight: 800,
  fontFamily: "'Barlow Condensed', sans-serif",
  textTransform: "uppercase",
  letterSpacing: ".14em",
  cursor: "pointer",
  transition: "all .3s ease",
}
```

### Heading Styling Pattern

```javascript
{
  fontFamily: "'Teko', sans-serif",
  fontWeight: 700,
  fontSize: "clamp(2rem, 5vw, 4rem)",
  textTransform: "uppercase",
  lineHeight: 0.95,
  color: ink,
}
```

### Section Container Pattern

```javascript
{
  maxWidth: 1280, // or 1100, 960, 800, 860
  margin: "0 auto",
  padding: "80px 24px", // or custom
}
```

---

## Common Mistakes to Avoid During Extraction

1. ❌ Hardcoding values that should be constants/props
2. ❌ Using inline styles when CSS classes exist
3. ❌ Not testing responsive breakpoints
4. ❌ Breaking hover/active states
5. ❌ Losing z-index stacking context
6. ❌ Not preserving animation timings
7. ❌ Changing color values during refactoring
8. ❌ Not preserving scroll behavior
9. ❌ Breaking link functionality
10. ❌ Losing form state handling

---

## Validation Checklist for Each Extracted Section

- [ ] All JSX renders without errors
- [ ] All colors display correctly
- [ ] All fonts display correctly
- [ ] All animations work as expected
- [ ] Responsive breakpoints work (480px, 768px, 1024px)
- [ ] Interactive elements respond to user input
- [ ] Links navigate correctly
- [ ] Images/videos load properly
- [ ] Forms submit correctly
- [ ] State updates propagate correctly
- [ ] No console errors or warnings
- [ ] Performance is acceptable
- [ ] Accessibility standards met
- [ ] Documentation is complete

---

## Section Interdependencies

```
Navbar
├── Depends on: onNavBlog callback
└── Used by: All pages (global)

Hero → Tab Bar → Features, Overview, Specifications, FAQs
├── Hero: Independent
├── Tab Bar: Controls 4 sections below
├── Features: Shown when activeTab === "Features"
├── Overview: Shown when activeTab === "Overview"
├── Specs: Shown when activeTab === "Specifications"
└── FAQs: Shown when activeTab === "FAQs"

Built For Movement
└── Independent section

Team Deployment (Bento)
└── Independent section

Contact Form
├── Depends on: form state, upd function, submit function
└── Shows: submitted state message

Footer
└── Independent section
```

---

## Import Statement Templates

```javascript
// For color constants
import { olive, gold, ink /* ... */ } from "../constants/colors";

// For hooks
import { useScrollAnimation } from "../hooks/useScrollAnimation";

// For UI components
import AnimatedSection from "../ui/AnimatedSection";
import Counter from "../ui/Counter";
import Tag from "../ui/Tag";
import FAQ from "../ui/FAQ";

// For sections
import NavbarSection from "./sections/NavbarSection";
import HeroSection from "./sections/HeroSection";
// ... etc
```

---

## CSS Module Template

```css
/* SectionName.module.css */

.container {
  maxwidth: 1280px;
  margin: 0 auto;
  padding: 80px 24px;
  background: white;
}

.heading {
  fontfamily: "Teko", sans-serif;
  fontsize: clamp(2rem, 5vw, 4rem);
  fontweight: 700;
  texttransform: uppercase;
  color: #111408;
}

/* ... responsive styles ... */

@media (max-width: 768px) {
  .container {
    padding: 50px 16px;
  }

  .heading {
    fontsize: 2rem;
  }
}
```

---

## Testing Template for Sections

```javascript
// SectionName.test.jsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SectionName from "./SectionName";

describe("SectionName", () => {
  it("renders correctly", () => {
    render(<SectionName />);
    // Add assertions
  });

  it("handles responsive behavior", () => {
    // Test at different viewport sizes
  });

  it("displays all content", () => {
    // Check for key elements
  });

  it("handles user interactions", () => {
    // Test buttons, links, forms
  });
});
```

---

## Performance Optimization Checklist

- [ ] Remove unused CSS classes
- [ ] Use CSS Grid/Flexbox efficiently
- [ ] Lazy load large images
- [ ] Optimize animation performance
- [ ] Use React.memo for static components
- [ ] Implement code splitting for sections
- [ ] Move inline styles to CSS modules
- [ ] Use CSS variables for colors
- [ ] Minimize repaints/reflows
- [ ] Test with Lighthouse
- [ ] Check bundle size impact

---

This guide covers all the remaining sections. Use it alongside the main extraction guide and individual section extraction files for complete coverage of the refactoring project.
