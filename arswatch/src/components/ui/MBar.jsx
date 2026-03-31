import { colors } from "../../styles/theme";

/**
 * Metric bar with label and percentage
 */
export default function MBar({ label, pct, color = colors.gold }) {
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
        <span style={{ color: "rgba(255, 255, 255, 0.65)" }}>{label}</span>
        <span style={{ color }}>{pct}%</span>
      </div>
      <div
        style={{
          height: 8,
          borderRadius: 3,
          background: "rgba(255, 255, 255, 0.12)",
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
