import { useState, useEffect, useRef } from "react";

const WATCH_IMG = "/watch.jpg";

// Custom hook for scroll animations
function useScrollAnimation() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
}

const olive = "#747c27";
const oliveDark = "#3a4212";
const oliveLight = "#9ca82d";
const gold = "#c9a84c";
const goldLight = "#e8c96a";
const goldDark = "#9a7a28";
const ink = "#111408";
const inkMid = "#1e2108";
const sand = "#e8ddd0";
const offWhite = "#f7f6f1";
const white = "#ffffff";
const midGray = "#6b6b50";

function Counter({ to, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        obs.disconnect();
        let n = 0;
        const step = to / (1200 / 16);
        const t = setInterval(() => {
          n += step;
          if (n >= to) {
            setVal(to);
            clearInterval(t);
          } else setVal(Math.floor(n));
        }, 16);
      },
      { threshold: 0.3 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

function FieldViz() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick((p) => p + 1), 1100);
    return () => clearInterval(t);
  }, []);
  const players = [
    { x: 18, y: 30, tm: 0 },
    { x: 28, y: 55, tm: 0 },
    { x: 18, y: 76, tm: 0 },
    { x: 44, y: 20, tm: 0 },
    { x: 44, y: 50, tm: 0 },
    { x: 44, y: 80, tm: 0 },
    { x: 62, y: 36, tm: 0 },
    { x: 62, y: 64, tm: 0 },
    { x: 79, y: 28, tm: 1 },
    { x: 79, y: 50, tm: 1 },
    { x: 79, y: 72, tm: 1 },
    { x: 54, y: 18, tm: 1 },
    { x: 54, y: 82, tm: 1 },
    { x: 34, y: 38, tm: 1 },
    { x: 34, y: 62, tm: 1 },
  ];
  const off = players.map((_, i) => ({
    dx: Math.sin(tick * 0.7 + i * 1.3) * 3,
    dy: Math.cos(tick * 0.5 + i * 0.9) * 3,
  }));
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        background: "#0a160a",
        borderRadius: 8,
        overflow: "hidden",
        aspectRatio: "16/9",
      }}
    >
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
        viewBox="0 0 100 60"
        preserveAspectRatio="none"
      >
        <rect
          x="5"
          y="4"
          width="90"
          height="52"
          fill="none"
          stroke="#1a3a1a"
          strokeWidth="0.6"
        />
        <line
          x1="50"
          y1="4"
          x2="50"
          y2="56"
          stroke="#1a3a1a"
          strokeWidth="0.4"
        />
        <circle
          cx="50"
          cy="30"
          r="8"
          fill="none"
          stroke="#1a3a1a"
          strokeWidth="0.4"
        />
        <rect
          x="5"
          y="18"
          width="12"
          height="24"
          fill="none"
          stroke="#1a3a1a"
          strokeWidth="0.4"
        />
        <rect
          x="83"
          y="18"
          width="12"
          height="24"
          fill="none"
          stroke="#1a3a1a"
          strokeWidth="0.4"
        />
      </svg>
      {players.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${p.x + off[i].dx}%`,
            top: `${p.y + off[i].dy}%`,
            transform: "translate(-50%,-50%)",
            transition: "left 1s ease,top 1s ease",
          }}
        >
          <div
            style={{
              width: 11,
              height: 11,
              borderRadius: "50%",
              background: p.tm === 0 ? oliveLight : gold,
              boxShadow:
                p.tm === 0 ? `0 0 8px ${oliveLight}cc` : `0 0 8px ${gold}cc`,
              border: "2px solid rgba(255,255,255,.4)",
            }}
          />
        </div>
      ))}
      <div
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          display: "flex",
          alignItems: "center",
          gap: 5,
          background: olive,
          padding: "3px 8px",
          borderRadius: 3,
        }}
      >
        <div
          style={{
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "white",
            animation: "lp 1s ease-in-out infinite",
          }}
        />
        <span
          style={{
            color: "white",
            fontSize: 8,
            fontFamily: "'Barlow Condensed',sans-serif",
            fontWeight: 800,
            letterSpacing: "0.1em",
          }}
        >
          LIVE
        </span>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 8,
          right: 8,
          display: "flex",
          gap: 6,
        }}
      >
        {[
          { c: oliveLight, l: "Team A" },
          { c: gold, l: "Team B" },
        ].map(({ c, l }) => (
          <div
            key={l}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              background: "rgba(0,0,0,.55)",
              padding: "2px 7px",
              borderRadius: 3,
            }}
          >
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: c,
              }}
            />
            <span
              style={{
                color: "#ccc",
                fontSize: 8,
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 700,
              }}
            >
              {l}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Check({ children, color = olive }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <div
        style={{
          width: 20,
          height: 20,
          borderRadius: 3,
          background: color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="3"
          style={{ width: 12, height: 12 }}
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>
      <span style={{ fontSize: 14, color: "#4a4a38" }}>{children}</span>
    </div>
  );
}

function Tag({ children, bg = olive }) {
  return (
    <span
      style={{
        display: "inline-block",
        background: bg,
        color: "white",
        fontSize: 10,
        fontWeight: 800,
        fontFamily: "'Barlow Condensed',sans-serif",
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        padding: "4px 14px",
        borderRadius: 3,
      }}
    >
      {children}
    </span>
  );
}

function MBar({ label, pct, color = gold }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 12,
          fontWeight: 700,
          marginBottom: 6,
        }}
      >
        <span style={{ color: "rgba(255,255,255,.65)" }}>{label}</span>
        <span style={{ color }}>{pct}%</span>
      </div>
      <div
        style={{
          height: 8,
          borderRadius: 3,
          background: "rgba(255,255,255,.12)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${pct}%`,
            background: color,
            borderRadius: 3,
            transition: "width 2s ease",
          }}
        />
      </div>
    </div>
  );
}

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        border: "1px solid rgba(0,0,0,.08)",
        borderRadius: 10,
        background: white,
        overflow: "hidden",
        marginBottom: 12,
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          padding: "16px 18px",
          border: "none",
          background: "transparent",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontFamily: "'Barlow Condensed',sans-serif",
            fontWeight: 800,
            fontSize: 16,
            color: ink,
            textTransform: "uppercase",
            letterSpacing: ".03em",
          }}
        >
          {q}
        </span>
        <span
          style={{
            width: 24,
            height: 24,
            borderRadius: "50%",
            background: open ? olive : "rgba(116,124,39,.12)",
            color: open ? white : olive,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
            lineHeight: 1,
            fontWeight: 700,
            flexShrink: 0,
            transition: "all .2s ease",
          }}
        >
          {open ? "-" : "+"}
        </span>
      </button>
      {open && (
        <div
          style={{
            padding: "0 18px 16px",
            fontSize: 14,
            lineHeight: 1.75,
            color: "#4a4a38",
          }}
        >
          {a}
        </div>
      )}
    </div>
  );
}

