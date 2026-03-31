import AnimatedSection from "../ui/AnimatedSection";

/**
 * Team Deployment / Bento Grid Section - Refactored with Tailwind CSS
 * Responsive asymmetric grid layout with overlay effects
 */
export default function TeamDeploymentSection() {
  return (
    <>
      {/* Top Dotted Zigzag Row */}
      <div
        style={{ background: "#0d1117", paddingTop: 0, position: "relative" }}
      >
        <div
          style={{
            height: 56,
            background: "#f7f6f1",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <svg
            viewBox="0 0 1440 56"
            preserveAspectRatio="none"
            style={{ display: "block", width: "100%", height: 56 }}
          >
            <defs>
              <pattern
                id="topDots"
                x="0"
                y="0"
                width="28"
                height="28"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="14" cy="14" r="2.5" fill="#747c27" opacity="0.25" />
              </pattern>
            </defs>
            <rect width="1440" height="56" fill="url(#topDots)" />
            <polygon points="0,56 1440,0 1440,56" fill="#0d1117" />
          </svg>
        </div>
      </div>

      {/* ══ BENTO GRID ══ */}
      <AnimatedSection animationType="fadeInUp">
        <section style={{ background: "#0d1117", padding: "0 20px 80px" }}>
          <div style={{ maxWidth: 1160, margin: "0 auto" }}>
            <div style={{ textAlign: "center", padding: "0 0 52px" }}>
              <h2
                className="teko"
                style={{
                  fontWeight: 700,
                  fontSize: "clamp(2rem,5vw,4rem)",
                  textTransform: "uppercase",
                  lineHeight: 0.95,
                  color: "#ffffff",
                }}
              >
                Everything Your Body
                <br />
                <span style={{ color: "#c9a84c" }}>Needs to Know</span>
              </h2>
            </div>

            <style>{`
            .bento-grid{ display:grid; gap:12px; }
            .bento-card{
              border-radius:18px;
              overflow:hidden;
              position:relative;
              min-height:240px;
              background-size:cover;
              background-position:center;
              transition: transform 0.3s ease, box-shadow 0.3s ease;
              cursor: pointer;
            }
            .bento-card:hover{
              transform: translateY(-8px);
              box-shadow: 0 20px 40px rgba(0,0,0,0.4);
            }
            .bento-card::before{ content:''; position:absolute; inset:0; z-index:1; transition: background 0.3s ease; }
            .bento-card:hover::before{ background: rgba(0,0,0,0.2); }
            .bento-label{
              position:absolute;
              bottom:0;
              left:0;
              right:0;
              padding:20px 22px;
              z-index:2;
              background:linear-gradient(to top,rgba(0,0,0,.82) 0%,rgba(0,0,0,.2) 60%,transparent 100%);
              transition: padding 0.3s ease;
            }
            .bento-card:hover .bento-label{ padding:24px 22px; }
            .bento-label h3{ font-family:'Teko',sans-serif; font-weight:700; font-size:1.5rem; text-transform:uppercase; color:#fff; line-height:1.05; margin:0; }
            .bento-label p{ font-size:12px; color:rgba(255,255,255,.65); margin:5px 0 0; line-height:1.5; }
            .bento-tag{
              position:absolute;
              top:16px;
              left:18px;
              z-index:3;
              display:inline-flex;
              align-items:center;
              gap:6px;
              background:rgba(0,0,0,.55);
              backdrop-filter:blur(6px);
              border:1px solid rgba(255,255,255,.15);
              border-radius:20px;
              padding:4px 12px;
              transition: all 0.3s ease;
            }
            .bento-card:hover .bento-tag{
              background:rgba(201,168,76,.75);
              border-color:rgba(201,168,76,.4);
              transform: scale(1.05);
            }
            .bento-tag span{ font-family:'Barlow Condensed',sans-serif; font-size:10px; font-weight:800; text-transform:uppercase; letter-spacing:.12em; color:#c9a84c; }
            .bento-card:hover .bento-tag span{ color:#fff; }
            /* desktop 2-col asymmetric */
            @media(min-width:900px){
              .bento-grid{ grid-template-columns:1.15fr 1fr; grid-template-rows:auto auto auto; }
              .bento-card-tall{ grid-row:span 2; min-height:500px; }
              .bento-card-wide{ grid-column:span 2; min-height:200px; }
            }
            /* tablet */
            @media(min-width:560px) and (max-width:899px){
              .bento-grid{ grid-template-columns:1fr 1fr; }
              .bento-card-tall{ grid-row:span 1; min-height:260px; }
              .bento-card-wide{ grid-column:span 2; }
            }
            /* mobile */
            @media(max-width:559px){
              .bento-grid{ grid-template-columns:1fr; }
              .bento-card-tall,.bento-card-wide{ grid-column:span 1; grid-row:span 1; min-height:240px; }
            }
            @keyframes pulse-dot {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.5; }
            }
          `}</style>

            <div className="bento-grid">
              {/* 1 — Heart Rate — tall left */}
              <div
                className="bento-card bento-card-tall"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80&fit=crop')`,
                  backgroundPosition: "center",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg,rgba(5,25,5,.35) 0%,rgba(0,0,0,.6) 100%)",
                    zIndex: 1,
                  }}
                />
                {/* green glow dot */}
                <div
                  style={{
                    position: "absolute",
                    top: "40%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(ellipse,rgba(0,255,70,.35) 0%,transparent 70%)",
                    zIndex: 2,
                    pointerEvents: "none",
                  }}
                />
                {/* live pulse bar */}
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 18,
                    zIndex: 3,
                    background: "rgba(0,0,0,.55)",
                    backdropFilter: "blur(6px)",
                    border: "1px solid rgba(116,124,39,.4)",
                    borderRadius: 10,
                    padding: "8px 14px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      marginBottom: 4,
                    }}
                  >
                    <div
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: "#00e85a",
                        boxShadow: "0 0 8px #00e85a",
                        animation: "pulse-dot .9s ease-in-out infinite",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "'Barlow Condensed',sans-serif",
                        fontSize: 9,
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: ".12em",
                        color: "#9ca82d",
                      }}
                    >
                      Live
                    </span>
                  </div>
                  <svg viewBox="0 0 72 22" style={{ width: 72, height: 22 }}>
                    <polyline
                      points="0,11 8,11 13,3 18,19 22,1 28,21 32,11 44,11 49,3 54,19 58,1 64,21 68,11 72,11"
                      fill="none"
                      stroke="#00e85a"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontSize: 18,
                      fontWeight: 900,
                      color: "#fff",
                      lineHeight: 1,
                      marginTop: 4,
                    }}
                  >
                    72 <span style={{ fontSize: 10, opacity: 0.6 }}>bpm</span>
                  </p>
                </div>
                <div className="bento-tag">
                  <span>PPG Sensor</span>
                </div>
                <div className="bento-label">
                  <h3>
                    24/7 Continuous
                    <br />
                    Heart Rate Monitor
                  </h3>
                  <p>Optical PPG · Always-on detection</p>
                </div>
              </div>

              {/* 2 — SpO2 — top right */}
              <div
                className="bento-card"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&fit=crop')`,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg,rgba(10,15,40,.4) 0%,rgba(0,0,0,.7) 100%)",
                    zIndex: 1,
                  }}
                />
                {/* SpO2 gauge */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: 24,
                    transform: "translateY(-60%)",
                    zIndex: 2,
                  }}
                >
                  <svg viewBox="0 0 100 100" style={{ width: 90, height: 90 }}>
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="rgba(255,255,255,.1)"
                      strokeWidth="9"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#e05555"
                      strokeWidth="9"
                      strokeDasharray="251"
                      strokeDashoffset="35"
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                    <text
                      x="50"
                      y="46"
                      textAnchor="middle"
                      fill="white"
                      fontSize="20"
                      fontWeight="900"
                      fontFamily="'Barlow Condensed',sans-serif"
                    >
                      97%
                    </text>
                    <text
                      x="50"
                      y="60"
                      textAnchor="middle"
                      fill="rgba(255,255,255,.5)"
                      fontSize="9"
                      fontFamily="'Barlow',sans-serif"
                    >
                      SpO₂
                    </text>
                  </svg>
                </div>
                <div className="bento-tag">
                  <span>Optical Sensor</span>
                </div>
                <div className="bento-label">
                  <h3>
                    Oxygen Saturation
                    <br />
                    Detection
                  </h3>
                  <p>±2% accuracy · Continuous monitoring</p>
                </div>
              </div>

              {/* 3 — Multi Sport — mid right */}
              <div
                className="bento-card"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80&fit=crop')`,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg,rgba(5,20,5,.3) 0%,rgba(0,0,0,.72) 100%)",
                    zIndex: 1,
                  }}
                />
                <div className="bento-tag">
                  <span>100+ Sport Modes</span>
                </div>
                <div className="bento-label">
                  <h3>
                    Multi-Sport
                    <br />
                    <span style={{ color: "#c9a84c" }}>Tracking</span>
                  </h3>
                  <p>Football · Cricket · Swimming · Running · Cycling</p>
                </div>
              </div>

              {/* 4 — Battery — wide strip */}
              <div
                className="bento-card bento-card-wide"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=800&q=80&fit=crop')`,
                  minHeight: 190,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(90deg,rgba(0,0,0,.85) 0%,rgba(0,0,0,.45) 50%,rgba(0,0,0,.1) 100%)",
                    zIndex: 1,
                  }}
                />
                {/* battery bars */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: 220,
                    transform: "translateY(-50%)",
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    minWidth: 200,
                  }}
                >
                  {[
                    { label: "Normal Use", days: 10, pct: 100, c: "#9ca82d" },
                    { label: "Standby Mode", days: 20, pct: 100, c: "#c9a84c" },
                    { label: "GPS Active", days: 3, pct: 30, c: "#e8c96a" },
                  ].map((b) => (
                    <div key={b.label}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: 4,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Barlow Condensed',sans-serif",
                            fontSize: 10,
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: ".1em",
                            color: "rgba(255,255,255,.6)",
                          }}
                        >
                          {b.label}
                        </span>
                        <span
                          style={{
                            fontFamily: "'Barlow Condensed',sans-serif",
                            fontSize: 10,
                            fontWeight: 800,
                            color: b.c,
                          }}
                        >
                          {b.days} days
                        </span>
                      </div>
                      <div
                        style={{
                          height: 5,
                          borderRadius: 3,
                          background: "rgba(255,255,255,.12)",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            width: `${b.pct}%`,
                            height: "100%",
                            background: b.c,
                            borderRadius: 3,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bento-tag">
                  <span>Battery</span>
                </div>
                <div className="bento-label">
                  <h3>
                    7–10 Days Normal ·{" "}
                    <span style={{ color: "#c9a84c" }}>20 Days Standby</span>
                  </h3>
                </div>
              </div>

              {/* 5 — IP68 Water */}
              <div
                className="bento-card"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800&q=80&fit=crop')`,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg,rgba(0,20,40,.35) 0%,rgba(0,0,0,.7) 100%)",
                    zIndex: 1,
                  }}
                />
                {/* depth badge */}
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 18,
                    zIndex: 3,
                    background: "rgba(0,30,60,.7)",
                    backdropFilter: "blur(6px)",
                    border: "1px solid rgba(58,140,255,.4)",
                    borderRadius: 10,
                    padding: "10px 16px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontSize: 26,
                      fontWeight: 900,
                      color: "#5ab4ff",
                      lineHeight: 1,
                    }}
                  >
                    10<span style={{ fontSize: 13, opacity: 0.7 }}>m</span>
                  </p>
                  <p
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontSize: 9,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,.5)",
                      letterSpacing: ".1em",
                    }}
                  >
                    depth
                  </p>
                </div>
                <div className="bento-tag">
                  <span>IP68</span>
                </div>
                <div className="bento-label">
                  <h3>
                    Dustproof &amp;
                    <br />
                    Water Resistant
                  </h3>
                  <p>10m depth · 2 hours · IP68 certified</p>
                </div>
              </div>

              {/* 6 — App */}
              <div
                className="bento-card"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&q=80&fit=crop')`,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg,rgba(10,20,5,.3) 0%,rgba(0,0,0,.75) 100%)",
                    zIndex: 1,
                  }}
                />
                {/* connected dots */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-55%)",
                    zIndex: 2,
                  }}
                >
                  <svg viewBox="0 0 80 40" style={{ width: 80, height: 40 }}>
                    <circle
                      cx="10"
                      cy="20"
                      r="8"
                      fill="none"
                      stroke="#c9a84c"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="18"
                      y1="20"
                      x2="32"
                      y2="20"
                      stroke="#c9a84c"
                      strokeWidth="1"
                      strokeDasharray="3 2"
                    />
                    <rect
                      x="32"
                      y="12"
                      width="16"
                      height="16"
                      rx="3"
                      fill="none"
                      stroke="#9ca82d"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="48"
                      y1="20"
                      x2="62"
                      y2="20"
                      stroke="#c9a84c"
                      strokeWidth="1"
                      strokeDasharray="3 2"
                    />
                    <circle
                      cx="70"
                      cy="20"
                      r="8"
                      fill="none"
                      stroke="#c9a84c"
                      strokeWidth="1.5"
                    />
                    <text
                      x="10"
                      y="36"
                      textAnchor="middle"
                      fill="rgba(255,255,255,.45)"
                      fontSize="6"
                      fontFamily="'Barlow',sans-serif"
                    >
                      Watch
                    </text>
                    <text
                      x="40"
                      y="36"
                      textAnchor="middle"
                      fill="rgba(255,255,255,.45)"
                      fontSize="6"
                      fontFamily="'Barlow',sans-serif"
                    >
                      Cloud
                    </text>
                    <text
                      x="70"
                      y="36"
                      textAnchor="middle"
                      fill="rgba(255,255,255,.45)"
                      fontSize="6"
                      fontFamily="'Barlow',sans-serif"
                    >
                      App
                    </text>
                  </svg>
                </div>
                <div className="bento-tag">
                  <span>Companion App</span>
                </div>
                <div className="bento-label">
                  <h3>
                    Watch &amp; App
                    <br />
                    <span style={{ color: "#c9a84c" }}>Easy Tracking</span>
                  </h3>
                  <p>Sync data · View trends · Share with coach</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ══ BENTO DIVIDER BOTTOM — dot grid fade ══ */}
      <div
        style={{
          background: "#0d1117",
          position: "relative",
          height: 60,
          overflow: "hidden",
        }}
      >
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: 60 }}
        >
          <defs>
            <pattern
              id="bottomDots"
              x="0"
              y="0"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="12" cy="12" r="2" fill="#747c27" opacity="0.2" />
            </pattern>
            <linearGradient id="dotFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0d1117" stopOpacity="0" />
              <stop offset="100%" stopColor="white" stopOpacity="1" />
            </linearGradient>
          </defs>
          <rect width="1440" height="60" fill="url(#bottomDots)" />
          <rect width="1440" height="60" fill="url(#dotFade)" />
        </svg>
      </div>
    </>
  );
}
