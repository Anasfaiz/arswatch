# ARSLandingPage Component - Section Extraction Guide

## Component Overview

**File Path:** `c:/Users/anasf/Desktop/ArsK/Website/Watch/arswatch/src/components/ARSLandingPage.jsx`
**Total Lines:** 3606
**Component Type:** React Functional Component
**Props:** `{ onNavBlog }`

---

## Global State & Props

### Component Props

```javascript
export default function ARSLandingPage({ onNavBlog }) {
```

- **onNavBlog**: Callback function triggered when "Blog" link is clicked

### Component State Variables

```javascript
const [menuOpen, setMenuOpen] = useState(false); // Mobile menu toggle
const [activeTab, setActiveTab] = useState("Overview"); // Tab section active state
const [submitted, setSubmitted] = useState(false); // Contact form submission status
const [form, setForm] = useState({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  organization: "",
  sport: "",
  country: "",
  language: "",
  role: "",
  message: "",
});
```

### Form Helper Functions

```javascript
const upd = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));
const submit = (e) => {
  e.preventDefault();
  setSubmitted(true);
  setTimeout(() => setSubmitted(false), 4000);
  setForm({
    /* reset form */
  });
};
```

---

## Color Palette Constants

All colors are defined at the top of the component:

```javascript
const olive = "#747c27"; // Primary brand color
const oliveDark = "#3a4212"; // Darker variant
const oliveLight = "#9ca82d"; // Lighter variant
const gold = "#c9a84c"; // Accent color
const goldLight = "#e8c96a"; // Lighter accent
const goldDark = "#9a7a28"; // Darker accent
const ink = "#111408"; // Text color (near black)
const inkMid = "#1e2108"; // Medium gray text
const sand = "#e8ddd0"; // Warm beige
const offWhite = "#f7f6f1"; // Off-white background
const white = "#ffffff"; // White
const midGray = "#6b6b50"; // Medium gray
```

---

## Custom Hooks & Utility Components

### 1. useScrollAnimation Hook (Lines 6-32)

Used for scroll-triggered animations throughout the page.

```javascript
function useScrollAnimation() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  // Uses IntersectionObserver for visibility detection
}
```

### 2. Counter Component (Lines 47-76)

Animated counter with suffix support. Used in Hero section stats.

```javascript
function Counter({ to, suffix = "" }) {
  // Animates from 0 to 'to' value when scrolled into view
}
```

### 3. FieldViz Component (Lines 78-159)

Field visualization component with player positions and team data.

### 4. AnimatedSection Component (Lines 968-1001)

Wrapper component for scroll-triggered fade animations.

```javascript
function AnimatedSection({ animationType, children, ...props }) {
  // animationType: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scale"
}
```

### 5. FAQ Component (Lines 365-399)

Expandable FAQ item component with question and answer.

### 6. VitalMonitoringShowcase Component (Lines 442-630)

Separate component for vital statistics display section.

### 7. Tag Component (Lines 932-966)

Simple tag display component with background color.

```javascript
function Tag({ bg, children }) {
  // Styled tag/badge component
}
```

---

## Global CSS Classes & Animations

### CSS Classes Used Throughout

- `.bc` - Barlow Condensed font family
- `.teko` - Teko font family
- `.inp` - Input field styling
- `.ch` - Card/container hover effect
- `.btn-w` - White button style
- `.btn-o` - Olive button style
- `.btn-s` - Submit button style
- `.nl` - Navigation link style
- `.fw` - Float animation
- `.scanl` - Scan line effect
- `.hidden-mobile` / `.show-mobile` - Responsive visibility

### Global Animations

```css
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-14px);
  }
}
@keyframes lp {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.2;
  }
}
@keyframes scan {
  0% {
    top: -30%;
    opacity: 0;
  }
  10% {
    opacity: 0.4;
  }
  90% {
    opacity: 0.4;
  }
  100% {
    top: 130%;
    opacity: 0;
  }
}
```

---

## Section Breakdown

### 1. NAVBAR SECTION

**Lines:** 1242-1456
**Height in DOM:** 64px (sticky)
**Z-Index:** 50

#### Features:

