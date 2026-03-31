# FOOTER SECTION EXTRACTION

**Lines:** 3452-3603
**Type:** Multi-column footer with branding and links
**Dependencies:** None (completely static)

## Complete JSX Code

```jsx
<footer style={{ background: ink }}>
  {/* Top gradient bar */}
  <div
    style={{
      height: 4,
      background: `linear-gradient(90deg,${olive},${gold})`,
    }}
  />

  {/* Footer Content */}
  <div style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 24px" }}>
    {/* Main Content Grid */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
        gap: 40,
        marginBottom: 48,
      }}
    >
      {/* Company Info Column */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 32,
              height: 32,
              background: olive,
              borderRadius: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="white"
              style={{ width: 16, height: 16 }}
            >
              <path d="M12 2L3 7v10l9 5 9-5V7z" />
            </svg>
          </div>
          <span
            className="bc"
            style={{
              fontWeight: 900,
              fontSize: 13,
              letterSpacing: ".1em",
              textTransform: "uppercase",
              color: white,
            }}
          >
            ARS Kreedashala
          </span>
        </div>

        <p style={{ fontSize: 12, lineHeight: 1.7, color: "#4a4a30" }}>
          Advanced athlete performance tracking for the modern sports ecosystem.
        </p>

        {/* Color Indicators */}
        <div style={{ display: "flex", gap: 8 }}>
          <div
            style={{
              width: 20,
              height: 20,
              background: olive,
              borderRadius: 3,
            }}
          />
          <div
            style={{
              width: 20,
              height: 20,
              background: gold,
              borderRadius: 3,
            }}
          />
        </div>
      </div>

      {/* Footer Columns */}
      {[
        {
          h: "Sports",
          items: ["Football", "Basketball", "Cricket", "Hockey", "Athletics"],
        },
        {
          h: "Products",
          items: [
            "Performance Tracker",
            "Analytics Platform",
            "Team Monitoring",
            "Athlete Dashboard",
          ],
        },
        { h: "Company", items: ["About", "Careers", "Contact"] },
        { h: "Legal", items: ["Privacy Policy", "Terms & Conditions"] },
      ].map(({ h, items }) => (
        <div key={h}>
          <p
            className="bc"
            style={{
              fontSize: 10,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: ".14em",
              color: oliveLight,
              marginBottom: 16,
            }}
          >
            {h}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {items.map((s) => (
              <a
                key={s}
                href="#"
                style={{
                  fontSize: 12,
                  color: "#4a4a30",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.target.style.color = white)}
                onMouseLeave={(e) => (e.target.style.color = "#4a4a30")}
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* Bottom Section */}
    <div
      style={{
        paddingTop: 24,
        borderTop: `1px solid rgba(116,124,39,.2)`,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: 12,
      }}
    >
      <p style={{ fontSize: 12, color: "#3a3820" }}>
        © 2025 ARS Kreedashala. All rights reserved.
      </p>
      <p style={{ fontSize: 12, color: "#3a3820" }}>
        Built for athletes. Powered by data.
      </p>
    </div>
  </div>
</footer>
```

## Color Constants Required

```javascript
const ink = "#111408";
const olive = "#747c27";
const oliveLight = "#9ca82d";
const gold = "#c9a84c";
const white = "#ffffff";
```

## CSS Classes Used

- `.bc` (Barlow Condensed - for section headers)

## Footer Structure

### Top Gradient Bar

- Height: 4px
- Gradient: olive → gold (90deg horizontal)
- Purpose: Visual separation from content

### Company Information Column

- Logo icon: 32x32px with olive background
- Brand name: "ARS Kreedashala"
- Description: Mission statement
- Color indicators: 20x20px squares (olive & gold)

### Four Footer Columns

**Column 1: Sports**

- Football, Basketball, Cricket, Hockey, Athletics

**Column 2: Products**

- Performance Tracker, Analytics Platform, Team Monitoring, Athlete Dashboard

**Column 3: Company**

- About, Careers, Contact

**Column 4: Legal**

- Privacy Policy, Terms & Conditions

### Bottom Section

- Copyright notice
- Tagline: "Built for athletes. Powered by data."
- Separated by 1px olive border (20% opacity)

## Inline Styles Summary

