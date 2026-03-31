import AnimatedSection from "../ui/AnimatedSection";
import { colors } from "../../styles/theme";

/**
 * Specifications section with detailed hardware, connectivity, and performance specs
 */
export default function SpecificationsSection() {
  const SPEC_GROUPS = [
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
  ];

  return (
    <AnimatedSection animationType="fadeInUp">
      <section
        id="sec-specifications"
        className="bg-white px-5 md:px-6 lg:px-8 flex justify-center"
        style={{ paddingTop: "120px", paddingBottom: "130px" }}
      >
        <div className="w-full" style={{ maxWidth: 1100 }}>
          {/* Header */}
          <div className="mb-16 text-center">
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
              Full <span style={{ color: colors.olive }}>Specifications</span>
            </h2>
          </div>

          {/* Specifications Table */}
          <div
            className="overflow-hidden rounded-lg border"
            style={{
              background: colors.offWhite,
              borderColor: "rgba(0,0,0,.07)",
            }}
          >
            {SPEC_GROUPS.map((group, groupIdx) => (
              <div
                key={group.heading}
                style={{
                  marginBottom: groupIdx < SPEC_GROUPS.length - 1 ? "8px" : 0,
                }}
              >
                {/* Group Header */}
                <div
                  className="px-6 py-8 md:px-8"
                  style={{
                    background: `linear-gradient(90deg, ${colors.olive}, ${colors.oliveDark})`,
                  }}
                >
                  <span
                    className="teko"
                    style={{
                      fontWeight: 700,
                      fontSize: 22,
                      color: colors.white,
                      textTransform: "uppercase",
                      letterSpacing: ".08em",
                    }}
                  >
                    {group.heading}
                  </span>
                </div>

                {/* Group Rows */}
                {group.rows.map(([label, value], rowIdx) => (
                  <div
                    key={label}
                    className="flex border-b px-6 py-6 md:px-7"
                    style={{
                      background:
                        rowIdx % 2 === 0
                          ? "rgba(116,124,39,.04)"
                          : colors.white,
                      borderBottomColor: "rgba(0,0,0,.05)",
                    }}
                  >
                    <span
                      className="bc"
                      style={{
                        flex: "0 0 clamp(140px,35%,240px)",
                        fontFamily: "'Barlow Condensed',sans-serif",
                        fontWeight: 700,
                        fontSize: 17,
                        textTransform: "uppercase",
                        letterSpacing: ".06em",
                        color: colors.midGray,
                      }}
                    >
                      {label}
                    </span>
                    <span
                      style={{
                        flex: 1,
                        fontSize: 16,
                        color: colors.ink,
                        fontWeight: 500,
                        lineHeight: 1.6,
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
    </AnimatedSection>
  );
}