- Sticky navigation with logo
- Desktop menu with 5 navigation links
- Mobile hamburger menu with state toggle
- CTA button ("Get in Touch")
- Responsive breakpoint at 768px

#### Key Props/State Used:

- `menuOpen` - controls mobile menu visibility
- `onNavBlog` - callback function for Blog link

#### Colors Used:

- Background: `white`
- Logo BG: `olive`
- Links: Default gray, hover to `olive`
- CTA Button: `gold` background
- Border: `#e8e4dc`

#### Inline Style Objects:

- Nav container: sticky positioning, flex layout
- Logo box: 34x34px, olive background
- Menu items: gap 32px, flex layout
- Mobile menu: hidden by default, shown on 768px breakpoint

#### Embedded Styles:

```css
@media (max-width: 768px) {
  .hidden-mobile {
    display: none !important;
  }
  .show-mobile {
    display: block !important;
  }
}
```

---

### 2. HERO SECTION

**Lines:** 1457-1741
**Background:** Dark (`ink` color) with video
**Min Height:** 600px to 900px (clamp)

#### Features:

- Full-screen hero with video background
- Dark overlay for text readability (rgba(17,20,8,0.4))
- Animated grid background pattern
- Diagonal slash accents (gold and olive lines)
- Left-aligned text content with AnimatedSection
- Right-aligned stats display with Counter components
- Diagonal SVG divider at bottom (white polygon with gold/olive lines)

#### Key Props/State Used:

- AnimatedSection with "fadeInLeft" type
- Counter components (to: 5, 99, 48 with suffixes: "+", "%", "h")

#### Colors Used:

