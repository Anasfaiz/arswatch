import { useState } from "react";
import AnimatedSection from "../ui/AnimatedSection";
import { colors } from "../../styles/theme";
import "./VitalMonitoringShowcase.css";

const FEATURES = [
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

export default function VitalMonitoringShowcase() {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  return (
    <AnimatedSection animationType="fadeInUp">
      <section
        style={{
          background: colors.offWhite,
          padding: "clamp(40px, 8vw, 80px) 24px",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              textAlign: "center",
              marginBottom: "clamp(20px, 5vw, 34px)",
            }}
          >
            <h2
              className="teko"
              style={{
                fontWeight: 700,
                fontSize: "clamp(2rem, 5vw, 4rem)",
                textTransform: "uppercase",
                color: colors.ink,
                lineHeight: 0.95,
              }}
            >
              Excellent Features for
              <br />
              <span style={{ color: colors.olive }}>
                Continuous Vital Monitoring
              </span>
            </h2>
          </div>

          <div className="vm-shell">
            <div className="vm-bg-layer" />
            <div className="vm-grid-lines" />

            {/* Watch Image - Left Side */}
            <div className="vm-watch-container">
              <div
                className={`vm-watch-wrap ${hoveredFeature !== null ? "vm-watch-active" : ""}`}
              >
                <div className="vm-watch-glow" />
                <img
                  src="/watch2.png"
                  alt="ARS smart wearable fitness band"
                  className="vm-watch-image"
                />
              </div>
            </div>

            {/* Bubbles Grid - Right Side */}
            <div className="vm-bubbles-container">
              {FEATURES.map((feature, i) => {
                const isHovered = hoveredFeature === i;
                return (
                  <div
                    key={feature.label}
                    className="vm-bubble-item"
                    style={{
                      "--accent": feature.accent,
                      "--delay": `${i * 0.1}s`,
                    }}
                  >
                    <button
                      type="button"
                      className={`vm-bubble-btn ${isHovered ? "vm-bubble-hovered" : ""}`}
                      aria-label={feature.label}
                      onMouseEnter={() => setHoveredFeature(i)}
                      onMouseLeave={() => setHoveredFeature(null)}
                      onFocus={() => setHoveredFeature(i)}
                      onBlur={() => setHoveredFeature(null)}
                    >
                      <span className="vm-bubble-icon">{feature.icon}</span>
                      <span className="vm-bubble-label">{feature.label}</span>
                    </button>
                    <div
                      className={`vm-bubble-tip ${isHovered ? "vm-bubble-tip-open" : ""}`}
                    >
                      {feature.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