| Element    | Key Styles                                   |
| ---------- | -------------------------------------------- |
| Footer     | background ink, padding 64px 24px            |
| Top bar    | height 4px, gradient olive → gold            |
| Grid       | repeat(auto-fit, minmax(160px, 1fr)), gap 40 |
| Logo       | width 32, height 32, olive background        |
| Heading    | fontSize 10, fontWeight 800, uppercase       |
| Links      | fontSize 12, color #4a4a30, no underline     |
| Link hover | color white (via onMouseEnter/Leave)         |
| Bottom     | paddingTop 24, borderTop 1px olive.2         |

## Responsive Behavior

### Auto-fit Grid

- **minmax(160px, 1fr)** ensures columns stay at least 160px wide
- Automatically stacks on smaller screens
- Gap 40px maintains spacing
- Maintains visual balance across screen sizes

### Mobile Behavior

- All columns stack vertically
- Links remain clickable
- Logo and description stack properly
- Full-width layout on small screens

### Desktop Behavior

- 4-5 columns (company info + 4 link columns)
- Horizontal layout
- Proper alignment and spacing
- Links easily scannable

## Interactive Features

### Link Hover Effects

```javascript
onMouseEnter={(e) => (e.target.style.color = white)}
onMouseLeave={(e) => (e.target.style.color = "#4a4a30")}
```

- Hover: color changes to white
- Leave: color reverts to #4a4a30
- Smooth visual feedback
- Direct style manipulation (could use CSS for better performance)

## Design Elements

### Color Scheme

- Background: Ink (dark brown-black)
- Primary accent: Olive green
- Secondary accent: Gold
- Text links: Dark gray (#4a4a30)
- Text hover: White

### Typography

- Headers: Barlow Condensed, 10px, 800 weight, uppercase
- Links: Standard Barlow, 12px, 400 weight
- Copyright: 12px, slightly lighter color
- Logo: 13px, 900 weight, uppercase

### Spacing

- Section gap: 40px (horizontal)
- Column gap: 10px (vertical)
- Item gap: 16px (between header and links)
- Padding: 64px vertical, 24px horizontal
- Border top: 24px padding above

## Data Structure

**Footer Columns Array:**

```javascript
[
  { h: "Sports", items: [5 items] },
  { h: "Products", items: [4 items] },
  { h: "Company", items: [3 items] },
  { h: "Legal", items: [2 items] }
]
```

## Static Content

All footer content is hardcoded. To make dynamic:

1. Move arrays to separate data file
2. Pass as props from parent
3. Add CMS integration if needed

## Accessibility Notes

- Semantic footer element
- Proper link structure with href attributes
- Color contrast maintained
- Cursor pointer on links
- Keyboard navigable

## Performance Considerations

- Static content (no state/re-renders)
- Inline styles for hover (could optimize with CSS)
- SVG icon embedded (good for small icons)
- Simple grid layout (performant)

## Browser Support

- CSS Grid: IE 11+ (with fallbacks)
- Flexbox: All modern browsers
- Gradient: All modern browsers
- onMouseEnter/Leave: All modern browsers

## Optimization Suggestions

1. **Replace onMouseEnter/Leave with CSS:**

   ```css
   a:hover {
     color: white;
   }
   ```

2. **Extract footer data:**

   ```javascript
   const FOOTER_COLUMNS = [...]
   ```

3. **Consider adding footer links:**
   - Social media icons
   - Newsletter signup
   - Language selector

4. **Add footer navigation:**
   - Back to top button
   - Sitemap link
   - Latest blog posts

## SEO Considerations

- Footer links help with internal linking
- Proper heading hierarchy (h tags)
- Footer text visible to crawlers
- Semantic HTML structure

## Copyright & Legal

- Year: 2025 (hardcoded - update annually)
- Company: ARS Kreedashala
- Tagline: Reinforces brand mission
- Legal links: Privacy and Terms

## CSS Selector Reference

For styling enhancements:

- `footer` - main footer
- `footer a` - links
- `footer [class="bc"]` - headers using bc class
- `.grid` - grid container (if classed)
- `footer p` - paragraphs

## Integration Points

Footer integrates with:

- Navigation bar (below all content)
- Overall page background (dark ink background)
- Brand identity (color palette, typography)
- Contact section (links point upward)

## File Export Notes

When extracting as separate component:

1. Import color constants
2. Import CSS classes used
3. No state management needed
4. Completely standalone component
5. Minimal dependencies

## Example Extracted Component

```jsx
export default function Footer() {
  const FOOTER_COLUMNS = [
    { h: "Sports", items: [...] },
    // ...
  ];

  return (
    <footer style={{ background: ink }}>
      {/* Footer JSX */}
    </footer>
  );
}
```

This section is one of the easiest to extract as a standalone component due to its static nature and minimal dependencies.
