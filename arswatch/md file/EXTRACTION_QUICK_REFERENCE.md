# EXTRACTION SUMMARY & QUICK REFERENCE GUIDE

## All Sections Overview

| #   | Section            | Lines     | Type               | Self-Contained | Priority |
| --- | ------------------ | --------- | ------------------ | -------------- | -------- |
| 1   | Navbar             | 1242-1456 | Navigation         | Yes            | HIGH     |
| 2   | Hero               | 1457-1741 | Full-width section | Mostly         | HIGH     |
| 3   | Built For Movement | 1742-1933 | Two-column + 3D    | Mostly         | HIGH     |
| 4   | Tab Bar            | 1935-1987 | Navigation tabs    | Yes            | HIGH     |
| 5   | Features           | 1989-2256 | Feature cards grid | Yes            | MEDIUM   |
| 6   | Overview           | 2258-2307 | Content section    | Yes            | LOW      |
| 7   | Vitals             | 2309      | External component | N/A            | LOW      |
| 8   | Team Deployment    | 2311-2983 | Bento grid         | Mostly         | MEDIUM   |
| 9   | Specifications     | 3021-3147 | Data table         | Yes            | MEDIUM   |
| 10  | FAQs               | 3149-3197 | Accordion list     | Yes            | MEDIUM   |
| 11  | Contact Form       | 3199-3450 | Form               | Mostly         | HIGH     |
| 12  | Footer             | 3452-3603 | Footer             | Yes            | HIGH     |

---

## Extraction Difficulty Scale

### Easiest (1-2 hours each)

- **Navbar** - Self-contained, minimal dependencies
- **Tab Bar** - Requires one state variable
- **Footer** - Completely static
- **FAQs** - Uses imported FAQ component
- **Features** - Self-contained grid

### Moderate (2-4 hours each)

- **Hero** - Multiple components and dependencies
- **Built For Movement** - Complex positioning, 3D model
- **Specifications** - Data-heavy but static
- **Overview** - Basic structure, few dependencies
- **Contact Form** - Form state management, validation

### Complex (4+ hours)

- **Team Deployment** - Complex Bento grid, many styles
- **Vitals** - External component, needs investigation

---

## State Dependencies by Section

### Sections Requiring Lifted State

```javascript
// From parent (ARSLandingPage)
const [menuOpen, setMenuOpen] = useState(false);           // Navbar
const [activeTab, setActiveTab] = useState("Overview");     // Tab Bar
const [submitted, setSubmitted] = useState(false);          // Contact
const [form, setForm] = useState({...});                    // Contact
```

### Sections with No State Requirements

- Navbar (menu state passed down)
- Tab Bar (state passed down)
- Hero (uses Counter component)
- Built For Movement (static content)
- Features (static cards)
- Overview (static content)
- Specifications (static data)
- FAQs (static FAQ items)
- Footer (completely static)

---

## Component Dependencies Map

```
ARSLandingPage (Main)
├── Imports
│   ├── useState, useEffect, useRef from React
│   ├── FAQ component
│   └── VitalMonitoringShowcase component
│
├── Defines
│   ├── useScrollAnimation() hook
│   ├── Counter component
│   ├── FieldViz component
│   ├── AnimatedSection component
│   ├── Tag component
│   └── Color constants (12 colors)
│
└── Renders
    ├── Global <style> block
    ├── Navbar
    ├── Hero
    ├── Built For Movement
    ├── Tab Bar
    ├── Features Section
    ├── Overview Section
    ├── VitalMonitoringShowcase (import)
    ├── Team Deployment Section
    ├── Specifications Section
    ├── FAQs Section
    ├── Contact Section
    └── Footer
```

---

## Extraction Strategy

### Phase 1: Utilities (1-2 hours)

Extract to separate files:

- **constants/colors.js** - All 12 color variables
- **hooks/useScrollAnimation.js** - Scroll animation hook
- **components/ui/AnimatedSection.jsx** - Wrapper component
- **components/ui/Counter.jsx** - Counter component
- **components/ui/Tag.jsx** - Tag component
- **components/ui/FieldViz.jsx** - Field visualization

### Phase 2: Static Sections (2-3 hours)

Extract to separate components:

- **sections/NavbarSection.jsx** - Navbar with state props
- **sections/FooterSection.jsx** - Footer (completely static)
- **sections/FeaturesSection.jsx** - Feature cards
- **sections/OverviewSection.jsx** - Architecture overview
- **sections/SpecificationsSection.jsx** - Specs table
- **sections/FAQsSection.jsx** - FAQ list

### Phase 3: Complex Sections (4-6 hours)

