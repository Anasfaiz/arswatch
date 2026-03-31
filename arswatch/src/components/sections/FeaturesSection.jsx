import { useState } from "react";
import AnimatedSection from "../ui/AnimatedSection";
import { colors } from "../../styles/theme";

/**
 * Features Grid section with health metrics cards
 */
export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("Features");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    const sectionIds = {
      Overview: "technology",
      Features: "sec-features",
      Specifications: "sec-specifications",
      FAQs: "sec-faqs",
    };
    const sectionId = sectionIds[tabName];
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const FEATURES = [
    { label: "Medical Grade Heart Rate", c: colors.olive },
    { label: "HRV Analysis", c: colors.gold },
    { label: "Blood Oxygen (SpO₂)", c: colors.olive },
    { label: "Skin Temperature", c: colors.gold },
    { label: "Activity Tracking", c: colors.olive },
    { label: "Stress Monitor", c: colors.gold },
    { label: "Automatic Sleep Tracking", c: colors.olive },
    { label: "VO₂ Max", c: colors.gold },
    { label: "Blood Pressure Monitor", c: colors.olive },
    { label: "Long Battery Life", c: colors.gold },
  ];

  return (
    <>
      {/* Sticky Tab Bar */}
      <div
        style={{
          background: colors.ink,
          borderBottom: `2px solid ${colors.olive}`,
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
          {["Overview", "Features", "Specifications", "FAQs"].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
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
                color:
                  activeTab === tab ? colors.goldLight : "rgba(255,255,255,.5)",
                borderBottom:
                  activeTab === tab
                    ? `3px solid ${colors.gold}`
                    : "3px solid transparent",
                transition: "color .2s",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <section
        id="sec-features"
        style={{
          background: `linear-gradient(135deg, #f5f3f0 0%, #e8e5e0 50%, #f0ede8 100%)`,
          padding: "80px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(ellipse at top left, ${colors.olive}15, transparent 50%), radial-gradient(ellipse at bottom right, ${colors.gold}12, transparent 50%)`,
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
                color: colors.ink,
                lineHeight: 0.95,
              }}
            >
              Key Health <span style={{ color: colors.olive }}>Features</span>
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
            {FEATURES.map((f, idx) => (
              <AnimatedSection
                key={f.label}
                animationType="fadeInUp"
                style={{
                  transitionDelay: `${idx * 0.15}s`,
                  transitionDuration: "1.2s",
                  height: "100%",
                  display: "flex",
                }}
              >
                <div
                  className="ch"
                  style={{
                    background: colors.white,
                    borderRadius: 14,
                    padding: "28px 16px",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 14,
                    boxShadow: "0 2px 12px rgba(0,0,0,.06)",
                    border: `1.5px solid ${f.c}25`,
                    minHeight: 170,
                    height: "100%",
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
                      fontSize: 32,
                    }}
                  >
                    ♡
                  </div>
                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: colors.ink,
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
    </>
  );
}
