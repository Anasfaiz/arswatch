# HERO SECTION EXTRACTION

**Lines:** 1457-1741
**Type:** Full-width hero section with video background
**Dependencies:** Counter component, AnimatedSection component

## Complete JSX Code (Excerpt)

```jsx
<section
  id="products"
  style={{
    position: "relative",
    background: ink,
    overflow: "hidden",
    minHeight: "clamp(600px, 100vh, 900px)",
  }}
>
  {/* Video Background */}
  <video
    autoPlay
    loop
    muted
    playsInline
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: 0,
    }}
  >
    <source src="/file.mp4" type="video/mp4" />
  </video>

  {/* Dark Overlay for text readability */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background: "rgba(17, 20, 8, 0.4)",
      zIndex: 1,
      pointerEvents: "none",
    }}
  />

  {/* Grid Pattern Background */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      backgroundImage: `linear-gradient(rgba(116,124,39,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(116,124,39,.12) 1px,transparent 1px)`,
      backgroundSize: "48px 48px",
      opacity: 0.2,
      zIndex: 2,
    }}
  />

  {/* Slash Accents */}
  <div
    style={{
      position: "absolute",
      top: 0,
      right: 0,
      width: "38%",
      height: "100%",
      overflow: "hidden",
      pointerEvents: "none",
      zIndex: 3,
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 88,
        width: 2,
        height: "78%",
        background: `linear-gradient(to bottom,${gold},transparent)`,
        transform: "rotate(7deg)",
        transformOrigin: "top center",
        opacity: 0.6,
      }}
    />
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 68,
        width: 1,
        height: "55%",
        background: `linear-gradient(to bottom,${olive},transparent)`,
        transform: "rotate(7deg)",
        transformOrigin: "top center",
        opacity: 0.35,
      }}
    />
  </div>

  {/* Content Container */}
  <div
    className="hero-content-wrapper"
    style={{
      maxWidth: 1280,
      margin: "0 auto",
      padding: "120px 24px 108px",
      display: "flex",
      flexDirection: "column",
      gap: 48,
      position: "relative",
      zIndex: 4,
    }}
  >
    <div
      className="hero-flex-container"
      style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "160px 80px 100px 0",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        gap: 40,
        flexWrap: "wrap",
        position: "relative",
        zIndex: 4,
      }}
    >
      {/* LEFT: Text Content */}
      <AnimatedSection
        animationType="fadeInLeft"
        className="hero-text-content"
        style={{
          flex: "1 1 500px",
          display: "flex",
          flexDirection: "column",
          gap: 20,
          marginTop: -80,
          marginLeft: -140,
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
          <span
            className="bc"
            style={{
              fontWeight: 900,
              fontSize: 40,
              color: white,
              letterSpacing: ".04em",
            }}
          >
            ARS
          </span>
          <span
            className="bc"
            style={{
              fontWeight: 300,
              fontSize: 18,
              color: "rgba(255,255,255,.5)",
              letterSpacing: ".2em",
              textTransform: "uppercase",
            }}
          >
            Performance Tracker
          </span>
        </div>

        <h1
          className="teko"
          style={{
            fontWeight: 700,
            fontSize: "clamp(2.8rem,6vw,5rem)",
            lineHeight: 0.92,
            textTransform: "uppercase",
            color: white,
          }}
        >
          The Most Advanced
          <br />
          <span style={{ color: gold }}>Athlete Performance</span>
          <br />
          Tracker
        </h1>

        <p
          style={{
            fontSize: 14,
            lineHeight: 1.8,
            color: "rgba(255,255,255,.6)",
            maxWidth: 460,
          }}
        >
          ARS Performance Tracker integrates cutting-edge performance tracking
          technology into a compact, wearable device. Built for any sport, any
          athlete, and any training environment.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          <a href="#contact">
            <button className="btn-w bc">Contact Us</button>
          </a>
        </div>
      </AnimatedSection>

      {/* RIGHT: Stats */}
      <div
        className="hero-stats-container"
        style={{
          flex: "0 1 auto",
          display: "flex",
          gap: 40,
          paddingBottom: "10px",
        }}
      >
        {[
          { n: 5, s: "+", l: "Sensor Types" },
          { n: 99, s: "%", l: "Data Accuracy" },
          { n: 48, s: "h", l: "Battery Life" },
        ].map(({ n, s, l }) => (
          <div key={l} style={{ textAlign: "right" }}>
            <p
              className="bc"
              style={{
                fontWeight: 900,
                fontSize: 40,
                color: gold,
                margin: 0,
                lineHeight: 1,
              }}
            >
              <Counter to={n} suffix={s} />
            </p>
            <p
              className="bc"
              style={{
                fontSize: 10,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: ".14em",
                color: "rgba(255,255,255,.4)",
                marginTop: 3,
              }}
            >
              {l}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Diagonal Divider SVG */}
  <div
    style={{
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 20,
      pointerEvents: "none",
      overflow: "hidden",
      height: 72,
    }}
  >
    <svg
      viewBox="0 0 1440 72"
      preserveAspectRatio="none"
      style={{ display: "block", width: "100%", height: 72 }}
    >
      <polygon points="0,72 1440,0 1440,72" fill={white} />
      <line
        x1="0"
        y1="72"
        x2="1440"
        y2="0"
        stroke={gold}
        strokeWidth="2.5"
        opacity="0.85"
      />
      <line
        x1="0"
        y1="75"
        x2="1440"
        y2="3"
        stroke={olive}
        strokeWidth="1.5"
        opacity="0.4"
        strokeDasharray="10 5"
      />
    </svg>
  </div>
  <div style={{ height: 72 }} />
</section>
```

## Key Component Dependencies

### Counter Component

Used for animated statistics that count up when scrolled into view.

```javascript
<Counter to={5} suffix="+" /> // Counts 0 → 5, appends "+"
```

### AnimatedSection Component

Wrapper for scroll-triggered fade-in animations.

```javascript
<AnimatedSection animationType="fadeInLeft">
  {/* Content fades in from left when scrolled into view */}
</AnimatedSection>
```

## Color Constants Required

```javascript
const olive = "#747c27";
const gold = "#c9a84c";
const ink = "#111408";
const white = "#ffffff";
```

## CSS Classes Used

- `.bc` (Barlow Condensed - for titles)
- `.teko` (Teko - for main heading)
- `.btn-w` (White outline button)

## Media Queries & Responsive Behavior

### 1024px and above

- Full layout as shown
- Hero stats: horizontal flex row

### 768px - 1024px

- Hero content: padding adjusted
- Stats: flex direction row
- Gap: 24px instead of 40px

### 480px and below

- Hero section: min-height clamp(450px, 80vh, 700px)
- Content wrapper: padding 60px 16px 40px
- Flex container: padding 40px 0 30px 0
- H1 font-size: 2rem
- Stats container: flex-direction column, centered
- P max-width: 100%

## Inline Styles Summary

| Element | Key Styles                                                 |
| ------- | ---------------------------------------------------------- |
| Section | position relative, background ink, min-height clamp        |
| Video   | absolute full-screen, objectFit cover, zIndex 0            |
| Overlay | absolute inset 0, rgba(17,20,8,0.4), zIndex 1              |
| Grid    | backgroundImage gradient, backgroundSize 48px, opacity 0.2 |
| Accents | absolute positioned, gradient to transparent, rotated      |
| Content | maxWidth 1280, flex column, relative zIndex 4              |
| Text    | flex 1 1 500px, marginsNegative for positioning            |
| Stats   | flex 0 1 auto, gap 40, flex row                            |
| Divider | absolute bottom, zIndex 20, SVG with polygon/lines         |

## Data Structure

**Stats Array:**

```javascript
[
  { n: 5, s: "+", l: "Sensor Types" },
  { n: 99, s: "%", l: "Data Accuracy" },
  { n: 48, s: "h", l: "Battery Life" },
];
```

## Assets Required

- Video: `/file.mp4` (hero background video)

## Interactive Elements

- "Contact Us" button links to #contact section
- Counter components animate on scroll
- Text fades in from left on scroll
- Stats appear on scroll