Extract to separate components:

- **sections/HeroSection.jsx** - Hero with Counter/AnimatedSection
- **sections/BuiltForMovementSection.jsx** - 3D model section
- **sections/TabBarSection.jsx** - Tab navigation
- **sections/TeamDeploymentSection.jsx** - Bento grid

### Phase 4: Form & Integration (2-3 hours)

- **sections/ContactSection.jsx** - Contact form with state
- **sections/VitalsSection.jsx** - Wrapper for external component
- **ARSLandingPage.jsx** (refactor) - Main orchestrator

---

## File Structure After Extraction

```
arswatch/
├── src/
│   ├── components/
│   │   ├── ARSLandingPage.jsx (main, orchestrates all sections)
│   │   ├── sections/
│   │   │   ├── NavbarSection.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── BuiltForMovementSection.jsx
│   │   │   ├── TabBarSection.jsx
│   │   │   ├── FeaturesSection.jsx
│   │   │   ├── OverviewSection.jsx
│   │   │   ├── VitalsSection.jsx
│   │   │   ├── TeamDeploymentSection.jsx
│   │   │   ├── SpecificationsSection.jsx
│   │   │   ├── FAQsSection.jsx
│   │   │   ├── ContactSection.jsx
│   │   │   └── FooterSection.jsx
│   │   ├── ui/
│   │   │   ├── AnimatedSection.jsx
│   │   │   ├── Counter.jsx
│   │   │   ├── Tag.jsx
│   │   │   └── FieldViz.jsx
│   │   └── (existing components)
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   └── constants/
│       └── colors.js
└── (rest of project)
```

---

## Color Constants Extraction

```javascript
// constants/colors.js
export const olive = "#747c27";
export const oliveDark = "#3a4212";
export const oliveLight = "#9ca82d";
export const gold = "#c9a84c";
export const goldLight = "#e8c96a";
export const goldDark = "#9a7a28";
export const ink = "#111408";
export const inkMid = "#1e2108";
export const sand = "#e8ddd0";
export const offWhite = "#f7f6f1";
export const white = "#ffffff";
export const midGray = "#6b6b50";

// Alternative export
export const COLORS = {
  olive,
  oliveDark,
  oliveLight,
  gold,
  goldLight,
  goldDark,
  ink,
  inkMid,
  sand,
  offWhite,
  white,
  midGray,
};
```

---

## CSS Classes to Maintain

These global classes should remain in main styles:

```css
.bc {
  font-family: "Barlow Condensed", sans-serif !important;
}
.teko {
  font-family: "Teko", sans-serif !important;
}
.inp {
  /* Input styling */
}
.ch {
  /* Card hover effect */
}
.btn-w {
  /* White button */
}
.btn-o {
  /* Olive button */
}
.btn-s {
  /* Submit button */
}
.nl {
  /* Navigation link */
}
.fw {
  /* Float animation */
}
.scanl {
  /* Scan line effect */
}
.hidden-mobile {
  /* Responsive */
}
.show-mobile {
  /* Responsive */
}
.bento-grid {
  /* Grid layout */
}
.bento-card {
  /* Card styling */
}
.bento-label {
  /* Label overlay */
}
.bento-tag {
  /* Tag badges */
}
.feat-grid {
  /* Feature grid */
}
.spec-row {
  /* Spec table row */
}
.technology-model-wrap {
  /* 3D model */
}
.technology-model-viewer {
  /* 3D viewer */
}
```

---

## Props to Pass to Sections

```javascript
// Navbar
<NavbarSection
  menuOpen={menuOpen}
  setMenuOpen={setMenuOpen}
  onNavBlog={onNavBlog}
/>

// Tab Bar
<TabBarSection
  activeTab={activeTab}
  setActiveTab={setActiveTab}
/>

// Contact Form
<ContactSection
  form={form}
  setForm={setForm}
  submitted={submitted}
  setSubmitted={setSubmitted}
/>

// All Sections (for colors & constants)
// Import colors from constants/colors.js
```

---

## Global Styles to Keep in Main

```jsx
<style>{`
  @import url('https://fonts.googleapis.com/css2?...');

  *, *::before, *::after { box-sizing: border-box; ... }
  body { font-family: 'Barlow', sans-serif; }

  /* All CSS classes */
  .bc, .teko, .inp, .ch, .btn-*, .nl, etc.

  /* Keyframe animations */
  @keyframes float { ... }
  @keyframes lp { ... }
  @keyframes scan { ... }

  /* Global responsive breakpoints */
  @media(max-width: 480px) { ... }
  @media(max-width: 768px) { ... }
  @media(max-width: 900px) { ... }
  @media(min-width: 769px) { ... }

  /* Model viewer fixes */
  model-viewer.technology-model-viewer { ... }
  .technology-model-wrap { ... }

  /* Feature grid responsiveness */
  .feat-grid { ... }
