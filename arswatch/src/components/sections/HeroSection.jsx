import Counter from "../ui/Counter";
import AnimatedSection from "../ui/AnimatedSection";
import { colors } from "../../styles/theme";

/**
 * Hero section with video background and stats
 */
export default function HeroSection() {
  const STATS = [
    { n: 5, s: "+", l: "Sensor Types" },
    { n: 99, s: "%", l: "Data Accuracy" },
    { n: 48, s: "h", l: "Battery Life" },
  ];

  return (
    <section
      id="products"
      style={{
        position: "relative",
        background: colors.ink,
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

      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(17, 20, 8, 0.4)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Grid Pattern */}
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

      {/* Accent Lines */}
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
            background: `linear-gradient(to bottom,${colors.gold},transparent)`,
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
            background: `linear-gradient(to bottom,${colors.olive},transparent)`,
            transform: "rotate(7deg)",
            transformOrigin: "top center",
            opacity: 0.35,
          }}
        />
      </div>

      {/* Content */}
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
          {/* Text Content */}
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
                  color: colors.white,
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
                color: colors.white,
              }}
            >
              The Most Advanced
              <br />
              <span style={{ color: colors.gold }}>Athlete Performance</span>
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
              ARS Performance Tracker integrates cutting-edge performance
              tracking technology into a compact, wearable device. Built for any
              sport, any athlete, and any training environment.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a href="#contact">
                <button className="btn-w bc">Contact Us</button>
              </a>
            </div>
          </AnimatedSection>

          {/* Stats */}
          <div
            className="hero-stats-container"
            style={{
              flex: "0 1 auto",
              display: "flex",
              gap: 40,
              paddingBottom: "10px",
            }}
          >
            {STATS.map(({ n, s, l }) => (
              <div key={l} style={{ textAlign: "right" }}>
                <p
                  className="bc"
                  style={{
                    fontWeight: 900,
                    fontSize: 40,
                    color: colors.gold,
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

      {/* Diagonal Slash Divider */}
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
          <polygon points="0,72 1440,0 1440,72" fill={colors.white} />
          <line
            x1="0"
            y1="72"
            x2="1440"
            y2="0"
            stroke={colors.gold}
            strokeWidth="2.5"
            opacity="0.85"
          />
          <line
            x1="0"
            y1="75"
            x2="1440"
            y2="3"
            stroke={colors.olive}
            strokeWidth="1.5"
            opacity="0.4"
            strokeDasharray="10 5"
          />
        </svg>
      </div>
      <div style={{ height: 72 }} />
    </section>
  );
}