- Background: `ink` (#111408)
- Overlay: rgba(17,20,8,0.4)
- Text: `white` with `rgba(255,255,255,0.x)` variants
- Accent: `gold` (#c9a84c)
- Grid: olive with 0.12 opacity

#### Inline Style Objects:

- Video: absolute full-screen with object-fit
- Grid background: linear-gradient pattern
- Slash accents: positioned absolutely with gradient
- Hero text: flex column with specific margins
- Stats container: flex row with 40px gap

#### Key Elements:

- Video source: "/file.mp4"
- Logo text: "ARS"
- Main heading: "The Most Advanced [br] Athlete Performance [br] Tracker"
- Subheading with gold color: "Athlete Performance"
- Three stats: Sensor Types, Data Accuracy, Battery Life
- CTA Button: "Contact Us" link

---

### 3. BUILT FOR MOVEMENT SECTION

**Lines:** 1742-1933
**Background:** `white`
**Padding:** 80px 24px

#### Features:

- Two-column layout with flex wrap
- Left side: Animated text content (fadeInLeft)
- Right side: 3D model viewer with stats overlay
- Glow background effect behind model
- Two floating stat boxes (Heart Rate and Sprint Speed)
- model-viewer element for 3D smartwatch display

#### Key Props/State Used:

- AnimatedSection with "fadeInLeft" and "fadeInRight" types

#### Colors Used:

- Background: `white`
- Heading: `ink`
- Text: `midGray`
- Accent bar: `gold`
- Stats boxes: `olive` and dark semi-transparent
- Borders: `gold` with 50 opacity

#### Inline Style Objects:

- Section container: flex, wrap, 48px gap
- Text content: flex 1 1 400px, max-width 680px
- Glow effect: radial-gradient with gold
- Model viewer wrapper: flex center, 350px height
- Stats: absolutely positioned (top 16, bottom 16, left 0)

#### Key Elements:

- Heading: "Built for Movement, [br] Built for Scale."
- Description paragraph about device features
- 3D Model source: "/smartwatch.glb"
- Model viewer attributes: auto-rotate, camera-controls, AR enabled
- Heart Rate display: "142 bpm"
- Sprint Speed display: "34.2 km/h"

---

### 4. TAB BAR SECTION

**Lines:** 1935-1987
**Background:** `ink`
**Position:** Sticky, top: 64px (below navbar)
**Z-Index:** 40

#### Features:

- Sticky tab navigation with 4 tabs
- Tab buttons: Features, Overview, Specifications, FAQs
- Active tab indicator with gold bottom border
- Smooth scroll behavior on tab click
- Responsive overflow-x for small screens

#### Key Props/State Used:

- `activeTab` state to track selected tab
- `setActiveTab` function called on tab click

#### Colors Used:

- Background: `ink`
- Active text: `goldLight`
- Inactive text: rgba(255,255,255,0.5)
- Border: `gold` when active, transparent when inactive
- Bottom border: `goldDark`

#### Inline Style Objects:

- Tab buttons: padding 16px 24px, flex layout
- Active indicator: 3px solid gold bottom border
- Inactive: 3px solid transparent bottom border
- Transition: color .2s

---

### 5. FEATURES SECTION (Tab 1: Features)

**Lines:** 1989-2256
**Background:** Gradient (linear-gradient(135deg, #f5f3f0 0%, #e8e5e0 50%, #f0ede8 100%))
**Padding:** 80px 24px

#### Features:

- Grid layout of 10 feature cards (5 columns)
- Each card has icon, color indicator, and label
- Animated cards with staggered fadeInUp animation
- Cards with accent borders and hover effects
- Radial gradient overlays for visual depth

#### Key Props/State Used:

- AnimatedSection with "fadeInUp"
- Staggered delays: idx \* 0.15s
- Transition duration: 1.2s

#### Colors Used:

- Background: Gradient of light beige/sand tones
- Card BG: `white`
- Icons alternate: `olive` and `gold`
- Icon circles: semi-transparent versions of colors
- Borders: color + "25" opacity

#### Inline Style Objects:

- Feature cards: 5-column grid, 20px gap
- Card: padding 28px 16px, borderRadius 14px
- Icon circle: 64x64px, border-radius 50%
- Card shadows: 0 2px 12px rgba(0,0,0,.06)

#### Cards Included:

1. Medical Grade Heart Rate (olive)
2. HRV Analysis (gold)
3. Blood Oxygen SpO₂ (olive)
4. Skin Temperature (gold)
5. Activity Tracking (olive)
6. Stress Monitor (gold)
7. Automatic Sleep Tracking (olive)
8. VO₂ Max (gold)
9. Blood Pressure Monitor (olive)
10. Long Battery Life (gold)

---

### 6. OVERVIEW SECTION (Tab 2: Overview)

**Lines:** 2258-2307
**Background:** `white`
**Padding:** 80px 24px

#### Features:

- System architecture section with title
- Dashed border container with off-white background
- Architecture image placeholder
- AnimatedSection with fadeInUp animation

#### Key Props/State Used:

- AnimatedSection with "fadeInUp"

#### Colors Used:

- Background: `white`
- Text: `ink`
- Sub-text: `midGray`
- Container BG: `offWhite`
- Border: olive with 80 opacity, dashed 2px

#### Inline Style Objects:

- Container: border dashed, borderRadius 16px
- Image: maxWidth 100%, borderRadius 12px

#### Key Elements:

- Title: "System Architecture"
- Image source: "/architecture.png"
- Description: "How ARS Tracker connects your athletes to the platform"

---

### 7. VITALS SECTION (Separate Component)

**Line:** 2309
**Component:** `<VitalMonitoringShowcase />`

This is imported from a separate component file. It displays vital monitoring data with various metrics.

---

### 8. TEAM DEPLOYMENT SECTION (Bento Grid)

**Lines:** 2311-2983
**Background:** Dark (#0d1117)
**Padding:** 0 20px 80px

#### Features:

- Bento grid layout (asymmetric on desktop)
- 5 cards with background images and overlays
- Hover effects with translation and shadow
- Tag badges with pseudo-elements
- Live pulse indicator with animation
- SVG gauges for metrics (SpO₂, battery)
- Responsive: 2 columns desktop, 2 columns tablet, 1 column mobile
- Dotted divider sections at top and bottom

#### Key Props/State Used:

- AnimatedSection with "fadeInUp"

#### Colors Used:

- Background: #0d1117 (dark)
- Text: white
- Tags: olive, gold, with rgba overlays
- Overlays: rgba(0,0,0,0.55) to rgba(0,0,0,0.82)
- Accents: gold (#c9a84c), olive (#747c27)
- Live indicator: #00e85a (neon green)

#### Inline Style Objects:

- Bento grid: CSS grid with responsive columns
- Cards: position relative, min-height varies
- Overlays: absolute inset 0
- Tags: absolute positioning with blur backdrop
- Labels: absolute bottom with gradient background

#### Cards Included:

1. **24/7 Continuous Heart Rate Monitor** - Tall card (left)
   - Background: Unsplash athlete photo
   - Live pulse indicator with heart rate waveform
   - PPG Sensor tag
   - Data: "72 bpm"

2. **Oxygen Saturation Detection** - Top right
   - Background: Unsplash athlete photo
   - SVG circular gauge
   - Optical Sensor tag
   - Data: "97%"

3. **Multi-Sport Tracking** - Mid right
   - Background: Unsplash sports photo
   - 100+ Sport Modes tag
   - Sport icons row

4. **Battery Life** - Wide card (bottom left)
   - Background: Unsplash sports equipment
   - Battery visualization with progress
   - Wide span layout

5. **Watch & App Easy Tracking** - Wide card (bottom right)
   - Background: Unsplash tech photo
   - Watch → Cloud → App diagram
   - Companion App tag

---

### 9. SPECIFICATIONS SECTION (Tab 3: Specs)

**Lines:** 3021-3147
**Background:** `white`
**Padding:** 80px 24px

#### Features:

- Specifications table with 4 groupings
- Header rows with gradient background
- Alternating row backgrounds
- Detailed hardware, connectivity, performance, and physical specs

#### Key Props/State Used:

- Mapped spec groups with rows

#### Colors Used:

- Background: `white`
- Container: `offWhite`
- Headers: linear-gradient(90deg, olive, oliveDark)
- Header text: `white`
- Row alternates: rgba(116,124,39,.04) and white
- Labels: `midGray`
- Values: `ink`

#### Inline Style Objects:

- Table container: borderRadius 12px, overflow hidden
- Headers: padding 10px 20px
- Rows: padding 13px 20px, flex layout

#### Spec Groups:

1. **Hardware** - PPG Sensor, Temperature, Accelerometer, RGB LED, Nordic BLE, Battery
2. **Connectivity** - GPS/LPS, Bluetooth, USB
3. **Performance** - Battery Life, GPS Mode, Charging
4. **Physical** - Weight, Dimensions, Water Resistance, Display

---

### 10. FAQs SECTION (Tab 4: FAQs)

**Lines:** 3149-3197
**Background:** `offWhite`
**Padding:** 80px 24px

#### Features:

- Expandable FAQ items using FAQ component
- 6 pre-defined Q&A pairs
- Centered layout with max-width 800px

#### Key Props/State Used:

- FAQ component (imported)

#### Colors Used:

- Background: `offWhite`
- Title: `ink` with `olive` accent word
- Text: Default body text color

#### FAQ Items:

1. What sports does the ARS tracker support? (100+ sports)
2. How long does the battery last? (48 hours standard, 20 GPS)
3. Is the device waterproof? (IP68, 50m)
4. How accurate is the GPS tracking? (2-3m open sky, <1m indoors)
5. Can I wear it under a jersey? (Yes, compact 40x34x10mm, 28g)
6. How do I connect it to my coaching platform? (REST API, Bluetooth, SDKs)

---

### 11. CONTACT SECTION

**Lines:** 3199-3450
**Background:** `white`
**Padding:** 80px 24px

#### Features:

- Contact form with 9 input fields
- Text inputs: firstName, lastName, email, phone, organization, sport
- Selects: country, language, role
- Textarea: message
- Success message display
- Animated section wrapper

#### Key Props/State Used:

- `form` state for all input values
- `upd(k)` function for input updates
- `submit` function for form submission
- `submitted` state for success message

#### Colors Used:

- Background: `white`
- Form BG: `offWhite`
- Text: `ink`
- Labels: `ink`, smaller font
- Borders: #e0ddd5 on inputs, #e8e4dc on form
- Button: `olive` background
- Success message: `olive` background
- Input focus: `gold` border

#### Inline Style Objects:

- Form container: borderRadius 8px, padding 40px
- Fields grid: repeat(auto-fit, minmax(240px, 1fr)), gap 16px
- Inputs: padding 11px 14px, borderRadius 5px
- Labels: fontSize 10px, uppercase, fontWeight 800
- Button: full width, flex centered

#### Form Fields:

1. First Name (text)
2. Last Name (text)
3. Work Email (email)
4. Phone Number (tel)
5. Organization (text)
6. Sport (text)
7. Country (select) - 10 options
8. Preferred Language (select) - 7 options
9. Role in Organization (select) - 7 options
10. Message (textarea, 4 rows)

#### Form Data Submitted:

All form fields plus auto-reset after 4 seconds

---

### 12. FOOTER SECTION

**Lines:** 3452-3603
**Background:** `ink`
**Padding:** 64px 24px (with 4px gradient top bar)

#### Features:

- Multi-column footer layout
- Colored top bar (gradient olive to gold)
- Company branding and description
- 4 footer columns: Sports, Products, Company, Legal
- Links with hover effects
- Copyright and tagline at bottom

#### Key Props/State Used:

- None (static content)

#### Colors Used:

- Background: `ink`
- Top bar: linear-gradient(90deg, olive, gold)
- Text: white and gray variants
- Links: #4a4a30, hover to white
- Column headers: `oliveLight`
- Description: #4a4a30

#### Inline Style Objects:

- Footer grid: repeat(auto-fit, minmax(160px, 1fr)), gap 40px
- Logo section: flex column, gap 16px
- Color squares: 20x20px, olive and gold
- Links: flex column, gap 10px, hover color change
- Bottom section: borderTop with olive.2 opacity

#### Footer Columns:

1. **Company Info**
   - Logo with icon
   - Description: "Advanced athlete performance tracking for the modern sports ecosystem."
   - Brand color indicators (olive and gold squares)

2. **Sports** - Football, Basketball, Cricket, Hockey, Athletics

3. **Products** - Performance Tracker, Analytics Platform, Team Monitoring, Athlete Dashboard

4. **Company** - About, Careers, Contact

5. **Legal** - Privacy Policy, Terms & Conditions

#### Bottom Section:

- Copyright: "© 2025 ARS Kreedashala. All rights reserved."
- Tagline: "Built for athletes. Powered by data."

---

## Responsive Breakpoints

### Mobile First Approach

- **480px and below:** Single column, stacked layouts
- **480px - 768px:** Two-column grids where applicable
- **768px - 1024px:** Three-column layouts for features
- **1024px and above:** Full multi-column layouts

### Specific Breakpoint Behaviors

#### 480px (Mobile)

- Hero section: min-height reduced
- Feature grid: 2 columns
- Model viewer: 300px height
- Form fields: Full width stacked

#### 768px (Tablet)

- Hidden-mobile class: display none
- Show-mobile class: display block
- Feature grid: 3 columns
- Model viewer: 320px height
- Navigation: Mobile menu enabled

#### 1024px+ (Desktop)

- Feature grid: 5 columns
- Bento grid: 2-column asymmetric
- Full horizontal layouts
- Model viewer: 400px height

---

## Global Style Tags Location

### Global Styles (Lines 1049-1240)

Located at the very beginning of the component return statement, includes:

- Font imports (Teko, Barlow, Barlow Condensed)
- CSS reset (_, _::before, \*::after)
- Global class definitions (.bc, .teko, .btn-\*, .nl, etc.)
- Keyframe animations (@keyframes float, lp, scan)
- Responsive media queries
- Model viewer specific fixes
- Feature grid responsiveness

---

## Component Dependencies

### Imported from React

```javascript
import { useState, useEffect, useRef } from "react";
```

### Custom Components Used

- AnimatedSection (defined in file)
- Counter (defined in file)
- FieldViz (defined in file)
- FAQ (imported from separate file)
- VitalMonitoringShowcase (imported from separate file)
- Tag (defined in file)

### External Elements

- `<model-viewer>` web component for 3D smartwatch display
- Unsplash images for bento grid background images
- Custom SVG elements for various graphics (hearts, gauges, waveforms, etc.)

---

## CSS Classes Reference

| Class                      | Purpose                | Location                    |
| -------------------------- | ---------------------- | --------------------------- |
| `.bc`                      | Barlow Condensed font  | Global, used throughout     |
| `.teko`                    | Teko font for headings | Headings throughout         |
| `.inp`                     | Input field styling    | Contact form                |
| `.ch`                      | Card hover effect      | Feature cards, various      |
| `.btn-w`                   | White button           | Hero CTA                    |
| `.btn-o`                   | Olive button           | Various CTAs                |
| `.btn-s`                   | Submit button          | Contact form                |
| `.nl`                      | Navigation link        | Navbar, footer              |
| `.fw`                      | Float animation        | (Applied inline where used) |
| `.scanl`                   | Scan line effect       | (Applied inline where used) |
| `.hidden-mobile`           | Hide on mobile         | Navbar                      |
| `.show-mobile`             | Show on mobile         | Navbar                      |
| `.bento-grid`              | Bento grid layout      | Team Deployment section     |
| `.bento-card`              | Bento card item        | Team Deployment section     |
| `.bento-label`             | Bento label overlay    | Team Deployment section     |
| `.bento-tag`               | Bento tag badge        | Team Deployment section     |
| `.feat-grid`               | Feature grid layout    | Features section            |
| `.spec-row`                | Specification row      | Specifications section      |
| `.technology-model-wrap`   | Model viewer wrapper   | Built For Movement section  |
| `.technology-model-viewer` | Model viewer element   | Built For Movement section  |

---

## Key Inline Styles Used Across Sections

### Positioning

- `position: "sticky"` - Navbar, Tab bar
- `position: "absolute"` - Overlays, decorative elements
- `position: "relative"` - Section containers

### Layout

- `display: "flex"` - Most containers
- `display: "grid"` - Feature grid, footer, form fields
- `display: "block"` - Images, videos
- `flexDirection: "column"` / `"row"` - Various
- `flexWrap: "wrap"` - Responsive layouts

### Sizing

- `maxWidth: 1280px` - Main containers throughout
- `gap: 16px to 48px` - Spacing
- `padding: "24px" / "80px"` - Section padding

### Backgrounds & Colors

- Solid colors: `white`, `ink`, `gold`, `olive`
- Gradients: linear-gradient, radial-gradient
- Images: backgroundImage with URLs
- Overlays: rgba(0,0,0,0.x) variants

### Effects

- `boxShadow: "0 2px 12px rgba(0,0,0,.06)"` - Soft shadows
- `border: "2px solid"` - Borders with colors
- `borderRadius: 4px to 20px` - Rounded corners
- `opacity: 0.x` - Transparency
- `transition: "all .3s ease"` - Animations

---

## Animation & Interaction Details

### Scroll Animations

- useScrollAnimation hook with IntersectionObserver
- Threshold: 0.1, with 50px bottom margin
- Used in: AnimatedSection wrapper component
- Types: fadeInUp, fadeInLeft, fadeInRight, scale

### Button Interactions

- `.btn-w:hover` - White outline to semi-transparent
- `.btn-o:hover` - Color change with translation
- `.btn-s:hover` - Same as btn-o
- `.nl:hover` - Color change and translation
- `.ch:hover` - Translation and shadow

### Form Interactions

- `.inp:focus` - Border color change to gold
- Form submit: clears form and shows success message for 4 seconds

### Bento Cards

- Hover: translateY(-8px) + shadow
- Tag hover: scale(1.05) with color change
- Label padding changes on hover

### Live Pulse Animation

- Keyframe `lp`: opacity 1 → 0.2 → 1 (0.9s loop)
- Applied to live pulse dot in heart rate card

### Scan Line Animation

- Keyframe `scan`: top -30% → 130% with opacity fade (3.5s)
- Creates scanning effect (though not applied in visible sections)

---

## Data Structures

### Feature Cards Data

```javascript
{
  label: "Medical Grade Heart Rate",
  c: olive,
  icon: <SVG... />
}
```

### Specification Groups Data

```javascript
{
  heading: "Hardware",
  rows: [
    ["PPG Sensor", "Heart Rate + SpO₂ (optical)"],
    // ...
  ]
}
```

### FAQ Items Data

```javascript
[
  ["Question text", "Answer text"],
  // ...
];
```

### Footer Columns Data

```javascript
{
  h: "Sports",
  items: ["Football", "Basketball", ...]
}
```

### Form Fields Data

```javascript
{
  k: "firstName",        // Form key
  l: "First Name",       // Label
  t: "text",             // Input type
  p: "John"              // Placeholder
}
```

---

## Performance Considerations

1. **Intersection Observer** - useScrollAnimation uses threshold 0.1 for efficient detection
2. **SetTimeout** - Form success message auto-clears after 4 seconds
3. **Memoization** - None currently used, could benefit Feature cards and FAQ items
4. **Image Optimization** - Unsplash images include query params (w=800&q=80&fit=crop)
5. **CSS Optimization** - Global styles consolidated in single <style> block at top

---

## Dependencies Required for Extraction

When creating separate component files, ensure:

1. **Import statements needed:**
   - React hooks (useState, useEffect, useRef)
   - Custom components (AnimatedSection, Counter, FAQ, Tag, etc.)
   - The color constants

2. **Props to pass down:**
   - `onNavBlog` - for Navbar
   - `activeTab` & `setActiveTab` - for Tab bar
   - `form` & `upd` & `submit` - for Contact form
   - `submitted` - for success message
   - All other state variables as needed

3. **Global styles to include:**
   - Font imports
   - CSS resets and global classes
   - Keyframe animations
   - Responsive media queries

4. **External resources:**
   - Video source: "/file.mp4"
   - Architecture image: "/architecture.png"
   - 3D Model: "/smartwatch.glb"
   - Unsplash images (bento cards)

---

## Extraction Recommendations

### High Priority Components (Self-Contained)

1. **Navbar Component** - Minimal dependencies, uses menuOpen state
2. **Hero Section** - Uses Counter component, minor dependencies
3. **Built for Movement** - Mostly self-contained with model-viewer
4. **Features Section** - Self-contained grid component
5. **Footer** - Completely static content

### Medium Priority Components (Share State)

1. **Tab Bar** - Needs activeTab state management
2. **Tab Sections (Features/Overview/Specs/FAQs)** - Depend on activeTab state
3. **Contact Form** - Needs form state and handlers

### Lower Priority (Complex Dependencies)

1. **Team Deployment/Bento Grid** - Complex styling and positioning
2. **Entire page** - Currently tightly coupled; refactoring will improve maintainability

### Refactoring Strategy

1. Extract utility functions (Counter, AnimatedSection, Tag, etc.) to separate utility file
2. Create section components as standalone files
3. Create a hooks file for useScrollAnimation
4. Move color constants to a separate constants file
5. Maintain parent component for state management and orchestration

---

## File Structure After Extraction (Recommended)

```
components/
├── ARSLandingPage.jsx (main orchestrator)
├── sections/
│   ├── NavbarSection.jsx
│   ├── HeroSection.jsx
│   ├── BuiltForMovementSection.jsx
│   ├── TabBarSection.jsx
│   ├── FeaturesSection.jsx
│   ├── OverviewSection.jsx
│   ├── TeamDeploymentSection.jsx
│   ├── SpecificationsSection.jsx
│   ├── FAQsSection.jsx
│   ├── ContactSection.jsx
│   └── FooterSection.jsx
├── ui/
│   ├── AnimatedSection.jsx
│   ├── Counter.jsx
│   ├── Tag.jsx
│   ├── FAQ.jsx
│   └── FieldViz.jsx
├── hooks/
│   └── useScrollAnimation.js
└── constants/
    └── colors.js
```

---

## Summary Statistics

| Metric                   | Value |
| ------------------------ | ----- |
| Total Lines              | 3606  |
| Navbar Lines             | 215   |
| Hero Lines               | 285   |
| Built For Movement Lines | 192   |
| Tab Bar Lines            | 53    |
| Features Lines           | 268   |
| Overview Lines           | 50    |
| Team Deployment Lines    | 673   |
| Specifications Lines     | 127   |
| FAQs Lines               | 49    |
| Contact Lines            | 252   |
| Footer Lines             | 152   |
| CSS/Style Lines          | 200+  |
| Utility Components       | 7     |
| Custom Hooks             | 1     |
| Global Colors            | 12    |
| CSS Classes              | 20+   |
| Media Query Breakpoints  | 5     |

---

**Last Updated:** 2025-03-29
**Component Version:** Current in repository
**Status:** Ready for extraction and modularization