function VitalMonitoringShowcase() {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      label: "Heart Rate",
      desc: "Real-time BPM tracking",
      accent: "#ff4d4f",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
    },
    {
      label: "VO2 Max",
      desc: "Endurance and cardio capacity score",
      accent: "#ff6b6b",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M22 12h-4l-3 8-6-16-3 8H2" />
        </svg>
      ),
    },
    {
      label: "Activity (Steps, Distance, Calories)",
      desc: "Steps, distance and calorie burn tracking",
      accent: "#4caf50",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M13 2L3 14h8l-1 8 11-13h-8l1-7z" />
        </svg>
      ),
    },
    {
      label: "Multi-Sport Tracking",
      desc: "Auto-detect and analyze multiple sport modes",
      accent: "#9ca82d",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <circle cx="7" cy="7" r="3" />
          <circle cx="17" cy="7" r="3" />
          <circle cx="12" cy="17" r="4" />
          <path d="M10 9l2 4 2-4" />
        </svg>
      ),
    },
    {
      label: "Sleep Tracking",
      desc: "Deep, light and REM stage analysis",
      accent: "#7b61ff",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ),
    },
    {
      label: "SpO2",
      desc: "Blood oxygen saturation monitoring",
      accent: "#00c2ff",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M12 2s7 6 7 11a7 7 0 1 1-14 0c0-5 7-11 7-11z" />
        </svg>
      ),
    },
    {
      label: "Stress / HRV",
      desc: "Recovery and stress-resilience insights",
      accent: "#ff9800",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 15s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
        </svg>
      ),
    },
    {
      label: "Battery",
      desc: "Smart power optimization for long sessions",
      accent: "#ffd60a",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <rect x="2" y="7" width="16" height="10" rx="2" />
          <path d="M22 11v2M6 11v2M10 11v2" />
        </svg>
      ),
    },
    {
      label: "Waterproof",
      desc: "IP68 protection for all-weather play",
      accent: "#00e5ff",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M12 2s6 6 6 10a6 6 0 1 1-12 0c0-4 6-10 6-10z" />
          <path d="M8 14c1.2 1 2.6 1.5 4 1.5s2.8-.5 4-1.5" />
        </svg>
      ),
    },
  ];

  const featureLayout = {
    Battery: { angle: 270, radius: 1.15, x: 0, y: -10 },
    Waterproof: { angle: 310, radius: 1.12, x: -96, y: 90 },
    "Heart Rate": { angle: 350, radius: 1.12, x: 6, y: -250 },
    "VO2 Max": { angle: 30, radius: 1.14, x: -60, y: -180 },
    "Activity (Steps, Distance, Calories)": {
      angle: 70,
      radius: 1.16,
      x: 100,
      y: -200,
    },
    "Multi-Sport Tracking": { angle: 110, radius: 1.16, x: 20, y: -200 },
    "Sleep Tracking": { angle: 150, radius: 1.14, x: -80, y: -40 },
    SpO2: { angle: 190, radius: 1.12, x: -6, y: 0 },
    "Stress / HRV": { angle: 230, radius: 1.15, x: -46, y: -48 },
  };

  return (
    <AnimatedSection animationType="fadeInUp">
      <section
        style={{ background: offWhite, padding: "clamp(40px,8vw,80px) 24px" }}
      >
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div
            style={{
              textAlign: "center",
              marginBottom: "clamp(20px,5vw,34px)",
            }}
          >
            <h2
              className="teko"
              style={{
                fontWeight: 700,
                fontSize: "clamp(2rem,5vw,4rem)",
                textTransform: "uppercase",
                color: ink,
                lineHeight: 0.95,
              }}
            >
              Excellent Features for
              <br />
              <span style={{ color: olive }}>Continuous Vital Monitoring</span>
            </h2>
          </div>

          <div className="vm-shell">
            <div className="vm-bg-layer" />
            <div className="vm-grid-lines" />

            <div
              className={`vm-center-image-wrap ${hoveredFeature !== null ? "vm-center-active" : ""}`}
            >
              <div className="vm-center-fade" />
              <div className="vm-center-glow" />
              <img
                src="/watch2.png"
                alt="ARS smart wearable fitness band"
                className="vm-center-image"
              />
            </div>

            {features.map((feature, i) => {
              const layout = featureLayout[feature.label] ?? {
                angle: (360 / features.length) * i,
                radius: 1,
                y: 0,
                x: 0,
              };
              const isHovered = hoveredFeature === i;
              return (
                <div
                  key={feature.label}
                  className="vm-node"
                  style={{
                    "--angle": `${layout.angle}deg`,
                    "--accent": feature.accent,
                    "--nodeRadius": `calc(var(--orbit-radius) * ${layout.radius})`,
                    "--nodeLift": `${layout.y}px`,
                    "--nodeNudgeX": `${layout.x}px`,
                    "--floatDelay": `${i * 0.28}s`,
                    animationPlayState: isHovered ? "paused" : "running",
                  }}
                >
                  <button
                    type="button"
                    className={`vm-node-btn ${isHovered ? "vm-node-hovered" : ""}`}
                    aria-label={feature.label}
                    onMouseEnter={() => setHoveredFeature(i)}
                    onMouseLeave={() => setHoveredFeature(null)}
                    onFocus={() => setHoveredFeature(i)}
                    onBlur={() => setHoveredFeature(null)}
                  >
                    <span className="vm-node-icon">{feature.icon}</span>
                    <span className="vm-node-label">{feature.label}</span>
                  </button>
                  <div className={`vm-tip ${isHovered ? "vm-tip-open" : ""}`}>
                    {feature.label} - {feature.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <style>{`
        .vm-shell {
          --node-size: clamp(60px, 7vw, 80px);
          --orbit-radius: clamp(160px, 24vw, 280px);
          position: relative;
          min-height: clamp(500px, 65vw, 700px);
          border-radius: 28px;
          overflow: hidden;
          background: radial-gradient(circle at 50% 52%, #7f848d 0%, #3a3e47 22%, #16191f 52%, #07090c 78%, #010101 100%);
          border: 1px solid rgba(255,255,255,.08);
          box-shadow: 0 30px 80px rgba(0,0,0,.48), inset 0 0 0 1px rgba(255,255,255,.03);
          isolation: isolate;
        }
        .vm-bg-layer {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, rgba(200,206,214,.2) 0%, rgba(144,151,160,.12) 24%, rgba(32,36,42,.14) 48%, rgba(8,10,12,0) 72%);
          z-index: 0;
          pointer-events: none;
        }
        .vm-grid-lines {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px);
          background-size: 48px 48px;
          opacity: .3;
          z-index: 0;
          pointer-events: none;
        }
        .vm-center-image-wrap {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: clamp(200px, 45vw, 350px);
          display: grid;
          place-items: center;
          z-index: 3;
          transition: transform .28s ease;
        }
        .vm-center-fade {
          position: absolute;
          width: 88%;
          aspect-ratio: 1;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(196,202,210,.44) 0%, rgba(153,160,170,.16) 46%, rgba(130,136,145,0) 76%);
          filter: blur(20px);
          z-index: -2;
          opacity: .85;
        }
        .vm-center-active {
          transform: translate(-50%, -50%) scale(1.03);
        }
        .vm-center-glow {
          position: absolute;
          width: 82%;
          aspect-ratio: 1;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(116,124,39,.52) 0%, rgba(116,124,39,.08) 45%, rgba(116,124,39,0) 72%);
          filter: blur(12px);
          z-index: -1;
          transition: opacity .28s ease;
        }
        .vm-center-active .vm-center-glow {
          opacity: 1;
          filter: blur(16px);
        }
        .vm-center-image {
          width: 100%;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 20px 30px rgba(0,0,0,.55));
          user-select: none;
          pointer-events: none;
        }
        .vm-node {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: rotate(var(--angle)) translateX(var(--nodeRadius)) rotate(calc(-1 * var(--angle))) translateX(var(--nodeNudgeX)) translateY(var(--nodeLift));
          z-index: 4;
          animation: vm-node-float 4.8s ease-in-out infinite;
          animation-delay: var(--floatDelay);
        }
        .vm-node-btn {
          width: var(--node-size);
          height: var(--node-size);
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,.15);
          background: rgba(255,255,255,.06);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 10px 24px rgba(0,0,0,.4);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 7px;
          color: #f8fbff;
          cursor: pointer;
          transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease;
        }
        .vm-node-btn:hover,
        .vm-node-btn:focus-visible,
        .vm-node-hovered {
          transform: scale(1.1);
          border-color: color-mix(in srgb, var(--accent) 70%, white 30%);
          box-shadow: 0 0 0 1px color-mix(in srgb, var(--accent) 70%, white 30%), 0 0 22px color-mix(in srgb, var(--accent) 60%, transparent), 0 12px 28px rgba(0,0,0,.42);
          outline: none;
        }
        .vm-node-icon {
          width: 24px;
          height: 24px;
          display: inline-flex;
          color: var(--accent);
        }
        .vm-node-icon svg {
          width: 100%;
          height: 100%;
        }
        .vm-node-label {
          font-family: 'Barlow Condensed',sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: #f2f6fb;
          text-align: center;
          line-height: 1.2;
          padding: 0 5px;
        }
        .vm-tip {
          position: absolute;
          left: 50%;
          top: calc(100% + 10px);
          transform: translateX(-50%) translateY(4px);
          min-width: 175px;
          max-width: 230px;
          border-radius: 10px;
          border: 1px solid color-mix(in srgb, var(--accent) 55%, white 45%);
          background: rgba(4,9,18,.94);
          color: #f3f7fb;
          font-size: 12px;
          line-height: 1.4;
          text-align: center;
          padding: 8px 10px;
          opacity: 0;
          pointer-events: none;
          transition: opacity .22s ease, transform .22s ease;
          box-shadow: 0 8px 20px rgba(0,0,0,.35);
          z-index: 5;
        }
        .vm-tip-open {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }
        @keyframes vm-node-float {
          0%, 100% { transform: rotate(var(--angle)) translateX(var(--nodeRadius)) rotate(calc(-1 * var(--angle))) translateX(var(--nodeNudgeX)) translateY(var(--nodeLift)); }
          50% { transform: rotate(var(--angle)) translateX(var(--nodeRadius)) rotate(calc(-1 * var(--angle))) translateX(var(--nodeNudgeX)) translateY(calc(var(--nodeLift) - 8px)); }
        }
        @media (max-width: 860px) {
          .vm-shell {
            --orbit-radius: clamp(140px, 26vw, 200px);
            --node-size: clamp(58px, 9vw, 74px);
            min-height: 580px;
            padding: 32px 20px;
          }
          .vm-center-image-wrap {
            width: clamp(180px, 50vw, 300px);
          }
          .vm-node-label {
            font-size: 9px;
          }
          .vm-tip {
            min-width: 145px;
            max-width: 190px;
            font-size: 11px;
          }
        }
        @media (max-width: 680px) {
          .vm-shell {
            --orbit-radius: clamp(120px, 24vw, 160px);
            --node-size: clamp(54px, 8vw, 68px);
            min-height: 520px;
            padding: 28px 14px;
          }
          .vm-center-image-wrap {
            width: clamp(160px, 55vw, 280px);
          }
          .vm-node-label {
            font-size: 8px;
          }
          .vm-tip {
            min-width: 130px;
            max-width: 160px;
            font-size: 10px;
            top: calc(100% + 6px);
          }
        }
        @media (max-width: 560px) {
          .vm-shell {
            --orbit-radius: clamp(100px, 22vw, 140px);
            --node-size: clamp(50px, 7vw, 64px);
            min-height: 480px;
            padding: 20px 10px;
          }
          .vm-center-image-wrap {
            width: clamp(150px, 60vw, 260px);
          }
          .vm-node-icon {
            width: 20px;
            height: 20px;
          }
          .vm-node-label {
            font-size: 7px;
            padding: 0 3px;
          }
          .vm-tip {
            top: calc(100% + 6px);
            font-size: 9px;
            max-width: 140px;
            min-width: 110px;
          }
        }
        @media (max-width: 420px) {
          .vm-shell {
            --orbit-radius: clamp(85px, 20vw, 120px);
            --node-size: clamp(48px, 8vw, 60px);
            min-height: 440px;
            padding: 18px 8px;
            border-radius: 16px;
          }
          .vm-center-image-wrap {
            width: clamp(140px, 65vw, 240px);
          }
          .vm-node-icon {
            width: 18px;
            height: 18px;
          }
          .vm-node-label {
            font-size: 6px;
            padding: 0 2px;
            gap: 3px;
          }
          .vm-tip {
            font-size: 8px;
            max-width: 120px;
            min-width: 95px;
            padding: 6px 8px;
          }
        }
        @media (max-width: 320px) {
          .vm-shell {
            --orbit-radius: clamp(75px, 18vw, 105px);
            --node-size: clamp(44px, 10vw, 56px);
            min-height: 400px;
            padding: 14px 6px;
          }
          .vm-center-image-wrap {
            width: clamp(130px, 70vw, 220px);
          }
          .vm-node-btn {
            gap: 4px;
          }
          .vm-node-icon {
            width: 16px;
            height: 16px;
          }
          .vm-node-label {
            font-size: 5px;
            padding: 0;
            gap: 2px;
          }
          .vm-tip {
            font-size: 7px;
            max-width: 100px;
            min-width: 80px;
            padding: 4px 6px;
          }
        }
      `}</style>
      </section>
    </AnimatedSection>
  );
}

// Animated Section wrapper component
function AnimatedSection({ children, animationType = "fadeInUp", ...props }) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateY(0)"
          : animationType === "fadeInUp"
            ? "translateY(40px)"
            : animationType === "fadeInLeft"
              ? "translateX(-40px)"
              : animationType === "fadeInRight"
                ? "translateX(40px)"
                : "scale(0.9)",
        transition: "all 0.8s ease-out",
      }}
      {...props}
    >
      {children}
    </div>
  );
}

