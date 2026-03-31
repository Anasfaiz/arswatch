import { colors } from "../../styles/theme";

/**
 * Footer component
 */
export default function Footer() {
  return (
    <footer style={{ background: colors.ink }}>
      <div
        style={{
          height: 4,
          background: `linear-gradient(90deg,${colors.olive},${colors.gold})`,
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
          {/* Brand Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  background: colors.olive,
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
                  color: colors.white,
                }}
              >
                ARS Kreedashala
              </span>
            </div>
            <p style={{ fontSize: 12, lineHeight: 1.7, color: "#4a4a30" }}>
              Advanced athlete performance tracking for the modern sports
              ecosystem.
            </p>
          </div>

          {/* Links Columns */}
          {[
            {
              h: "Sports",
              items: [
                "Football",
                "Cricket",
                "Basketball",
                "Hockey",
                "Athletics",
              ],
            },
            {
              h: "Products",
              items: [
                "Performance Tracker",
                "Analytics",
                "Team Monitoring",
                "Dashboard",
              ],
            },
            { h: "Company", items: ["About", "Careers", "Contact", "Blog"] },
            { h: "Legal", items: ["Privacy", "Terms", "Cookies"] },
          ].map(({ h, items }) => (
            <div key={h}>
              <p
                className="bc"
                style={{
                  fontSize: 10,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: ".14em",
                  color: colors.oliveLight,
                  marginBottom: 16,
                }}
              >
                {h}
              </p>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                {items.map((item) => (
                  <a
                    key={item}
                    href="#"
                    style={{
                      fontSize: 12,
                      color: "#4a4a30",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = colors.white)}
                    onMouseLeave={(e) => (e.target.style.color = "#4a4a30")}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
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
  );
}
