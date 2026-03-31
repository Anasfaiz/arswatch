import { colors } from "../../styles/theme";

/**
 * Check item with icon and label
 */
export default function Check({ children, color = colors.olive }) {
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