export default function ARSLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");
  const [submitted, setSubmitted] = useState(false);
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
  const upd = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));
  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({
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
  };

  return (
    <div
      style={{
        fontFamily: "'Barlow',sans-serif",
        background: white,
        color: ink,
        overflowX: "hidden",
        margin: 0,
        padding: 0,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&family=Barlow:wght@300;400;500;600;700;900&family=Barlow+Condensed:wght@400;600;700;900&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        body { font-family:'Barlow',sans-serif; background:${white}; }
        .bc  { font-family:'Barlow Condensed',sans-serif !important; }
        .teko { font-family:'Teko',sans-serif !important; }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
        @keyframes lp    { 0%,100%{opacity:1} 50%{opacity:.2} }
        @keyframes scan  { 0%{top:-30%;opacity:0} 10%{opacity:.4} 90%{opacity:.4} 100%{top:130%;opacity:0} }
        .fw    { animation:float 5s ease-in-out infinite; }
        .scanl { position:absolute;left:0;right:0;height:60px;background:linear-gradient(to bottom,transparent,rgba(201,168,76,.18),transparent);animation:scan 3.5s linear infinite;pointer-events:none; }
        .inp   { width:100%;padding:11px 14px;border:2px solid #e0ddd5;border-radius:5px;font-size:13px;font-family:'Barlow',sans-serif;color:${ink};background:${white};outline:none;transition:border-color .2s; }
        .inp:focus { border-color:${gold}; }
        .ch    { transition:transform .22s ease,box-shadow .22s ease;cursor:default; }
        .ch:hover { transform:translateY(-4px);box-shadow:0 16px 40px rgba(0,0,0,.10); }
        .btn-w { background:transparent;border:2px solid ${white};color:${white};padding:13px 28px;font-size:11px;font-weight:800;font-family:'Barlow Condensed',sans-serif;text-transform:uppercase;letter-spacing:.14em;cursor:pointer;transition:all .3s ease; }
        .btn-w:hover { background:rgba(255,255,255,.1); transform:translateY(-2px); box-shadow:0 8px 20px rgba(255,255,255,.15); }
        .btn-o { background:${olive};border:none;color:${white};padding:13px 28px;font-size:11px;font-weight:800;font-family:'Barlow Condensed',sans-serif;text-transform:uppercase;letter-spacing:.14em;cursor:pointer;transition:all .3s ease;display:inline-flex;align-items:center;gap:8px; }
        .btn-o:hover { background:${oliveDark}; transform:translateY(-2px); box-shadow:0 8px 20px rgba(116,124,39,.3); }
        .btn-s { background:${olive};border:none;color:${white};width:100%;display:flex;align-items:center;justify-content:center;gap:8px;padding:16px;font-size:13px;font-weight:800;font-family:'Barlow Condensed',sans-serif;text-transform:uppercase;letter-spacing:.14em;border-radius:4px;cursor:pointer;transition:all .3s ease; }
        .btn-s:hover { background:${oliveDark}; transform:translateY(-2px); box-shadow:0 8px 20px rgba(116,124,39,.3); }
        .nl   { font-family:'Barlow Condensed',sans-serif;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.12em;color:#888875;text-decoration:none;transition:all .3s ease; }
        .nl:hover { color:${olive}; transform:translateY(-1px); }
        a { text-decoration:none; }

        /* Responsive Styles */
        @media(max-width:1024px){
          #technology > div > div { gap: 32px !important; }
          #technology img { max-width: 500px !important; }
          #products { min-height: clamp(550px, 90vh, 850px) !important; }
          .hero-content-wrapper { padding: 100px 24px 80px !important; }
          .hero-flex-container { padding: 80px 24px 60px 0 !important; }
          .hero-text-content { margin-left: -40px !important; margin-top: -40px !important; }
        }
        @media(max-width:768px){
          #products { min-height: clamp(500px, 85vh, 800px) !important; }
          .hero-content-wrapper { padding: 80px 20px 60px !important; }
          .hero-flex-container {
            padding: 60px 0 40px 0 !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 32px !important;
          }
          .hero-text-content {
            margin-left: 0 !important;
            margin-top: 0 !important;
            flex: 1 1 100% !important;
          }
          .hero-text-content h1 { font-size: 2.5rem !important; line-height: 1 !important; }
          .hero-text-content p { font-size: 13px !important; }
          .hero-text-content .btn-w, .hero-text-content .btn-o { padding: 11px 20px !important; font-size: 10px !important; }
          .hero-stats-container {
            flex-direction: row !important;
            gap: 24px !important;
            justify-content: flex-start !important;
            padding-bottom: 0 !important;
            width: 100% !important;
          }
          .hero-stats-container > div { text-align: center !important; }
          #technology > div > div { flex-direction: column !important; text-align: center !important; }
          #technology img { max-width: 100% !important; }
          #technology h2 { text-align: center !important; }
          #technology p { text-align: center !important; margin: 0 auto !important; }
        }
        @media(max-width:480px){
          #products { min-height: clamp(450px, 80vh, 700px) !important; }
          .hero-content-wrapper { padding: 60px 16px 40px !important; }
          .hero-flex-container { padding: 40px 0 30px 0 !important; }
          .hero-text-content h1 { font-size: 2rem !important; }
          .hero-text-content p { max-width: 100% !important; }
          .hero-stats-container {
            flex-direction: column !important;
            gap: 20px !important;
            align-items: center !important;
          }
          .hero-stats-container > div p:first-child { font-size: 32px !important; }
          #technology { padding: 50px 16px !important; }
          #technology h2 { font-size: 2rem !important; }
        }
        /* 3D Model Section Responsive */
        @media(max-width:768px){
          model-viewer {
            height: 300px !important;
          }
          .technology-model-wrap {
            height: 320px !important;
          }
          .technology-model-viewer {
            width: 100% !important;
            height: 100% !important;
            display: block !important;
          }
          .feat-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 16px !important;
          }
        }
        @media(max-width:480px){
          model-viewer {
            height: 250px !important;
          }
          .technology-model-wrap {
            height: 260px !important;
          }
          .feat-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }
        }
      `}</style>

      {/* ── NAVBAR ─────────────────────────────────────────── */}
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
              <svg
                viewBox="0 0 24 24"
                fill="white"
                style={{ width: 18, height: 18 }}
              >
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

          <div
            style={{ display: "flex", alignItems: "center", gap: 32 }}
            className="hidden-mobile"
          >
            {["Products", "Technology", "Team", "Analytics", "Contact"].map(
              (l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="nl">
                  {l}
                </a>
              ),
            )}
          </div>

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

        <style>{`
          @media(max-width:768px){
            .hidden-mobile{display:none!important;}
            .show-mobile{display:block!important;}
          }
        `}</style>

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
            {["Products", "Technology", "Team", "Analytics", "Contact"].map(
              (l) => (
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

      {/* ── HERO ────────────────────────────────────────────── */}
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

        {/* grid */}
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
        {/* slash accents */}
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

        <div
          className="hero-content-wrapper"
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "120px 24px 108px", // Changed 80px to 200px to push everything down
            display: "flex",
            flexDirection: "column", // Keeps text and stats in a vertical stack
            gap: 48,
            position: "relative",
            zIndex: 4,
          }}
        >
          {/* copy */}
          <div
            className="hero-flex-container"
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              padding: "160px 80px 100px 0", // Master control for vertical position
              display: "flex",
              alignItems: "flex-end", // Aligns bottom of text with bottom of stats
              justifyContent: "space-between", // Pushes text left, stats right
              gap: 40,
              flexWrap: "wrap",
              position: "relative",
              zIndex: 4,
            }}
          >
            {/* LEFT CONTENT: TEXT */}
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
                ARS Performance Tracker integrates cutting-edge performance
                tracking technology into a compact, wearable device. Built for
                any sport, any athlete, and any training environment.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <a href="#contact">
                  <button className="btn-w bc">Contact Us</button>
                </a>
              </div>
            </AnimatedSection>

            {/* RIGHT CONTENT: STATS */}
            <div
              className="hero-stats-container"
              style={{
                flex: "0 1 auto", // Takes only needed space
                display: "flex",
                gap: 40, // Horizontal spacing between stat items
                paddingBottom: "10px", // Micro-adjustment to match button baseline
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

        {/* WIMU diagonal slash */}
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

      {/* ── BUILT FOR MOVEMENT ──────────────────────────────── */}
      <section
        id="technology"
        style={{ background: white, padding: "80px 24px" }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 48,
              alignItems: "center",
            }}
          >
            <AnimatedSection
              animationType="fadeInLeft"
              style={{ flex: "1 1 400px", maxWidth: 680 }}
            >
              <div
                style={{
                  width: 44,
                  height: 4,
                  background: gold,
                  borderRadius: 2,
                  marginBottom: 20,
                }}
              />
              <h2
                className="teko"
                style={{
                  fontWeight: 700,
                  fontSize: "clamp(2.5rem,5vw,5rem)",
                  textTransform: "uppercase",
                  lineHeight: 1,
                  color: ink,
                  marginBottom: 20,
                }}
              >
                Built for Movement,
                <br />
                Built for Scale.
              </h2>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.8,
                  color: midGray,
                  maxWidth: "54ch",
                }}
              >
                The ARS Performance Tracker delivers robust athlete monitoring
                in a sleek, wrist-worn form factor. Whether you're running
                academy programs or scaling athlete development, this device
                combines real-time data capture with long battery life and
                seamless platform integration.
              </p>
            </AnimatedSection>

            <AnimatedSection
              animationType="fadeInRight"
              style={{
                flex: "1 1 300px",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "clamp(300px, 50vh, 400px)",
              }}
            >
              {/* Glow Background */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `radial-gradient(ellipse 65% 65% at 55% 50%,rgba(201,168,76,.12),transparent)`,
                  pointerEvents: "none",
                }}
              />

              {/* THE 3D MODEL CONTAINER (REPLACED INNER PART) */}
              <div
                className="technology-model-wrap"
                style={{
                  width: "100%",
                  height: "clamp(280px, 42vw, 400px)",
                  minHeight: 280,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <model-viewer
                  class="technology-model-viewer"
                  src="/smartwatch.glb"
                  ar
                  camera-controls
                  auto-rotate
                  exposure="1.2"
                  environment-image="neutral"
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: "100%",
                    display: "block",
                    background: "transparent",
                  }}
                ></model-viewer>
              </div>

              {/* KEEPING YOUR HEART RATE STAT (STAYS THE SAME) */}
              <div
                style={{
                  position: "absolute",
                  top: 16,
                  left: 0,
                  background: olive,
                  padding: "8px 12px",
                  zIndex: 10,
                }}
              >
                <p
                  className="bc"
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: ".1em",
                    color: "rgba(255,255,255,.7)",
                  }}
                >
                  Heart Rate
                </p>
                <p
                  className="bc"
                  style={{ fontSize: 22, fontWeight: 900, color: white }}
                >
                  142{" "}
                  <span style={{ fontSize: 12, fontWeight: 400, opacity: 0.6 }}>
                    bpm
                  </span>
                </p>
              </div>

              {/* KEEPING YOUR SPRINT SPEED STAT (STAYS THE SAME) */}
              <div
                style={{
                  position: "absolute",
                  bottom: 16,
                  left: 0,
                  background: "rgba(0,0,0,.75)",
                  border: `1px solid ${gold}50`,
                  padding: "8px 12px",
                  zIndex: 10,
                }}
              >
                <p
                  className="bc"
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: ".1em",
                    color: "rgba(255,255,255,.7)",
                  }}
                >
                  Sprint Speed
                </p>
                <p
                  className="bc"
                  style={{ fontSize: 22, fontWeight: 900, color: goldLight }}
                >
                  34.2{" "}
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 400,
                      color: "rgba(255,255,255,.6)",
                    }}
                  >
                    km/h
                  </span>
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── tab bar ─────────────────────────────────────── */}
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
                  activeTab === t
                    ? `3px solid ${gold}`
                    : "3px solid transparent",
                transition: "color .2s",
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <section
        id="sec-features"
        style={{
          background:
            "linear-gradient(135deg, #f5f3f0 0%, #e8e5e0 50%, #f0ede8 100%)",
          padding: "80px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Energetic accent overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(ellipse at top left, ${olive}15, transparent 50%), radial-gradient(ellipse at bottom right, ${gold}12, transparent 50%)`,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2
              className="teko"
              style={{
                fontWeight: 700,
                fontSize: "clamp(2rem,5vw,4rem)",
                textTransform: "uppercase",
                color: ink,
                lineHeight: 0.95,
              }}
            >
              Key Health <span style={{ color: olive }}>Features</span>
            </h2>
          </div>
          <div
            className="feat-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5,1fr)",
              gap: 20,
            }}
          >
            {[
              {
                label: "Medical Grade Heart Rate",
                c: olive,
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    style={{ width: 36, height: 36 }}
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                ),
              },
              {
                label: "HRV Analysis",
                c: gold,
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    style={{ width: 36, height: 36 }}
                  >
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                ),
              },
              {
                label: "Blood Oxygen (SpO₂)",
                c: olive,
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    style={{ width: 36, height: 36 }}
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12h8M12 8v8" />
                  </svg>
                ),
              },
              {
                label: "Skin Temperature",
                c: gold,
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    style={{ width: 36, height: 36 }}
                  >
                    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
                  </svg>
                ),
              },
              {
                label: "Activity Tracking",
                c: olive,
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    style={{ width: 36, height: 36 }}
                  >
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                ),
              },
              {
                label: "Stress Monitor",
                c: gold,
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    style={{ width: 36, height: 36 }}
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 15s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                ),
              },
              {
                label: "Automatic Sleep Tracking",
                c: olive,
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    style={{ width: 36, height: 36 }}
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                ),
              },
              {
                label: "VO₂ Max",
                c: gold,
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    style={{ width: 36, height: 36 }}
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                ),
              },
              {
                label: "Blood Pressure Monitor",
                c: olive,
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    style={{ width: 36, height: 36 }}
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                ),
              },
              {
                label: "Long Battery Life",
                c: gold,
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    style={{ width: 36, height: 36 }}
                  >
                    <rect x="2" y="7" width="16" height="10" rx="2" />
                    <path d="M22 11v2" />
                    <path d="M6 11v2M10 11v2" />
                  </svg>
                ),
              },
            ].map((f, idx) => (
              <AnimatedSection
                key={f.label}
                animationType="fadeInUp"
                style={{
                  transitionDelay: `${idx * 0.15}s`,
                  transitionDuration: "1.2s",
                }}
              >
                <div
                  className="ch"
                  style={{
                    background: white,
                    borderRadius: 14,
                    padding: "28px 16px",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 14,
                    boxShadow: "0 2px 12px rgba(0,0,0,.06)",
                    border: `1.5px solid ${f.c}25`,
                  }}
                >
                  <div
                    style={{
                      color: f.c,
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      background: `${f.c}10`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {f.icon}
                  </div>
                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: ink,
                      lineHeight: 1.4,
                    }}
                  >
                    {f.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══ OVERVIEW — Architecture image placeholder ══ */}
      <AnimatedSection animationType="fadeInUp">
        <section
          id="sec-overview"
          style={{ background: white, padding: "80px 24px" }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2
                className="teko"
                style={{
                  fontWeight: 700,
                  fontSize: "clamp(2rem,5vw,4rem)",
                  textTransform: "uppercase",
                  color: ink,
                  lineHeight: 0.95,
                }}
              >
                System <span style={{ color: olive }}>Architecture</span>
              </h2>
              <p style={{ fontSize: 14, color: midGray, marginTop: 12 }}>
                How ARS Tracker connects your athletes to the platform
              </p>
            </div>
            {/* Architecture image — replace src with your image */}
            <div
              style={{
                background: offWhite,
                borderRadius: 16,
                border: `2px dashed ${olive}50`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 360,
                gap: 16,
              }}
            >
              <img
                src="/architecture.png"
                alt="System Architecture"
                style={{ maxWidth: "100%", borderRadius: 12, display: "block" }}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                  padding: 40,
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={olive}
                  strokeWidth="1.5"
                  style={{ width: 48, height: 48 }}
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
                <p
                  className="bc"
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: midGray,
                    textTransform: "uppercase",
                    letterSpacing: ".1em",
                  }}
                >
                  Add your architecture image here
                </p>
                <p style={{ fontSize: 12, color: midGray }}>
                  Place{" "}
                  <code
                    style={{
                      background: "#eee",
                      padding: "2px 6px",
                      borderRadius: 4,
                    }}
                  >
                    /architecture.png
                  </code>{" "}
                  in your{" "}
                  <code
                    style={{
                      background: "#eee",
                      padding: "2px 6px",
                      borderRadius: 4,
                    }}
                  >
                    /public
                  </code>{" "}
                  folder
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <VitalMonitoringShowcase />

      {/* ── TEAM DEPLOYMENT ─────────────────────────────────── */}
      <div
        style={{ background: "#0d1117", paddingTop: 0, position: "relative" }}
      >
        <div
          style={{
            height: 56,
            background: "#f7f6f1",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* dotted zigzag row */}
          <svg
            viewBox="0 0 1440 56"
            preserveAspectRatio="none"
            style={{ display: "block", width: "100%", height: 56 }}
          >
            <defs>
              <pattern
                id="dots"
                x="0"
                y="0"
                width="28"
                height="28"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="14" cy="14" r="2.5" fill="#747c27" opacity="0.25" />
              </pattern>
            </defs>
            <rect width="1440" height="56" fill="url(#dots)" />
            <polygon points="0,56 1440,0 1440,56" fill="#0d1117" />
          </svg>
        </div>
      </div>

      {/* ══ BENTO GRID ══ */}
      <AnimatedSection animationType="fadeInUp">
        <section style={{ background: "#0d1117", padding: "0 20px 80px" }}>
          <div style={{ maxWidth: 1160, margin: "0 auto" }}>
            <div style={{ textAlign: "center", padding: "0 0 52px" }}>
              <h2
                className="teko"
                style={{
                  fontWeight: 700,
                  fontSize: "clamp(2rem,5vw,4rem)",
                  textTransform: "uppercase",
                  lineHeight: 0.95,
                  color: "#ffffff",
                }}
              >
                Everything Your Body
                <br />
                <span style={{ color: "#c9a84c" }}>Needs to Know</span>
              </h2>
            </div>

            <style>{`
            .bento-grid{ display:grid; gap:12px; }
            .bento-card{
              border-radius:18px;
              overflow:hidden;
              position:relative;
              min-height:240px;
              background-size:cover;
              background-position:center;
              transition: transform 0.3s ease, box-shadow 0.3s ease;
              cursor: pointer;
            }
            .bento-card:hover{
              transform: translateY(-8px);
              box-shadow: 0 20px 40px rgba(0,0,0,0.4);
            }
            .bento-card::before{ content:''; position:absolute; inset:0; z-index:1; transition: background 0.3s ease; }
            .bento-card:hover::before{ background: rgba(0,0,0,0.2); }
            .bento-label{
              position:absolute;
              bottom:0;
              left:0;
              right:0;
              padding:20px 22px;
              z-index:2;
              background:linear-gradient(to top,rgba(0,0,0,.82) 0%,rgba(0,0,0,.2) 60%,transparent 100%);
              transition: padding 0.3s ease;
            }
            .bento-card:hover .bento-label{ padding:24px 22px; }
            .bento-label h3{ font-family:'Teko',sans-serif; font-weight:700; font-size:1.5rem; text-transform:uppercase; color:#fff; line-height:1.05; margin:0; }
            .bento-label p{ font-size:12px; color:rgba(255,255,255,.65); margin:5px 0 0; line-height:1.5; }
            .bento-tag{
              position:absolute;
              top:16px;
              left:18px;
              z-index:3;
              display:inline-flex;
              align-items:center;
              gap:6px;
              background:rgba(0,0,0,.55);
              backdrop-filter:blur(6px);
              border:1px solid rgba(255,255,255,.15);
              border-radius:20px;
              padding:4px 12px;
              transition: all 0.3s ease;
            }
            .bento-card:hover .bento-tag{
              background:rgba(201,168,76,.75);
              border-color:rgba(201,168,76,.4);
              transform: scale(1.05);
            }
            .bento-tag span{ font-family:'Barlow Condensed',sans-serif; font-size:10px; font-weight:800; text-transform:uppercase; letter-spacing:.12em; color:#c9a84c; }
            .bento-card:hover .bento-tag span{ color:#fff; }
            /* desktop 2-col asymmetric */
            @media(min-width:900px){
              .bento-grid{ grid-template-columns:1.15fr 1fr; grid-template-rows:auto auto auto; }
              .bento-card-tall{ grid-row:span 2; min-height:500px; }
              .bento-card-wide{ grid-column:span 2; min-height:200px; }
            }
            /* tablet */
            @media(min-width:560px) and (max-width:899px){
              .bento-grid{ grid-template-columns:1fr 1fr; }
              .bento-card-tall{ grid-row:span 1; min-height:260px; }
              .bento-card-wide{ grid-column:span 2; }
            }
            /* mobile */
            @media(max-width:559px){
              .bento-grid{ grid-template-columns:1fr; }
              .bento-card-tall,.bento-card-wide{ grid-column:span 1; grid-row:span 1; min-height:240px; }
            }
          `}</style>

            <div className="bento-grid">
              {/* 1 — Heart Rate — tall left */}
              <div
                className="bento-card bento-card-tall"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80&fit=crop')`,
                  backgroundPosition: "center",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg,rgba(5,25,5,.35) 0%,rgba(0,0,0,.6) 100%)",
                    zIndex: 1,
                  }}
                />
                {/* green glow dot */}
                <div
                  style={{
                    position: "absolute",
                    top: "40%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(ellipse,rgba(0,255,70,.35) 0%,transparent 70%)",
                    zIndex: 2,
                    pointerEvents: "none",
                  }}
                />
                {/* live pulse bar */}
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 18,
                    zIndex: 3,
                    background: "rgba(0,0,0,.55)",
                    backdropFilter: "blur(6px)",
                    border: "1px solid rgba(116,124,39,.4)",
                    borderRadius: 10,
                    padding: "8px 14px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      marginBottom: 4,
                    }}
                  >
                    <div
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: "#00e85a",
                        boxShadow: "0 0 8px #00e85a",
                        animation: "lp .9s ease-in-out infinite",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "'Barlow Condensed',sans-serif",
                        fontSize: 9,
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: ".12em",
                        color: "#9ca82d",
                      }}
                    >
                      Live
                    </span>
                  </div>
                  <svg viewBox="0 0 72 22" style={{ width: 72, height: 22 }}>
                    <polyline
                      points="0,11 8,11 13,3 18,19 22,1 28,21 32,11 44,11 49,3 54,19 58,1 64,21 68,11 72,11"
                      fill="none"
                      stroke="#00e85a"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontSize: 18,
                      fontWeight: 900,
                      color: "#fff",
                      lineHeight: 1,
                      marginTop: 4,
                    }}
                  >
                    72 <span style={{ fontSize: 10, opacity: 0.6 }}>bpm</span>
                  </p>
                </div>
                <div className="bento-tag">
                  <span>PPG Sensor</span>
                </div>
                <div className="bento-label">
                  <h3>
                    24/7 Continuous
                    <br />
                    Heart Rate Monitor
                  </h3>
                  <p>Optical PPG · Always-on detection</p>
                </div>
              </div>

              {/* 2 — SpO2 — top right */}
              <div
                className="bento-card"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&fit=crop')`,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg,rgba(10,15,40,.4) 0%,rgba(0,0,0,.7) 100%)",
                    zIndex: 1,
                  }}
                />
                {/* SpO2 gauge */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: 24,
                    transform: "translateY(-60%)",
                    zIndex: 2,
                  }}
                >
                  <svg viewBox="0 0 100 100" style={{ width: 90, height: 90 }}>
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="rgba(255,255,255,.1)"
                      strokeWidth="9"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#e05555"
                      strokeWidth="9"
                      strokeDasharray="251"
                      strokeDashoffset="35"
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                    <text
                      x="50"
                      y="46"
                      textAnchor="middle"
                      fill="white"
                      fontSize="20"
                      fontWeight="900"
                      fontFamily="'Barlow Condensed',sans-serif"
                    >
                      97%
                    </text>
                    <text
                      x="50"
                      y="60"
                      textAnchor="middle"
                      fill="rgba(255,255,255,.5)"
                      fontSize="9"
                      fontFamily="'Barlow',sans-serif"
                    >
                      SpO₂
                    </text>
                  </svg>
                </div>
                <div className="bento-tag">
                  <span>Optical Sensor</span>
                </div>
                <div className="bento-label">
                  <h3>
                    Oxygen Saturation
                    <br />
                    Detection
                  </h3>
                  <p>±2% accuracy · Continuous monitoring</p>
                </div>
              </div>

              {/* 3 — Multi Sport — mid right */}
              <div
                className="bento-card"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80&fit=crop')`,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg,rgba(5,20,5,.3) 0%,rgba(0,0,0,.72) 100%)",
                    zIndex: 1,
                  }}
                />
                {/* sport icons row */}
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 3,
                    display: "flex",
                    gap: 10,
                  }}
                >
                  {["🏃", "🚴", "🏊", "⚽", "🏋"].map((e) => (
                    <div
                      key={e}
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: "50%",
                        background: "rgba(0,0,0,.55)",
                        backdropFilter: "blur(4px)",
                        border: "1px solid rgba(201,168,76,.35)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 16,
                      }}
                    >
                      {e}
                    </div>
                  ))}
                </div>
                <div className="bento-tag" style={{ top: 64 }}>
                  <span>100+ Sport Modes</span>
                </div>
                <div className="bento-label">
                  <h3>
                    Multi-Sport
                    <br />
                    <span style={{ color: "#c9a84c" }}>Tracking</span>
                  </h3>
                  <p>Football · Cricket · Swimming · Running · Cycling</p>
                </div>
              </div>

              {/* 4 — Battery — wide strip */}
              <div
                className="bento-card bento-card-wide"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=800&q=80&fit=crop')`,
                  minHeight: 190,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(90deg,rgba(0,0,0,.85) 0%,rgba(0,0,0,.45) 50%,rgba(0,0,0,.1) 100%)",
                    zIndex: 1,
                  }}
                />
                {/* battery bars */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: 220,
                    transform: "translateY(-50%)",
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    minWidth: 200,
                  }}
                >
                  {[
                    { label: "Normal Use", days: 10, pct: 100, c: "#9ca82d" },
                    { label: "Standby Mode", days: 20, pct: 100, c: "#c9a84c" },
                    { label: "GPS Active", days: 3, pct: 30, c: "#e8c96a" },
                  ].map((b) => (
                    <div key={b.label}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: 4,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Barlow Condensed',sans-serif",
                            fontSize: 10,
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: ".1em",
                            color: "rgba(255,255,255,.6)",
                          }}
                        >
                          {b.label}
                        </span>
                        <span
                          style={{
                            fontFamily: "'Barlow Condensed',sans-serif",
                            fontSize: 10,
                            fontWeight: 800,
                            color: b.c,
                          }}
                        >
                          {b.days} days
                        </span>
                      </div>
                      <div
                        style={{
                          height: 5,
                          borderRadius: 3,
                          background: "rgba(255,255,255,.12)",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            width: `${b.pct}%`,
                            height: "100%",
                            background: b.c,
                            borderRadius: 3,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bento-tag">
                  <span>Battery</span>
                </div>
                <div className="bento-label">
                  <h3>
                    7–10 Days Normal ·{" "}
                    <span style={{ color: "#c9a84c" }}>20 Days Standby</span>
                  </h3>
                </div>
              </div>

              {/* 5 — IP68 Water */}
              <div
                className="bento-card"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800&q=80&fit=crop')`,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg,rgba(0,20,40,.35) 0%,rgba(0,0,0,.7) 100%)",
                    zIndex: 1,
                  }}
                />
                {/* depth badge */}
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 18,
                    zIndex: 3,
                    background: "rgba(0,30,60,.7)",
                    backdropFilter: "blur(6px)",
                    border: "1px solid rgba(58,140,255,.4)",
                    borderRadius: 10,
                    padding: "10px 16px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontSize: 26,
                      fontWeight: 900,
                      color: "#5ab4ff",
                      lineHeight: 1,
                    }}
                  >
                    10<span style={{ fontSize: 13, opacity: 0.7 }}>m</span>
                  </p>
                  <p
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontSize: 9,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,.5)",
                      letterSpacing: ".1em",
                    }}
                  >
                    depth
                  </p>
                </div>
                <div className="bento-tag">
                  <span>IP68</span>
                </div>
                <div className="bento-label">
                  <h3>
                    Dustproof &amp;
                    <br />
                    Water Resistant
                  </h3>
                  <p>10m depth · 2 hours · IP68 certified</p>
                </div>
              </div>

              {/* 6 — App */}
              <div
                className="bento-card"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&q=80&fit=crop')`,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg,rgba(10,20,5,.3) 0%,rgba(0,0,0,.75) 100%)",
                    zIndex: 1,
                  }}
                />
                {/* connected dots */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-55%)",
                    zIndex: 2,
                  }}
                >
                  <svg viewBox="0 0 80 40" style={{ width: 80, height: 40 }}>
                    <circle
                      cx="10"
                      cy="20"
                      r="8"
                      fill="none"
                      stroke="#c9a84c"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="18"
                      y1="20"
                      x2="32"
                      y2="20"
                      stroke="#c9a84c"
                      strokeWidth="1"
                      strokeDasharray="3 2"
                    />
                    <rect
                      x="32"
                      y="12"
                      width="16"
                      height="16"
                      rx="3"
                      fill="none"
                      stroke="#9ca82d"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="48"
                      y1="20"
                      x2="62"
                      y2="20"
                      stroke="#c9a84c"
                      strokeWidth="1"
                      strokeDasharray="3 2"
                    />
                    <circle
                      cx="70"
                      cy="20"
                      r="8"
                      fill="none"
                      stroke="#c9a84c"
                      strokeWidth="1.5"
                    />
                    <text
                      x="10"
                      y="36"
                      textAnchor="middle"
                      fill="rgba(255,255,255,.45)"
                      fontSize="6"
                      fontFamily="'Barlow',sans-serif"
                    >
                      Watch
                    </text>
                    <text
                      x="40"
                      y="36"
                      textAnchor="middle"
                      fill="rgba(255,255,255,.45)"
                      fontSize="6"
                      fontFamily="'Barlow',sans-serif"
                    >
                      Cloud
                    </text>
                    <text
                      x="70"
                      y="36"
                      textAnchor="middle"
                      fill="rgba(255,255,255,.45)"
                      fontSize="6"
                      fontFamily="'Barlow',sans-serif"
                    >
                      App
                    </text>
                  </svg>
                </div>
                <div className="bento-tag">
                  <span>Companion App</span>
                </div>
                <div className="bento-label">
                  <h3>
                    Watch &amp; App
                    <br />
                    <span style={{ color: "#c9a84c" }}>Easy Tracking</span>
                  </h3>
                  <p>Sync data · View trends · Share with coach</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ══ BENTO DIVIDER BOTTOM — dot grid fade ══ */}
      <div
        style={{
          background: "#0d1117",
          position: "relative",
          height: 60,
          overflow: "hidden",
        }}
      >
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: 60 }}
        >
          <defs>
            <pattern
              id="dots2"
              x="0"
              y="0"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="12" cy="12" r="2" fill="#747c27" opacity="0.2" />
            </pattern>
            <linearGradient id="dotfade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0d1117" stopOpacity="0" />
              <stop offset="100%" stopColor="white" stopOpacity="1" />
            </linearGradient>
          </defs>
          <rect width="1440" height="60" fill="url(#dots2)" />
          <rect width="1440" height="60" fill="url(#dotfade)" />
        </svg>
      </div>

      <section
        id="sec-specifications"
        style={{ background: white, padding: "80px 24px" }}
      >
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2
              className="teko"
              style={{
                fontWeight: 700,
                fontSize: "clamp(2rem,5vw,4rem)",
                textTransform: "uppercase",
                color: ink,
                lineHeight: 0.95,
              }}
            >
              Full <span style={{ color: olive }}>Specifications</span>
            </h2>
          </div>
          <div
            style={{
              background: offWhite,
              borderRadius: 12,
              overflow: "hidden",
              border: "1px solid rgba(0,0,0,.07)",
            }}
          >
            {[
              {
                heading: "Hardware",
                rows: [
                  ["PPG Sensor", "Heart Rate + SpO₂ (optical)"],
                  ["Skin Temperature", "Infrared thermal sensor"],
                  ["Accelerometer", "3D / 6D motion sensor"],
                  ["RGB LED", "Optical sensing emitter"],
                  ["Nordic BLE Chip", "Main processor + Bluetooth 5.0"],
                  ["Li-ion Battery", "~90-95 mAh"],
                ],
              },
              {
                heading: "Connectivity",
                rows: [
                  ["GPS / LPS", "Internal GPS + Local Positioning"],
                  ["Bluetooth", "BLE 5.0"],
                  ["USB", "USB-C magnetic charging"],
                ],
              },
              {
                heading: "Performance",
                rows: [
                  ["Battery Life", "Up to 48 hours"],
                  ["GPS Mode", "Up to 20 hours"],
                  ["Charging", "1.5 hours full charge"],
                ],
              },
              {
                heading: "Physical",
                rows: [
                  ["Weight", "28g (without strap)"],
                  ["Dimensions", "40 x 34 x 10 mm"],
                  ["Water Resistance", "IP68 (50m)"],
                  ["Display", '1.4" AMOLED'],
                ],
              },
            ].map((group) => (
              <div key={group.heading}>
                <div
                  style={{
                    background: `linear-gradient(90deg,${olive},${oliveDark})`,
                    padding: "10px 20px",
                  }}
                >
                  <span
                    className="teko"
                    style={{
                      fontWeight: 700,
                      fontSize: 17,
                      color: white,
                      textTransform: "uppercase",
                      letterSpacing: ".08em",
                    }}
                  >
                    {group.heading}
                  </span>
                </div>
                {group.rows.map(([label, value], i) => (
                  <div
                    key={label}
                    className="spec-row"
                    style={{
                      display: "flex",
                      padding: "13px 20px",
                      background: i % 2 === 0 ? "rgba(116,124,39,.04)" : white,
                      borderBottom: "1px solid rgba(0,0,0,.05)",
                    }}
                  >
                    <span
                      className="spec-label"
                      style={{
                        flex: "0 0 clamp(120px,30%,200px)",
                        fontFamily: "'Barlow Condensed',sans-serif",
                        fontWeight: 700,
                        fontSize: 13,
                        textTransform: "uppercase",
                        letterSpacing: ".06em",
                        color: midGray,
                      }}
                    >
                      {label}
                    </span>
                    <span
                      style={{
                        flex: 1,
                        fontSize: 14,
                        color: ink,
                        fontWeight: 500,
                      }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="sec-faqs"
        style={{ background: offWhite, padding: "80px 24px" }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2
              className="teko"
              style={{
                fontWeight: 700,
                fontSize: "clamp(2rem,5vw,4rem)",
                textTransform: "uppercase",
                color: ink,
                lineHeight: 0.95,
              }}
            >
              Frequently Asked <span style={{ color: olive }}>Questions</span>
            </h2>
          </div>
          {[
            [
              "What sports does the ARS tracker support?",
              "The ARS tracker supports 100+ sport modes including football, basketball, cricket, hockey, athletics, and swimming - detected automatically or selected manually.",
            ],
            [
              "How long does the battery last?",
              "Up to 48 hours in standard mode, 20 hours with continuous GPS. Full charge takes 1.5 hours via the magnetic USB-C dock.",
            ],
            [
              "Is the device waterproof?",
              "Yes. IP68 rated - waterproof to 50 metres. Safe for swimming, rain, and all wet-weather sports.",
            ],
            [
              "How accurate is the GPS tracking?",
              "Within 2-3 metres under open sky. Indoors, our LPS module provides sub-1-metre accuracy using UWB anchors.",
            ],
            [
              "Can I wear it under a jersey?",
              "Yes. The compact form (40x34x10mm, 28g) fits inside a standard vest pocket or can be worn on the wrist.",
            ],
            [
              "How do I connect it to my coaching platform?",
              "Via our open REST API and Bluetooth. We provide SDKs for major platforms including Hudl, Catapult, and custom systems.",
            ],
          ].map(([q, a], i) => (
            <FAQ key={i} q={q} a={a} />
          ))}
        </div>
      </section>

      {/* ── CONTACT FORM ────────────────────────────────────── */}
      <AnimatedSection animationType="fadeInUp">
        <section
          id="contact"
          style={{ background: white, padding: "80px 24px" }}
        >
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div
                style={{
                  width: 44,
                  height: 4,
                  background: gold,
                  borderRadius: 2,
                  margin: "0 auto 16px",
                }}
              />
              <Tag bg={gold}>Get Started</Tag>
              <h2
                className="teko"
                style={{
                  fontWeight: 700,
                  fontSize: "clamp(2rem,4vw,3rem)",
                  textTransform: "uppercase",
                  color: ink,
                  marginTop: 16,
                }}
              >
                Get in Touch
              </h2>
              <p
                style={{
                  marginTop: 12,
                  fontSize: 14,
                  color: midGray,
                  maxWidth: 460,
                  margin: "12px auto 0",
                }}
              >
                Ready to bring ARS Performance Tracking to your academy or team?
                Fill in your details and our team will reach out.
              </p>
            </div>
            <form
              onSubmit={submit}
              style={{
                background: offWhite,
                borderRadius: 8,
                padding: 40,
                border: "2px solid #e8e4dc",
              }}
            >
              {submitted && (
                <div
                  style={{
                    marginBottom: 20,
                    padding: "12px 16px",
                    background: olive,
                    color: white,
                    borderRadius: 4,
                    fontSize: 14,
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    style={{ width: 16, height: 16 }}
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Message sent! Our team will be in touch soon.
                </div>
              )}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
                  gap: 16,
                }}
              >
                {[
                  { k: "firstName", l: "First Name", t: "text", p: "John" },
                  { k: "lastName", l: "Last Name", t: "text", p: "Smith" },
                  {
                    k: "email",
                    l: "Work Email",
                    t: "email",
                    p: "john@academy.com",
                  },
                  {
                    k: "phone",
                    l: "Phone Number",
                    t: "tel",
                    p: "+91 98765 43210",
                  },
                  {
                    k: "organization",
                    l: "Organization",
                    t: "text",
                    p: "ARS Sports Academy",
                  },
                  {
                    k: "sport",
                    l: "Sport",
                    t: "text",
                    p: "Football, Cricket…",
                  },
                ].map(({ k, l, t, p }) => (
                  <div key={k}>
                    <label
                      className="bc"
                      style={{
                        display: "block",
                        fontSize: 10,
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: ".14em",
                        color: ink,
                        marginBottom: 6,
                      }}
                    >
                      {l}
                    </label>
                    <input
                      type={t}
                      placeholder={p}
                      className="inp"
                      value={form[k]}
                      onChange={upd(k)}
                    />
                  </div>
                ))}
                {[
                  {
                    k: "country",
                    l: "Country",
                    opts: [
                      "India",
                      "United States",
                      "United Kingdom",
                      "Australia",
                      "Germany",
                      "France",
                      "Brazil",
                      "UAE",
                      "Singapore",
                      "Canada",
                    ],
                  },
                  {
                    k: "language",
                    l: "Preferred Language",
                    opts: [
                      "English",
                      "Hindi",
                      "Spanish",
                      "French",
                      "Arabic",
                      "German",
                      "Portuguese",
                    ],
                  },
                  {
                    k: "role",
                    l: "Role in Organization",
                    opts: [
                      "Coach",
                      "Athlete",
                      "Analyst",
                      "Academy Director",
                      "Sports Scientist",
                      "Physiotherapist",
                      "Other",
                    ],
                  },
                ].map(({ k, l, opts }) => (
                  <div key={k}>
                    <label
                      className="bc"
                      style={{
                        display: "block",
                        fontSize: 10,
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: ".14em",
                        color: ink,
                        marginBottom: 6,
                      }}
                    >
                      {l}
                    </label>
                    <select className="inp" value={form[k]} onChange={upd(k)}>
                      <option value="">Select {l}</option>
                      {opts.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 16 }}>
                <label
                  className="bc"
                  style={{
                    display: "block",
                    fontSize: 10,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: ".14em",
                    color: ink,
                    marginBottom: 6,
                  }}
                >
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your team, training setup, and goals…"
                  className="inp"
                  style={{ resize: "none" }}
                  value={form.message}
                  onChange={upd("message")}
                />
              </div>
              <button
                type="submit"
                className="btn-s bc"
                style={{ marginTop: 20 }}
              >
                Submit
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  style={{ width: 16, height: 16 }}
                >
                  <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
                </svg>
              </button>
            </form>
          </div>
        </section>
      </AnimatedSection>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer style={{ background: ink }}>
        <div
          style={{
            height: 4,
            background: `linear-gradient(90deg,${olive},${gold})`,
          }}
        />
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 24px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
              gap: 40,
              marginBottom: 48,
            }}
          >
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
                Advanced athlete performance tracking for the modern sports
                ecosystem.
              </p>
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
            {[
              {
                h: "Sports",
                items: [
                  "Football",
                  "Basketball",
                  "Cricket",
                  "Hockey",
                  "Athletics",
                ],
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
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 10 }}
                >
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
    </div>
  );
}
