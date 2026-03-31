import { colors } from "../../styles/theme";

/**
 * Tag/badge component
 */
export default function Tag({ children, bg = colors.olive }) {
  return (
    <span
      style={{
        display: "inline-block",
        background: bg,
        color: "white",
        fontSize: 10,
        fontWeight: 800,
        fontFamily: "'Barlow Condensed', sans-serif",
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
