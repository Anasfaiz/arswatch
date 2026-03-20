import { useState, useEffect, useRef } from "react";

const WATCH_IMG = "/watch.jpg";

// Custom hook for scroll animations
function useScrollAnimation() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
}

const olive = "#747c27";
const oliveDark = "#3a4212";
const oliveLight = "#9ca82d";
const gold = "#c9a84c";
const goldLight = "#e8c96a";
const goldDark = "#9a7a28";
const ink = "#111408";
const inkMid = "#1e2108";
const sand = "#e8ddd0";
const offWhite = "#f7f6f1";
const white = "#ffffff";
const midGray = "#6b6b50";

function Counter({ to, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        obs.disconnect();
        let n = 0;
        const step = to / (1200 / 16);
        const t = setInterval(() => {
          n += step;
          if (n >= to) {
            setVal(to);
            clearInterval(t);
          } else setVal(Math.floor(n));
        }, 16);
      },
      { threshold: 0.3 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

function FieldViz() {
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
            transform: "translate(-50%,-50%)",
            transition: "left 1s ease,top 1s ease",
          }}
        >
          <div
            style={{
              width: 11,
              height: 11,
              borderRadius: "50%",
              background: p.tm === 0 ? oliveLight : gold,
              boxShadow:
                p.tm === 0 ? `0 0 8px ${oliveLight}cc` : `0 0 8px ${gold}cc`,
              border: "2px solid rgba(255,255,255,.4)",
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
          background: olive,
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
            fontFamily: "'Barlow Condensed',sans-serif",
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
          { c: oliveLight, l: "Team A" },
          { c: gold, l: "Team B" },
        ].map(({ c, l }) => (
          <div
            key={l}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              background: "rgba(0,0,0,.55)",
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
                fontFamily: "'Barlow Condensed',sans-serif",
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

function Check({ children, color = olive }) {
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

function Tag({ children, bg = olive }) {
  return (
    <span
      style={{
        display: "inline-block",
        background: bg,
        color: "white",
        fontSize: 10,
        fontWeight: 800,
        fontFamily: "'Barlow Condensed',sans-serif",
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

function MBar({ label, pct, color = gold }) {
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
        <span style={{ color: "rgba(255,255,255,.65)" }}>{label}</span>
        <span style={{ color }}>{pct}%</span>
      </div>
      <div
        style={{
          height: 8,
          borderRadius: 3,
          background: "rgba(255,255,255,.12)",
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

// Animated Section wrapper component
function AnimatedSection({ children, animationType = "fadeInUp", ...props }) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateY(0)"
          : animationType === "fadeInUp"
            ? "translateY(40px)"
            : animationType === "fadeInLeft"
              ? "translateX(-40px)"
              : animationType === "fadeInRight"
                ? "translateX(40px)"
                : "scale(0.9)",
        transition: "all 0.8s ease-out",
      }}
      {...props}
    >
      {children}
    </div>
  );
}

export default function ARSLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    sport: "",
    country: "",
    language: "",
    role: "",
    message: "",
  });
  const upd = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));
  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      organization: "",
      sport: "",
      country: "",
      language: "",
      role: "",
      message: "",
    });
  };

  return (
    <div
      style={{
        fontFamily: "'Barlow',sans-serif",
        background: white,
        color: ink,
        overflowX: "hidden",
        margin: 0,
        padding: 0,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&family=Barlow:wght@300;400;500;600;700;900&family=Barlow+Condensed:wght@400;600;700;900&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        body { font-family:'Barlow',sans-serif; background:${white}; }
        .bc  { font-family:'Barlow Condensed',sans-serif !important; }
        .teko { font-family:'Teko',sans-serif !important; }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
        @keyframes lp    { 0%,100%{opacity:1} 50%{opacity:.2} }
        @keyframes scan  { 0%{top:-30%;opacity:0} 10%{opacity:.4} 90%{opacity:.4} 100%{top:130%;opacity:0} }
        .fw    { animation:float 5s ease-in-out infinite; }
        .scanl { position:absolute;left:0;right:0;height:60px;background:linear-gradient(to bottom,transparent,rgba(201,168,76,.18),transparent);animation:scan 3.5s linear infinite;pointer-events:none; }
        .inp   { width:100%;padding:11px 14px;border:2px solid #e0ddd5;border-radius:5px;font-size:13px;font-family:'Barlow',sans-serif;color:${ink};background:${white};outline:none;transition:border-color .2s; }
        .inp:focus { border-color:${gold}; }
        .ch    { transition:transform .22s ease,box-shadow .22s ease;cursor:default; }
        .ch:hover { transform:translateY(-4px);box-shadow:0 16px 40px rgba(0,0,0,.10); }
        .btn-w { background:transparent;border:2px solid ${white};color:${white};padding:13px 28px;font-size:11px;font-weight:800;font-family:'Barlow Condensed',sans-serif;text-transform:uppercase;letter-spacing:.14em;cursor:pointer;transition:all .3s ease; }
        .btn-w:hover { background:rgba(255,255,255,.1); transform:translateY(-2px); box-shadow:0 8px 20px rgba(255,255,255,.15); }
        .btn-o { background:${olive};border:none;color:${white};padding:13px 28px;font-size:11px;font-weight:800;font-family:'Barlow Condensed',sans-serif;text-transform:uppercase;letter-spacing:.14em;cursor:pointer;transition:all .3s ease;display:inline-flex;align-items:center;gap:8px; }
        .btn-o:hover { background:${oliveDark}; transform:translateY(-2px); box-shadow:0 8px 20px rgba(116,124,39,.3); }
        .btn-s { background:${olive};border:none;color:${white};width:100%;display:flex;align-items:center;justify-content:center;gap:8px;padding:16px;font-size:13px;font-weight:800;font-family:'Barlow Condensed',sans-serif;text-transform:uppercase;letter-spacing:.14em;border-radius:4px;cursor:pointer;transition:all .3s ease; }
        .btn-s:hover { background:${oliveDark}; transform:translateY(-2px); box-shadow:0 8px 20px rgba(116,124,39,.3); }
        .nl   { font-family:'Barlow Condensed',sans-serif;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.12em;color:#888875;text-decoration:none;transition:all .3s ease; }
        .nl:hover { color:${olive}; transform:translateY(-1px); }
        a { text-decoration:none; }
      `}</style>

      {/* ── NAVBAR ─────────────────────────────────────────── */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: white,
          borderBottom: "1px solid #e8e4dc",
        }}
      >
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
                background: olive,
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
                color: ink,
              }}
            >
              ARS Kreedashala
            </span>
          </div>

          <div
            style={{ display: "flex", alignItems: "center", gap: 32 }}
            className="hidden-mobile"
          >
            {["Products", "Technology", "Team", "Analytics", "Contact"].map(
              (l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="nl">
                  {l}
                </a>
              ),
            )}
          </div>

          <div className="hidden-mobile">
            <a href="#contact">
              <button
                className="bc"
                style={{
                  background: gold,
                  color: white,
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
              stroke={ink}
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

        <style>{`
          @media(max-width:768px){
            .hidden-mobile{display:none!important;}
            .show-mobile{display:block!important;}
          }
        `}</style>

        {menuOpen && (
          <div
            style={{
              background: white,
              borderTop: "1px solid #e8e4dc",
              padding: "16px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {["Products", "Technology", "Team", "Analytics", "Contact"].map(
              (l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="nl"
                  onClick={() => setMenuOpen(false)}
                >
                  {l}
                </a>
              ),
            )}
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              <button
                className="bc"
                style={{
                  width: "100%",
                  background: gold,
                  color: white,
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

      {/* ── HERO ────────────────────────────────────────────── */}
      <section
        id="products"
        style={{ position: "relative", background: ink, overflow: "hidden" }}
      >
        {/* grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            backgroundImage: `linear-gradient(rgba(116,124,39,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(116,124,39,.12) 1px,transparent 1px)`,
            backgroundSize: "48px 48px",
            opacity: 0.45,
          }}
        />
        {/* slash accents */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "38%",
            height: "100%",
            overflow: "hidden",
            pointerEvents: "none",
            zIndex: 1,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 88,
              width: 2,
              height: "78%",
              background: `linear-gradient(to bottom,${gold},transparent)`,
              transform: "rotate(7deg)",
              transformOrigin: "top center",
              opacity: 0.6,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 68,
              width: 1,
              height: "55%",
              background: `linear-gradient(to bottom,${olive},transparent)`,
              transform: "rotate(7deg)",
              transformOrigin: "top center",
              opacity: 0.35,
            }}
          />
        </div>

        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "80px 24px 108px",
            display: "flex",
            alignItems: "center",
            gap: 48,
            flexWrap: "wrap",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* copy */}
          <AnimatedSection
            animationType="fadeInLeft"
            style={{
              flex: "1 1 380px",
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
              <span
                className="bc"
                style={{
                  fontWeight: 900,
                  fontSize: 26,
                  color: white,
                  letterSpacing: ".04em",
                }}
              >
                ARS
              </span>
              <span
                className="bc"
                style={{
                  fontWeight: 300,
                  fontSize: 14,
                  color: "rgba(255,255,255,.5)",
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                }}
              >
                Performance Tracker
              </span>
            </div>
            <h1
              className="teko"
              style={{
                fontWeight: 700,
                fontSize: "clamp(2.2rem,5vw,3.8rem)",
                lineHeight: 0.92,
                textTransform: "uppercase",
                color: white,
              }}
            >
              The Most Advanced
              <br />
              <span style={{ color: gold }}>Athlete Performance</span>
              <br />
              Tracker
            </h1>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.8,
                color: "rgba(255,255,255,.6)",
                maxWidth: 460,
              }}
            >
              ARS Performance Tracker integrates cutting-edge performance
              tracking technology into a compact, wearable device. Built for any
              sport, any athlete, and any training environment.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a href="#contact">
                <button className="btn-w bc">Contact Us</button>
              </a>
              <a href="#technology">
                <button className="btn-o bc">
                  Explore Features
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    style={{ width: 14, height: 14 }}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </a>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 40,
                paddingTop: 20,
                borderTop: "1px solid rgba(255,255,255,.1)",
                marginTop: 4,
              }}
            >
              {[
                { n: 5, s: "+", l: "Sensor Types" },
                { n: 99, s: "%", l: "Data Accuracy" },
                { n: 48, s: "h", l: "Battery Life" },
              ].map(({ n, s, l }) => (
                <div key={l}>
                  <p
                    className="bc"
                    style={{ fontWeight: 900, fontSize: 40, color: gold }}
                  >
                    <Counter to={n} suffix={s} />
                  </p>
                  <p
                    className="bc"
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: ".14em",
                      color: "rgba(255,255,255,.4)",
                      marginTop: 3,
                    }}
                  >
                    {l}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* watch */}
          <AnimatedSection
            animationType="fadeInRight"
            style={{
              flex: "0 1 420px",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 400, // Slightly increased for better 3D visibility
            }}
          >
            {/* Glow Background */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `radial-gradient(ellipse 65% 65% at 55% 50%,rgba(201,168,76,.12),transparent)`,
                pointerEvents: "none",
              }}
            />

            {/* THE 3D MODEL CONTAINER (REPLACED INNER PART) */}
            <div
              style={{
                width: "100%",
                height: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                zIndex: 1,
              }}
            >
              <model-viewer
                src="/smartwatch.glb"
                ar
                camera-controls
                auto-rotate
                exposure="1.2"
                environment-image="neutral"
                style={{
                  width: "100%",
                  height: "100%",
                  background: "transparent",
                }}
              ></model-viewer>
            </div>

            {/* KEEPING YOUR HEART RATE STAT (STAYS THE SAME) */}
            <div
              style={{
                position: "absolute",
                top: 16,
                left: 0,
                background: olive,
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
                style={{ fontSize: 22, fontWeight: 900, color: white }}
              >
                142{" "}
                <span style={{ fontSize: 12, fontWeight: 400, opacity: 0.6 }}>
                  bpm
                </span>
              </p>
            </div>

            {/* KEEPING YOUR SPRINT SPEED STAT (STAYS THE SAME) */}
            <div
              style={{
                position: "absolute",
                bottom: 16,
                left: 0,
                background: "rgba(0,0,0,.75)",
                border: `1px solid ${gold}50`,
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
                style={{ fontSize: 22, fontWeight: 900, color: goldLight }}
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

        {/* WIMU diagonal slash */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 20,
            pointerEvents: "none",
            overflow: "hidden",
            height: 72,
          }}
        >
          <svg
            viewBox="0 0 1440 72"
            preserveAspectRatio="none"
            style={{ display: "block", width: "100%", height: 72 }}
          >
            <polygon points="0,72 1440,0 1440,72" fill={white} />
            <line
              x1="0"
              y1="72"
              x2="1440"
              y2="0"
              stroke={gold}
              strokeWidth="2.5"
              opacity="0.85"
            />
            <line
              x1="0"
              y1="75"
              x2="1440"
              y2="3"
              stroke={olive}
              strokeWidth="1.5"
              opacity="0.4"
              strokeDasharray="10 5"
            />
          </svg>
        </div>
        <div style={{ height: 72 }} />
      </section>

      {/* ── TAB BAR ─────────────────────────────────────────── */}

      {/* ── BUILT FOR MOVEMENT ──────────────────────────────── */}
      <section
        id="technology"
        style={{ background: white, padding: "80px 24px" }}
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
            <AnimatedSection style={{ flex: "1 1 400px", maxWidth: 680 }}>
              <div
                style={{
                  width: 44,
                  height: 4,
                  background: gold,
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
                  color: ink,
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
                  color: midGray,
                  maxWidth: "54ch",
                }}
              >
                The ARS Performance Tracker delivers robust athlete monitoring
                in a sleek, wrist-worn form factor. Whether you're running
                academy programs or scaling athlete development, this device
                combines real-time data capture with long battery life and
                seamless platform integration.
              </p>
            </AnimatedSection>

            <AnimatedSection
              animationType="fadeInRight"
              style={{
                flex: "1 0 800px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <img
                src="/explode.png"
                alt="Technology Exploded View"
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: 600,
                  opacity: 0.95,
                  mixBlendMode: "multiply",
                  filter: "contrast(1.05) brightness(0.98)",
                  transition: "transform 0.3s ease, filter 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.03)";
                  e.target.style.filter = "contrast(1.1) brightness(0.95)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.filter = "contrast(1.05) brightness(0.98)";
                }}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── SIX METRICS ─────────────────────────────────────── */}
      <section
        style={{
          background: `linear-gradient(135deg, ${offWhite} 0%, #f0f1ec 100%)`,
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2
              className="teko"
              style={{
                fontWeight: 700,
                color: ink,
                lineHeight: 0.85, // 1. Dramatically reduces the vertical gap between lines
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              <span
                style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)", opacity: 0.8 }}
              >
                Six key metrics.
              </span>
              <br />
              <span style={{ fontSize: "clamp(2.8rem, 8vw, 7rem)" }}>
                One reliable tracker.
              </span>
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 32, // Increased gap for a cleaner look
            }}
          >
            {[
              {
                title: "Real-time Speed Tracking",
                desc: "Capture burst velocity and sustained pace with sub-second precision during every drill and match.",
                c: olive,
                bgGrad: `linear-gradient(135deg, rgba(116,124,39,.08) 0%, rgba(116,124,39,.02) 100%)`,
                icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />, // Lightning/Speed
              },
              {
                title: "Athlete Skill Analysis",
                desc: "Sport-specific drills scored live via embedded motion sensors across 12 athletic dimensions.",
                c: gold,
                bgGrad: `linear-gradient(135deg, rgba(201,168,76,.08) 0%, rgba(201,168,76,.02) 100%)`,
                icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />, // Shield/Analysis
              },
              {
                title: "Stamina Monitoring",
                desc: "Continuous endurance scoring mapped across every training block for optimised performance.",
                c: olive,
                bgGrad: `linear-gradient(135deg, rgba(116,124,39,.08) 0%, rgba(116,124,39,.02) 100%)`,
                icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />, // Heartbeat/Stamina
              },
              {
                title: "Training Load Analysis",
                desc: "Detect overtraining early with cumulative load models and AI-powered recovery recommendations.",
                c: gold,
                bgGrad: `linear-gradient(135deg, rgba(201,168,76,.08) 0%, rgba(201,168,76,.02) 100%)`,
                icon: <path d="M18 20V10M12 20V4M6 20v-6" />, // Bars/Load
              },
              {
                title: "Heart Rate Zones",
                desc: "Monitor HR zones in real time to keep athletes in the optimal training band throughout sessions.",
                c: olive,
                bgGrad: `linear-gradient(135deg, rgba(116,124,39,.08) 0%, rgba(116,124,39,.02) 100%)`,
                icon: (
                  <path d="M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" />
                ), // Circle/Heart Rate
              },
              {
                title: "Academy Integration",
                desc: "Push athlete reports directly into ARS Kreedashala dashboards for seamless coach-athlete sync.",
                c: gold,
                bgGrad: `linear-gradient(135deg, rgba(201,168,76,.08) 0%, rgba(201,168,76,.02) 100%)`,
                icon: (
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 14v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                ), // Team/Sync
              },
            ].map((m) => (
              <div
                key={m.title}
                className="ch"
                style={{
                  background: "white", // Set to solid white for better contrast
                  padding: "40px 32px",
                  textAlign: "center",
                  borderRadius: "20px", // More rounded looks more modern
                  border: `1px solid rgba(0,0,0,0.06)`,
                  boxShadow: `0 10px 30px rgba(0,0,0,0.04)`,
                  transition:
                    "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-12px)";
                  e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.1)`;
                  e.currentTarget.style.borderColor = m.c;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = `0 10px 30px rgba(0,0,0,0.04)`;
                  e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)";
                }}
              >
                {/* 1. Added the background gradient glow back in */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: m.c,
                  }}
                />

                {/* Icon Container */}
                <div
                  style={{
                    background: m.bgGrad,
                    width: 70,
                    height: 70,
                    borderRadius: "50%",
                    margin: "0 auto 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ color: m.c, width: 32, height: 32 }}
                  >
                    {m.icon}
                  </svg>
                </div>

                <h3
                  className="teko" // Assuming Teko font is loaded
                  style={{
                    fontSize: "1.4rem",
                    letterSpacing: "0.5px",
                    marginBottom: "12px",
                    color: "#111", // Darker for readability
                    textTransform: "uppercase",
                  }}
                >
                  {m.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "#555",
                    lineHeight: 1.6,
                  }}
                >
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 1024px) {
              div[style*="repeat(auto-fit, minmax(350px"] {
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
              }
            }
            @media (max-width: 768px) {
              div[style*="repeat(auto-fit, minmax(350px"] {
                grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)) !important;
              }
            }
            @media (max-width: 480px) {
              div[style*="repeat(auto-fit, minmax(350px"] {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>
        </div>
      </section>

      {/* ── SENSOR INTELLIGENCE ─────────────────────────────── */}
      <section style={{ background: white, padding: "80px 24px" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: 64,
            alignItems: "center",
          }}
        >
          <div
            style={{
              flex: "0 1 380px",
              background: sand,
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "60px 40px",
              position: "relative",
              overflow: "hidden",
              minHeight: 300,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "radial-gradient(circle,rgba(116,124,39,.2) 1px,transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />
            <img
              src="/watch.png"
              alt="Sensor Intelligence"
              style={{
                width: "100%",
                height: "auto",
                position: "relative",
                zIndex: 1,
                borderRadius: 4,
              }}
            />
          </div>
          <div
            style={{
              flex: "1 1 360px",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div
              style={{
                width: 44,
                height: 4,
                background: gold,
                borderRadius: 2,
              }}
            />
            <Tag>Advanced Sensor Intelligence</Tag>
            <h2
              className="teko"
              style={{
                fontWeight: 700,
                fontSize: "clamp(1.8rem,3.5vw,2.6rem)",
                textTransform: "uppercase",
                lineHeight: 1.05,
                color: ink,
              }}
            >
              Powered by Advanced
              <br />
              <span style={{ color: olive }}>Sensor Intelligence.</span>
            </h2>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.8,
                color: midGray,
                maxWidth: 480,
              }}
            >
              The ARS Performance Tracker combines precision sensors tailored to
              team sports — offering a versatile solution for continuous athlete
              monitoring. Accuracy, durability, and comfort from the wrist.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                marginTop: 8,
              }}
            >
              {[
                {
                  qty: "4×",
                  label: "Accelerometers",
                  desc: "High-precision movement data during training and matches.",
                  c: olive,
                },
                {
                  qty: "3×",
                  label: "Gyroscopes",
                  desc: "Athlete motion and body orientation in 3D space.",
                  c: gold,
                },
                {
                  qty: "1×",
                  label: "Magnetometer",
                  desc: "Spatial awareness and directional tracking accuracy.",
                  c: olive,
                },
                {
                  qty: "GPS",
                  label: "/ LPS Connectivity",
                  desc: "Real-time location tracking during matches and training.",
                  c: gold,
                },
                {
                  qty: "1×",
                  label: "Barometer",
                  desc: "Altitude changes and player movement dynamics.",
                  c: olive,
                },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    padding: "12px 16px",
                    borderLeft: `3px solid ${s.c}`,
                    background:
                      s.c === gold
                        ? "rgba(201,168,76,.05)"
                        : "rgba(116,124,39,.05)",
                    borderRadius: "0 4px 4px 0",
                  }}
                >
                  <span
                    className="bc"
                    style={{ fontWeight: 900, fontSize: 20, color: s.c }}
                  >
                    {s.qty}{" "}
                  </span>
                  <span
                    className="bc"
                    style={{
                      fontWeight: 700,
                      fontSize: 14,
                      textTransform: "uppercase",
                      letterSpacing: ".04em",
                      color: ink,
                    }}
                  >
                    {s.label}
                  </span>
                  <p style={{ fontSize: 12, color: midGray, marginTop: 2 }}>
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUR PILLARS ────────────────────────────────────── */}
      <section
        id="team"
        style={{
          background: `linear-gradient(135deg, #1a1f14 0%, #222814 100%)`,
          padding: "72px 24px",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: 20,
          }}
        >
          {[
            {
              title: "Built for Athletes",
              desc: "Durable, sweat-proof, optimised for continuous wear in dynamic training environments.",
              c: olive,
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  style={{ width: 32, height: 32 }}
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
              ),
            },
            {
              title: "Longer Battery Life",
              desc: "Efficient power management for uninterrupted data collection throughout the training day.",
              c: gold,
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  style={{ width: 32, height: 32 }}
                >
                  <rect x="2" y="7" width="16" height="10" rx="2" />
                  <path d="M22 11v2M6 11v2M10 11v2" />
                </svg>
              ),
            },
            {
              title: "Multi-Metric Monitoring",
              desc: "Speed, stamina, skill, HR, and training load — all from the wrist in real time.",
              c: olive,
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  style={{ width: 32, height: 32 }}
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                </svg>
              ),
            },
            {
              title: "Seamless Integration",
              desc: "API-ready for pairing with mobile apps, cloud platforms, and real-time coaching alert systems.",
              c: gold,
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  style={{ width: 32, height: 32 }}
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
              ),
            },
          ].map((p) => (
            <div
              key={p.title}
              className="ch"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 12,
                padding: "32px 20px",
                background: `linear-gradient(135deg, rgba(${parseInt(p.c.slice(1, 3), 16)},${parseInt(p.c.slice(3, 5), 16)},${parseInt(p.c.slice(5, 7), 16)},.08) 0%, rgba(${parseInt(p.c.slice(1, 3), 16)},${parseInt(p.c.slice(3, 5), 16)},${parseInt(p.c.slice(5, 7), 16)},.02) 100%)`,
                border: `2px solid ${p.c}50`,
                borderRadius: 8,
                transition: "all .3s ease,transform .3s ease",
              }}
            >
              <div style={{ color: p.c, textShadow: `0 0 16px ${p.c}40` }}>
                {p.icon}
              </div>
              <h4
                className="teko"
                style={{
                  fontWeight: 600,
                  fontSize: 14,
                  textTransform: "uppercase",
                  letterSpacing: ".06em",
                  color: white,
                }}
              >
                {p.title}
              </h4>
              <p
                style={{
                  fontSize: 12,
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,.6)",
                }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TEAM DEPLOYMENT ─────────────────────────────────── */}
      <section style={{ background: white, padding: "80px 24px" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: 64,
            alignItems: "center",
          }}
        >
          <div style={{ flex: "1 1 400px" }}>
            <FieldViz />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: 8,
                marginTop: 12,
              }}
            >
              {[
                { l: "Players", v: "22", c: olive },
                { l: "Active", v: "18", c: gold },
                { l: "Coverage", v: "100%", c: olive },
                { l: "Latency", v: "12ms", c: inkMid },
              ].map(({ l, v, c }) => (
                <div
                  key={l}
                  style={{
                    background: c,
                    borderRadius: 4,
                    padding: "10px 4px",
                    textAlign: "center",
                  }}
                >
                  <p
                    className="bc"
                    style={{ fontWeight: 900, fontSize: 18, color: white }}
                  >
                    {v}
                  </p>
                  <p
                    className="bc"
                    style={{
                      fontSize: 9,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: ".1em",
                      color: "rgba(255,255,255,.7)",
                      marginTop: 2,
                    }}
                  >
                    {l}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              flex: "1 1 340px",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div
              style={{
                width: 44,
                height: 4,
                background: olive,
                borderRadius: 2,
              }}
            />
            <Tag bg={gold}>Team Deployment</Tag>
            <h2
              className="teko"
              style={{
                fontWeight: 700,
                fontSize: "clamp(1.8rem,3.5vw,2.6rem)",
                textTransform: "uppercase",
                lineHeight: 1.05,
                color: ink,
              }}
            >
              Track Every Player,
              <br />
              <span style={{ color: gold }}>Any Sport.</span>
            </h2>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.8,
                color: midGray,
                maxWidth: 460,
              }}
            >
              Our athlete tracking system supports team environments by allowing
              coaches to monitor multiple players simultaneously. Full-scale
              performance analysis during training sessions and competitive
              matches.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Check color={gold}>Team performance analytics</Check>
              <Check color={olive}>Training load monitoring</Check>
              <Check color={gold}>Player comparison dashboards</Check>
              <Check color={olive}>Injury risk detection</Check>
            </div>
          </div>
        </div>
      </section>

      {/* ── ANALYTICS ───────────────────────────────────────── */}
      <section
        id="analytics"
        style={{ background: gold, padding: "80px 24px" }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: 64,
            alignItems: "center",
          }}
        >
          <div
            style={{
              flex: "1 1 340px",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div
              style={{
                width: 44,
                height: 4,
                background: white,
                borderRadius: 2,
              }}
            />
            <Tag bg={ink}>Analytics Platform</Tag>
            <h2
              className="teko"
              style={{
                fontWeight: 700,
                fontSize: "clamp(1.8rem,3.5vw,2.6rem)",
                textTransform: "uppercase",
                lineHeight: 1.05,
                color: white,
              }}
            >
              On and Off
              <br />
              <span style={{ color: ink }}>the Field.</span>
            </h2>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.8,
                color: "rgba(255,255,255,.8)",
                maxWidth: 460,
              }}
            >
              Detailed performance insights during and after matches. Track
              athlete movement, speed, stamina, and performance trends using
              powerful dashboards.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "Real-time performance dashboards",
                "Video + data integration",
                "Training session reports",
                "Athlete performance history",
              ].map((c) => (
                <div
                  key={c}
                  style={{ display: "flex", alignItems: "center", gap: 12 }}
                >
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 3,
                      background: ink,
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
                  <span style={{ fontSize: 14, color: white, fontWeight: 500 }}>
                    {c}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ flex: "1 1 400px" }}>
            <div
              style={{
                background: ink,
                borderRadius: 8,
                padding: 24,
                border: `2px solid ${goldDark}`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 20,
                }}
              >
                <span
                  className="bc"
                  style={{
                    fontWeight: 900,
                    fontSize: 13,
                    textTransform: "uppercase",
                    letterSpacing: ".08em",
                    color: white,
                  }}
                >
                  Session Analytics
                </span>
                <span
                  className="bc"
                  style={{
                    background: olive,
                    color: white,
                    padding: "4px 10px",
                    fontSize: 10,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    borderRadius: 3,
                  }}
                >
                  Live
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 5,
                  alignItems: "flex-end",
                  height: 96,
                  marginBottom: 20,
                }}
              >
                {[65, 80, 55, 90, 70, 85, 60, 95, 75, 88, 50, 72].map(
                  (h, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        borderRadius: "2px 2px 0 0",
                        height: `${h}%`,
                        background:
                          i === 7
                            ? gold
                            : i === 3
                              ? olive
                              : "rgba(116,124,39,.25)",
                      }}
                    />
                  ),
                )}
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
                  gap: 8,
                }}
              >
                {[
                  { l: "Avg Speed", v: "28.4", u: "km/h", c: olive },
                  { l: "Distance", v: "8.2", u: "km", c: gold },
                  { l: "Load Score", v: "87", u: "/100", c: oliveLight },
                ].map(({ l, v, u, c }) => (
                  <div
                    key={l}
                    style={{
                      textAlign: "center",
                      padding: 10,
                      background: "rgba(255,255,255,.06)",
                      border: `1px solid ${c}40`,
                      borderRadius: 4,
                    }}
                  >
                    <p
                      className="bc"
                      style={{
                        fontSize: 9,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,.5)",
                        marginBottom: 4,
                      }}
                    >
                      {l}
                    </p>
                    <p
                      className="bc"
                      style={{ fontWeight: 900, fontSize: 14, color: c }}
                    >
                      {v}
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 400,
                          color: "rgba(255,255,255,.5)",
                          marginLeft: 2,
                        }}
                      >
                        {u}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESEARCH ────────────────────────────────────────── */}
      <section style={{ background: "#747c27", padding: "80px 24px" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: 64,
            alignItems: "center",
          }}
        >
          <div
            style={{
              flex: "1 1 360px",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div
              style={{
                width: 44,
                height: 4,
                background: gold,
                borderRadius: 2,
              }}
            />
            <Tag bg={gold}>Sports Research</Tag>
            <h2
              className="teko"
              style={{
                fontWeight: 700,
                fontSize: "clamp(1.8rem,3.5vw,2.6rem)",
                textTransform: "uppercase",
                lineHeight: 1.05,
                color: white,
              }}
            >
              Powered by
              <br />
              <span style={{ color: goldLight }}>Sports Research.</span>
            </h2>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.8,
                color: "rgba(255,255,255,.65)",
                maxWidth: 460,
              }}
            >
              Designed with sports science methodologies to ensure accurate data
              collection and meaningful performance insights. Validated across
              multiple sport disciplines.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
                marginTop: 8,
              }}
            >
              <MBar label="Measurement Accuracy" pct={99} color={goldLight} />
              <MBar label="Sensor Reliability" pct={97} color={oliveLight} />
              <MBar label="Latency Reduction" pct={88} color={goldLight} />
              <MBar label="Injury Prediction" pct={82} color={oliveLight} />
            </div>
          </div>
          <div
            style={{
              flex: "0 1 360px",
              background: "#222814",
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "40px 20px",
              position: "relative",
              overflow: "hidden",
              minHeight: 280,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "radial-gradient(circle,rgba(116,124,39,.2) 1px,transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />
            <video
              src="/file.mp4" // your video file name
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "auto",
                position: "relative",
                zIndex: 1,
                borderRadius: 4,
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── CINEMATIC CLOSE-UP ──────────────────────────────── */}
      <section
        style={{
          padding: "80px 24px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle,rgba(116,124,39,.15) 1px,transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <model-viewer
            src="/smartwatch.glb"
            auto-rotate
            camera-controls
            exposure="0.8"
            shadow-intensity="1"
            tone-mapping="commerce"
            environment-image="night"
            style={{
              width: "100%",
              height: "100%",
              background: "transparent",
              filter: "brightness(0.4) contrast(1.4) saturate(0.8)",
            }}
          ></model-viewer>
          <p
            className="bc"
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.1rem,2.5vw,1.7rem)",
              textTransform: "uppercase",
              letterSpacing: ".1em",
              color: ink,
            }}
          >
            Train Smarter. Perform Better.
          </p>
        </div>
      </section>

      {/* ── CONTACT FORM ────────────────────────────────────── */}
      <section id="contact" style={{ background: white, padding: "80px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div
              style={{
                width: 44,
                height: 4,
                background: gold,
                borderRadius: 2,
                margin: "0 auto 16px",
              }}
            />
            <Tag bg={gold}>Get Started</Tag>
            <h2
              className="teko"
              style={{
                fontWeight: 700,
                fontSize: "clamp(2rem,4vw,3rem)",
                textTransform: "uppercase",
                color: ink,
                marginTop: 16,
              }}
            >
              Get in Touch
            </h2>
            <p
              style={{
                marginTop: 12,
                fontSize: 14,
                color: midGray,
                maxWidth: 460,
                margin: "12px auto 0",
              }}
            >
              Ready to bring ARS Performance Tracking to your academy or team?
              Fill in your details and our team will reach out.
            </p>
          </div>
          <form
            onSubmit={submit}
            style={{
              background: offWhite,
              borderRadius: 8,
              padding: 40,
              border: "2px solid #e8e4dc",
            }}
          >
            {submitted && (
              <div
                style={{
                  marginBottom: 20,
                  padding: "12px 16px",
                  background: olive,
                  color: white,
                  borderRadius: 4,
                  fontSize: 14,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  style={{ width: 16, height: 16 }}
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Message sent! Our team will be in touch soon.
              </div>
            )}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
                gap: 16,
              }}
            >
              {[
                { k: "firstName", l: "First Name", t: "text", p: "John" },
                { k: "lastName", l: "Last Name", t: "text", p: "Smith" },
                {
                  k: "email",
                  l: "Work Email",
                  t: "email",
                  p: "john@academy.com",
                },
                {
                  k: "phone",
                  l: "Phone Number",
                  t: "tel",
                  p: "+91 98765 43210",
                },
                {
                  k: "organization",
                  l: "Organization",
                  t: "text",
                  p: "ARS Sports Academy",
                },
                { k: "sport", l: "Sport", t: "text", p: "Football, Cricket…" },
              ].map(({ k, l, t, p }) => (
                <div key={k}>
                  <label
                    className="bc"
                    style={{
                      display: "block",
                      fontSize: 10,
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: ".14em",
                      color: ink,
                      marginBottom: 6,
                    }}
                  >
                    {l}
                  </label>
                  <input
                    type={t}
                    placeholder={p}
                    className="inp"
                    value={form[k]}
                    onChange={upd(k)}
                  />
                </div>
              ))}
              {[
                {
                  k: "country",
                  l: "Country",
                  opts: [
                    "India",
                    "United States",
                    "United Kingdom",
                    "Australia",
                    "Germany",
                    "France",
                    "Brazil",
                    "UAE",
                    "Singapore",
                    "Canada",
                  ],
                },
                {
                  k: "language",
                  l: "Preferred Language",
                  opts: [
                    "English",
                    "Hindi",
                    "Spanish",
                    "French",
                    "Arabic",
                    "German",
                    "Portuguese",
                  ],
                },
                {
                  k: "role",
                  l: "Role in Organization",
                  opts: [
                    "Coach",
                    "Athlete",
                    "Analyst",
                    "Academy Director",
                    "Sports Scientist",
                    "Physiotherapist",
                    "Other",
                  ],
                },
              ].map(({ k, l, opts }) => (
                <div key={k}>
                  <label
                    className="bc"
                    style={{
                      display: "block",
                      fontSize: 10,
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: ".14em",
                      color: ink,
                      marginBottom: 6,
                    }}
                  >
                    {l}
                  </label>
                  <select className="inp" value={form[k]} onChange={upd(k)}>
                    <option value="">Select {l}</option>
                    {opts.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16 }}>
              <label
                className="bc"
                style={{
                  display: "block",
                  fontSize: 10,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: ".14em",
                  color: ink,
                  marginBottom: 6,
                }}
              >
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your team, training setup, and goals…"
                className="inp"
                style={{ resize: "none" }}
                value={form.message}
                onChange={upd("message")}
              />
            </div>
            <button
              type="submit"
              className="btn-s bc"
              style={{ marginTop: 20 }}
            >
              Submit
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                style={{ width: 16, height: 16 }}
              >
                <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer style={{ background: ink }}>
        <div
          style={{
            height: 4,
            background: `linear-gradient(90deg,${olive},${gold})`,
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
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    background: olive,
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
                    color: white,
                  }}
                >
                  ARS Kreedashala
                </span>
              </div>
              <p style={{ fontSize: 12, lineHeight: 1.7, color: "#4a4a30" }}>
                Advanced athlete performance tracking for the modern sports
                ecosystem.
              </p>
              <div style={{ display: "flex", gap: 8 }}>
                <div
                  style={{
                    width: 20,
                    height: 20,
                    background: olive,
                    borderRadius: 3,
                  }}
                />
                <div
                  style={{
                    width: 20,
                    height: 20,
                    background: gold,
                    borderRadius: 3,
                  }}
                />
              </div>
            </div>
            {[
              {
                h: "Sports",
                items: [
                  "Football",
                  "Basketball",
                  "Cricket",
                  "Hockey",
                  "Athletics",
                ],
              },
              {
                h: "Products",
                items: [
                  "Performance Tracker",
                  "Analytics Platform",
                  "Team Monitoring",
                  "Athlete Dashboard",
                ],
              },
              { h: "Company", items: ["About", "Careers", "Contact"] },
              { h: "Legal", items: ["Privacy Policy", "Terms & Conditions"] },
            ].map(({ h, items }) => (
              <div key={h}>
                <p
                  className="bc"
                  style={{
                    fontSize: 10,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: ".14em",
                    color: oliveLight,
                    marginBottom: 16,
                  }}
                >
                  {h}
                </p>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 10 }}
                >
                  {items.map((s) => (
                    <a
                      key={s}
                      href="#"
                      style={{
                        fontSize: 12,
                        color: "#4a4a30",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = white)}
                      onMouseLeave={(e) => (e.target.style.color = "#4a4a30")}
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
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
    </div>
  );
}
