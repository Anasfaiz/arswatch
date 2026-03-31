# TAB BAR SECTION EXTRACTION

**Lines:** 1935-1987
**Type:** Sticky navigation tabs
**Dependencies:** activeTab, setActiveTab state

## Complete JSX Code

```jsx
<div
  id="features"
  style={{
    background: ink,
    borderBottom: `2px solid ${goldDark}`,
    position: "sticky",
    top: 64,
    zIndex: 40,
  }}
>
  <div
    style={{
      maxWidth: 1280,
      margin: "0 auto",
      padding: "0 24px",
      display: "flex",
      overflowX: "auto",
    }}
  >
    {["Features", "Overview", "Specifications", "FAQs"].map((t) => (
      <button
        key={t}
        onClick={() => {
          setActiveTab(t);
          document
            .getElementById(`sec-${t.toLowerCase()}`)
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        className="bc"
        style={{
          padding: "16px 24px",
          fontSize: 12,
          fontWeight: 800,
          letterSpacing: ".14em",
          textTransform: "uppercase",
          border: "none",
          background: "transparent",
          cursor: "pointer",
          whiteSpace: "nowrap",
          color: activeTab === t ? goldLight : "rgba(255,255,255,.5)",
          borderBottom:
            activeTab === t ? `3px solid ${gold}` : "3px solid transparent",
          transition: "color .2s",
        }}
      >
        {t}
      </button>
    ))}
  </div>
</div>
```

## State Management Required

```javascript
const [activeTab, setActiveTab] = useState("Overview");
```

## Color Constants Required

```javascript
const ink = "#111408";
const gold = "#c9a84c";
const goldLight = "#e8c96a";
const goldDark = "#9a7a28";
```

## CSS Classes Used

- `.bc` (Barlow Condensed - for tab labels)

## Tab Configuration

**Tabs Array:**

```javascript
["Features", "Overview", "Specifications", "FAQs"];
```

Each tab corresponds to a section with `id="sec-{tabname-lowercase}"`:

- "Features" → id="sec-features"
- "Overview" → id="sec-overview"
- "Specifications" → id="sec-specifications"
- "FAQs" → id="sec-faqs"

## Inline Styles Summary

| Element         | Key Styles                                           |
| --------------- | ---------------------------------------------------- |
| Container       | background ink, borderBottom goldDark                |
| Wrapper         | sticky position, top 64px (below navbar), zIndex 40  |
| Menu            | maxWidth 1280, flex row, overflowX auto              |
| Button          | padding 16px 24px, fontSize 12, fontWeight 800       |
| Button Active   | color goldLight, borderBottom 3px gold               |
| Button Inactive | color rgba(255,255,255,.5), borderBottom transparent |

## Interactive Behavior

1. **Click Handler:**
   - Updates `activeTab` state
   - Smoothly scrolls to corresponding section (sec-{tabname})
   - Uses document.getElementById() with optional chaining
   - scrollIntoView with `behavior: "smooth"`

2. **Active State:**
   - Gold text color when active
   - Gold bottom border (3px) when active
   - Gray text when inactive
   - Transparent border when inactive

3. **Smooth Scrolling:**
   - Behavior: "smooth" for animated scroll
   - Targets section with matching id

## Responsive Behavior

- **overflowX: "auto"** allows horizontal scroll on smaller screens
- **whiteSpace: "nowrap"** prevents button wrapping
- Tab buttons remain clickable at all sizes
- Horizontal scroll enables viewing all tabs on mobile

## CSS Transition

- Property: `color`
- Duration: `.2s`
- Timing: default (ease)

## Visual Hierarchy

- All tabs uppercase with letter-spacing
- Font size: 12px (consistent navbar font)
- Font weight: 800 (bold)
- Letter spacing: .14em (wide)
- Active indicator: bottom border (gold)
- Color change on active state

## Integration Points

This tab bar controls visibility of:

1. **Features Section** (lines 1989-2256)
2. **Overview Section** (lines 2258-2307)
3. **Specifications Section** (lines 3021-3147)
4. **FAQs Section** (lines 3149-3197)

Each section should have:

```jsx
<section id="sec-{tabname-lowercase}" ...>
  {/* Content only visible when activeTab === "{TabName}" */}
</section>
```

Note: Currently all sections render regardless of activeTab state.
Add conditional rendering for performance:

```jsx
{
  activeTab === "Features" && <FeaturesSection />;
}
```

## Positioning Details

- **Position: sticky** keeps tab bar visible when scrolling
- **top: 64px** aligns below navbar (navbar height)
- **zIndex: 40** places below navbar (zIndex 50) but above content
- **borderBottom** provides visual separation from content below

## Border Color Styling

- Bottom border uses `goldDark` (#9a7a28)
- Active tab border uses `gold` (#c9a84c)
- Creates visual contrast between tab bar and content

## Button States

### Inactive State

- Color: rgba(255,255,255,.5) (50% opacity white)
- Border: 3px solid transparent (invisible)
- Cursor: pointer
- Transition: waiting for color change

### Hover State

- Color would transition from inactive to active
- No explicit hover style (relies on .2s color transition)
- Could add explicit hover state:
  ```css
  button:hover {
    color: goldLight;
  }
  ```

### Active State

- Color: goldLight (#e8c96a)
- Border: 3px solid gold (#c9a84c)
- Font weight: 800 (unchanged)
- Indicates currently selected tab

## Accessibility Notes

- Buttons have clear labels
- Active state clearly indicated
- Color + border differentiation (not just color)
- Sufficient padding for touch targets (16px vertical)
- Links to corresponding sections aid screen readers

## CSS Class Application

The `.bc` class applies Barlow Condensed font:

```css
.bc {
  font-family: "Barlow Condensed", sans-serif !important;
}
```

This ensures consistent typography with other UI elements using the same class.
