# NAVBAR SECTION EXTRACTION

**Lines:** 1242-1456
**Type:** Navigation Component
**Dependencies:** menuOpen, setMenuOpen, onNavBlog state/functions

## Complete JSX Code

```jsx
<nav
  style={{
    position: "sticky",
    top: 0,
    zIndex: 50,
    background: white,
    borderBottom: "1px solid #e8e4dc",
  }}
>
  <div
    style={{
      maxWidth: 1280,
      margin: "0 auto",
      padding: "0 24px",
      height: 64,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
    }}
  >
    {/* Logo Section */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: 34,
          height: 34,
          background: olive,
          borderRadius: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg viewBox="0 0 24 24" fill="white" style={{ width: 18, height: 18 }}>
          <path d="M12 2L3 7v10l9 5 9-5V7z" />
        </svg>
      </div>
      <span
        className="bc"
        style={{
          fontWeight: 900,
          fontSize: 16,
          letterSpacing: ".08em",
          textTransform: "uppercase",
          color: ink,
        }}
      >
        ARS Kreedashala
      </span>
    </div>

    {/* Desktop Menu */}
    <div
      style={{ display: "flex", alignItems: "center", gap: 32 }}
      className="hidden-mobile"
    >
      {["Products", "Technology", "Blog", "Analytics", "Contact"].map((l) =>
        l === "Blog" ? (
          <button
            key={l}
            onClick={onNavBlog}
            className="nl"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            {l}
          </button>
        ) : (
          <a key={l} href={`#${l.toLowerCase()}`} className="nl">
            {l}
          </a>
        ),
      )}
    </div>

    {/* Desktop CTA Button */}
    <div className="hidden-mobile">
      <a href="#contact">
        <button
          className="bc"
          style={{
            background: gold,
            color: white,
            border: "none",
            padding: "10px 22px",
            fontSize: 11,
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: ".14em",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          Get in Touch
        </button>
      </a>
    </div>

    {/* Mobile Menu Toggle */}
    <button
      onClick={() => setMenuOpen((o) => !o)}
      className="show-mobile"
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 4,
        display: "none",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={ink}
        strokeWidth="2.5"
        style={{ width: 26, height: 26 }}
      >
        {menuOpen ? (
          <path d="M6 18L18 6M6 6l12 12" />
        ) : (
          <>
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </>
        )}
      </svg>
    </button>
  </div>

  {/* Responsive Styles */}
  <style>{`
    @media(max-width:768px){
      .hidden-mobile{display:none!important;}
      .show-mobile{display:block!important;}
    }
  `}</style>

  {/* Mobile Menu */}
  {menuOpen && (
    <div
      style={{
        background: white,
        borderTop: "1px solid #e8e4dc",
        padding: "16px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      {["Products", "Technology", "Blog", "Analytics", "Contact"].map((l) =>
        l === "Blog" ? (
          <button
            key={l}
            onClick={() => {
              setMenuOpen(false);
              onNavBlog();
            }}
            className="nl"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            {l}
          </button>
        ) : (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="nl"
            onClick={() => setMenuOpen(false)}
          >
            {l}
          </a>
        ),
      )}
      <a href="#contact" onClick={() => setMenuOpen(false)}>
        <button
          className="bc"
          style={{
            width: "100%",
            background: gold,
            color: white,
            border: "none",
            padding: "12px",
            fontSize: 11,
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: ".14em",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          Get in Touch
        </button>
      </a>
    </div>
  )}
</nav>
```

## Color Constants Required

```javascript
const olive = "#747c27";
const gold = "#c9a84c";
const ink = "#111408";
const white = "#ffffff";
```

## State Management Required

```javascript
const [menuOpen, setMenuOpen] = useState(false);
```

## Props Required

```javascript
const { onNavBlog } = props;
```

## CSS Classes Used

- `.bc` (Barlow Condensed font)
- `.nl` (Navigation link styling)
- `.hidden-mobile` / `.show-mobile` (Responsive visibility)

## Inline Styles Summary

- Navigation container: sticky, z-index 50, white background
- Logo box: 34x34px, olive background, centered flex
- Desktop menu: flex with 32px gap
- Mobile menu: full-width, stacked flex, hidden by default
- All buttons: cursor pointer, no default styling
- CTA button: gold background, white text, 11px uppercase

## Responsive Behavior

- **768px breakpoint:** Hide desktop menu, show mobile toggle
- Mobile menu: Only renders when `menuOpen` is true
- Links close mobile menu on click