`}</style>
```

---

## Quick Extraction Checklist

### For Each Section:

- [ ] Copy JSX code
- [ ] Identify state dependencies
- [ ] List color constants needed
- [ ] List component imports needed
- [ ] List CSS classes used
- [ ] Document responsive behavior
- [ ] Extract inline style objects
- [ ] Note any external assets (images, videos, models)
- [ ] Add PropTypes or TypeScript types
- [ ] Create storybook story if desired
- [ ] Add unit tests
- [ ] Update imports in main component

---

## Testing Strategy After Extraction

### Unit Tests Per Component

- Navbar: Render, toggle menu, click links
- Hero: Counter animation, CTA button
- Contact Form: Input handling, submission, reset
- Footer: Link rendering, hover effects
- Tab Bar: Tab switching, active state

### Integration Tests

- All sections render in correct order
- State flows correctly from parent
- Responsive behavior works at breakpoints
- Links navigate correctly
- Form submission works end-to-end

### Visual Regression Tests

- Snapshot tests for each section
- Responsive breakpoint screenshots
- Hover/active state screenshots

---

## Performance Optimization Tips

1. **Memoization**: Use `React.memo()` for static sections

   ```javascript
   export default React.memo(FooterSection);
   ```

2. **Code Splitting**: Lazy load heavy sections

   ```javascript
   const HeroSection = lazy(() => import("./HeroSection"));
   ```

3. **Image Optimization**:
   - Already has query params (w=800&q=80)
   - Consider Next.js Image component
   - Lazy load bento grid images

4. **CSS Optimization**:
   - Move inline styles to CSS modules
   - Use CSS variables for colors
   - Avoid style recalculations

5. **Animation Optimization**:
   - Use CSS animations instead of JS where possible
   - Consider removing animations on mobile
   - Use `will-change` sparingly

---

## Documentation Files Generated

1. **SECTION_EXTRACTION_GUIDE.md** - Complete reference
2. **EXTRACTION_01_NAVBAR.md** - Navbar details
3. **EXTRACTION_02_HERO.md** - Hero details
4. **EXTRACTION_03_CONTACT.md** - Contact form details
5. **EXTRACTION_04_TABBAR.md** - Tab bar details
6. **EXTRACTION_05_FOOTER.md** - Footer details
7. **EXTRACTION_QUICK_REFERENCE.md** - This file

---

## Next Steps

1. **Review** all extraction files
2. **Prioritize** sections by business need
3. **Create** utility files first (colors, hooks, components)
4. **Extract** easiest sections first (footer, navbar)
5. **Build** tests alongside extraction
6. **Document** props and usage for each component
7. **Integrate** sections back into main component
8. **Test** thoroughly at each phase

---

## Helpful Commands for Extraction

```bash
# Create new component file
touch src/components/sections/NameSection.jsx

# Create constants file
touch src/constants/colors.js

# Create hooks file
mkdir src/hooks
touch src/hooks/useScrollAnimation.js

# Create UI components directory
mkdir src/components/ui
touch src/components/ui/AnimatedSection.jsx

# Run tests
npm test

# Build and check bundle size
npm run build
npm run analyze
```

---

## Key Metrics for Success

✓ All sections extracted and working independently
✓ No duplicate code
✓ Clear prop interfaces
✓ Full test coverage
✓ Responsive at all breakpoints
✓ Performance maintained (< 3 sec first paint)
✓ Bundle size optimized
✓ Documentation complete

---

## Questions to Answer During Extraction

1. **Can this section be a pure component?** (No state mutations)
2. **Does this need memoization?** (For performance)
3. **Can this be lazy loaded?** (For code splitting)
4. **Are there responsive issues?** (Test at breakpoints)
5. **Can inline styles be moved to CSS?** (For maintainability)
6. **Are there accessibility concerns?** (Check WCAG)
7. **Is there hardcoded content?** (Should be props?)
8. **Are there external dependencies?** (Document them)

---

## Conclusion

The ARSLandingPage component is well-structured for extraction. Start with utility files and static sections, then move to complex sections. Use this guide as your reference throughout the refactoring process.

**Estimated Total Time: 15-20 hours of focused work**

- Utilities & setup: 3 hours
- Static sections: 5 hours
- Complex sections: 8 hours
- Testing & integration: 4 hours

Good luck with the refactoring!
