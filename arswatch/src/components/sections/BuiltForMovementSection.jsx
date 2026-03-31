import AnimatedSection from "../ui/AnimatedSection";
import { colors } from "../../styles/theme";

/**
 * Built For Movement / Technology section with 3D model
 */
export default function BuiltForMovementSection() {
  return (
    <section
      id="technology"
      style={{ background: colors.white, padding: "80px 24px" }}
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
                background: colors.gold,
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
                color: colors.ink,
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
                color: colors.midGray,
                maxWidth: "54ch",
              }}
            >
              The ARS Performance Tracker delivers robust athlete monitoring in
              a sleek, wrist-worn form factor. Whether you're running academy
              programs or scaling athlete development, this device combines
              real-time data capture with long battery life and seamless
              platform integration.
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
              minHeight: 350,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `radial-gradient(ellipse 65% 65% at 55% 50%,rgba(201,168,76,.12),transparent)`,
                pointerEvents: "none",
              }}
            />

            <div
              className="technology-model-wrap"
              style={{
                width: "100%",
                height: 350,
                minHeight: 350,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                zIndex: 1,
              }}
            >
              <model-viewer
                className="technology-model-viewer"
                src="/smartwatch.glb"
                loading="eager"
                reveal="auto"
                ar
                cameraControls
                autoRotate
                exposure="1.2"
                environmentImage="neutral"
                touchAction="pan-y"
              />
            </div>

            <div
              style={{
                position: "absolute",
                top: 16,
                left: 0,
                background: colors.olive,
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
                style={{ fontSize: 22, fontWeight: 900, color: colors.white }}
              >
                142{" "}
                <span style={{ fontSize: 12, fontWeight: 400, opacity: 0.6 }}>
                  bpm
                </span>
              </p>
            </div>

            <div
              style={{
                position: "absolute",
                bottom: 16,
                left: 0,
                background: "rgba(0,0,0,.75)",
                border: `1px solid ${colors.gold}50`,
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
                style={{
                  fontSize: 22,
                  fontWeight: 900,
                  color: colors.goldLight,
                }}
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
  );
}
