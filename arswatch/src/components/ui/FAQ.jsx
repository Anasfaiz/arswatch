import { useState } from "react";
import { colors } from "../../styles/theme";

/**
 * FAQ item with expandable answer
 */
export default function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        border: "1px solid rgba(0, 0, 0, 0.08)",
        borderRadius: 10,
        background: colors.white,
        overflow: "hidden",
        marginBottom: 12,
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          padding: "16px 18px",
          border: "none",
          background: "transparent",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: 16,
            color: colors.ink,
            textTransform: "uppercase",
            letterSpacing: ".03em",
          }}
        >
          {q}
        </span>
        <span
          style={{
            width: 24,
            height: 24,
            borderRadius: "50%",
            background: open ? colors.olive : "rgba(116, 124, 39, 0.12)",
            color: open ? colors.white : colors.olive,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
            lineHeight: 1,
            fontWeight: 700,
            flexShrink: 0,
            transition: "all 0.2s ease",
          }}
        >
          {open ? "-" : "+"}
        </span>
      </button>
      {open && (
        <div
          style={{
            padding: "0 18px 16px",
            fontSize: 14,
            lineHeight: 1.75,
            color: "#4a4a38",
          }}
        >
          {a}
        </div>
      )}
    </div>
  );
}
