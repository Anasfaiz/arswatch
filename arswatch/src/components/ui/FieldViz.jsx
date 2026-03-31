import { useEffect, useState } from "react";
import { colors } from "../../styles/theme";

/**
 * Field visualization with animated players
 */
export default function FieldViz() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTick((p) => p + 1), 1100);
    return () => clearInterval(t);
  }, []);

  const players = [
    { x: 18, y: 30, tm: 0 },
    { x: 28, y: 55, tm: 0 },
    { x: 18, y: 76, tm: 0 },
    { x: 44, y: 20, tm: 0 },
    { x: 44, y: 50, tm: 0 },
    { x: 44, y: 80, tm: 0 },
    { x: 62, y: 36, tm: 0 },
    { x: 62, y: 64, tm: 0 },
    { x: 79, y: 28, tm: 1 },
    { x: 79, y: 50, tm: 1 },
    { x: 79, y: 72, tm: 1 },
    { x: 54, y: 18, tm: 1 },
    { x: 54, y: 82, tm: 1 },
    { x: 34, y: 38, tm: 1 },
    { x: 34, y: 62, tm: 1 },
  ];

  const off = players.map((_, i) => ({
    dx: Math.sin(tick * 0.7 + i * 1.3) * 3,
    dy: Math.cos(tick * 0.5 + i * 0.9) * 3,
  }));

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        background: "#0a160a",
        borderRadius: 8,
        overflow: "hidden",
        aspectRatio: "16/9",
      }}
    >
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
        viewBox="0 0 100 60"
        preserveAspectRatio="none"
      >
        <rect
          x="5"
          y="4"
          width="90"
          height="52"
          fill="none"
          stroke="#1a3a1a"
          strokeWidth="0.6"
        />
        <line
          x1="50"
          y1="4"
          x2="50"
          y2="56"
          stroke="#1a3a1a"
          strokeWidth="0.4"
        />
        <circle
          cx="50"
          cy="30"
          r="8"
          fill="none"
          stroke="#1a3a1a"
          strokeWidth="0.4"
        />
        <rect
          x="5"
          y="18"
          width="12"
          height="24"
          fill="none"
          stroke="#1a3a1a"
          strokeWidth="0.4"
        />
        <rect
          x="83"
          y="18"
          width="12"
          height="24"
          fill="none"
          stroke="#1a3a1a"
          strokeWidth="0.4"
        />
      </svg>

      {players.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${p.x + off[i].dx}%`,
            top: `${p.y + off[i].dy}%`,
            transform: "translate(-50%, -50%)",
            transition: "left 1s ease, top 1s ease",
          }}
        >
          <div
            style={{
              width: 11,
              height: 11,
              borderRadius: "50%",
              background: p.tm === 0 ? colors.oliveLight : colors.gold,
              boxShadow:
                p.tm === 0
                  ? `0 0 8px ${colors.oliveLight}cc`
                  : `0 0 8px ${colors.gold}cc`,
              border: "2px solid rgba(255, 255, 255, 0.4)",
            }}
          />
        </div>
      ))}

      <div
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          display: "flex",
          alignItems: "center",
          gap: 5,
          background: colors.olive,
          padding: "3px 8px",
          borderRadius: 3,
        }}
      >
        <div
          style={{
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "white",
            animation: "lp 1s ease-in-out infinite",
          }}
        />
        <span
          style={{
            color: "white",
            fontSize: 8,
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            letterSpacing: "0.1em",
          }}
        >
          LIVE
        </span>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 8,
          right: 8,
          display: "flex",
          gap: 6,
        }}
      >
        {[
          { c: colors.oliveLight, l: "Team A" },
          { c: colors.gold, l: "Team B" },
        ].map(({ c, l }) => (
          <div
            key={l}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              background: "rgba(0, 0, 0, 0.55)",
              padding: "2px 7px",
              borderRadius: 3,
            }}
          >
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: c,
              }}
            />
            <span
              style={{
                color: "#ccc",
                fontSize: 8,
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
              }}
            >
              {l}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
