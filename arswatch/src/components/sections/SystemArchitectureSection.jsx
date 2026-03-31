import AnimatedSection from "../ui/AnimatedSection";
import { colors } from "../../styles/theme";

/**
 * System Architecture section with visual diagram
 */
export default function SystemArchitectureSection() {
  return (
    <AnimatedSection animationType="fadeInUp">
      <section style={{ background: colors.white, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div
              style={{
                width: 44,
                height: 4,
                background: colors.gold,
                borderRadius: 2,
                margin: "0 auto 16px",
              }}
            />
            <h2
              className="teko"
              style={{
                fontWeight: 700,
                fontSize: "clamp(2rem,5vw,4rem)",
                textTransform: "uppercase",
                color: colors.ink,
                lineHeight: 0.95,
                marginBottom: 16,
              }}
            >
              System <span style={{ color: colors.olive }}>Architecture</span>
            </h2>
            <p
              style={{
                fontSize: 16,
                color: colors.midGray,
                maxWidth: 600,
                margin: "0 auto",
                lineHeight: 1.8,
              }}
            >
              Multi-layered architecture for reliable, real-time athlete
              performance tracking across the entire sports ecosystem.
            </p>
          </div>

          {/* Architecture Image */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 0,
            }}
          >
            <img
              src="/architecture.png"
              alt="ARS System Architecture Diagram"
              style={{
                width: "100%",
                maxWidth: 1000,
                height: "auto",
                borderRadius: 16,
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
