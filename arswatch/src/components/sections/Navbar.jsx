import { colors } from "../../styles/theme";

const NAV_LINKS = ["Products", "Technology", "Blog", "Analytics", "Contact"];

/**
 * Sticky navigation bar
 */
export default function Navbar({ menuOpen, setMenuOpen, onNavBlog }) {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: colors.white,
        borderBottom: "1px solid #e8e4dc",
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile {
            display: none !important;
          }
          .show-mobile {
            display: block !important;
          }
        }
      `}</style>

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
        {/* Logo */}
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
              background: colors.olive,
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
              color: colors.ink,
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
          {NAV_LINKS.map((link) =>
            link === "Blog" ? (
              <button
                key={link}
                onClick={onNavBlog}
                className="nl"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {link}
              </button>
            ) : (
              <a key={link} href={`#${link.toLowerCase()}`} className="nl">
                {link}
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
                background: colors.gold,
                color: colors.white,
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
            stroke={colors.ink}
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: colors.white,
            borderTop: "1px solid #e8e4dc",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {NAV_LINKS.map((link) =>
            link === "Blog" ? (
              <button
                key={link}
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
                {link}
              </button>
            ) : (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="nl"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ),
          )}
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            <button
              className="bc"
              style={{
                width: "100%",
                background: colors.gold,
                color: colors.white,
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
  );
}
