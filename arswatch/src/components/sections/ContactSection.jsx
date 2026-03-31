import { useState } from "react";
import AnimatedSection from "../ui/AnimatedSection";
import Tag from "../ui/Tag";
import { colors } from "../../styles/theme";

/**
 * Contact form section
 */
export default function ContactSection() {
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
    <AnimatedSection animationType="fadeInUp">
      <section
        id="contact"
        style={{ background: colors.white, padding: "80px 24px" }}
      >
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div
              style={{
                width: 44,
                height: 4,
                background: colors.gold,
                borderRadius: 2,
                margin: "0 auto 16px",
              }}
            />
            <Tag bg={colors.gold}>Get Started</Tag>
            <h2
              className="teko"
              style={{
                fontWeight: 700,
                fontSize: "clamp(2rem,4vw,3rem)",
                textTransform: "uppercase",
                color: colors.ink,
                marginTop: 16,
              }}
            >
              Get in Touch
            </h2>
            <p
              style={{
                marginTop: 12,
                fontSize: 14,
                color: colors.midGray,
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
              background: colors.offWhite,
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
                  background: colors.olive,
                  color: colors.white,
                  borderRadius: 4,
                  fontSize: 14,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                ✓ Message sent! Our team will be in touch soon.
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
                      color: colors.ink,
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
                  opts: ["India", "USA", "UK", "Australia", "Other"],
                },
                {
                  k: "language",
                  l: "Language",
                  opts: ["English", "Hindi", "Spanish", "French", "Other"],
                },
                {
                  k: "role",
                  l: "Role",
                  opts: ["Coach", "Athlete", "Analyst", "Director", "Other"],
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
                      color: colors.ink,
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
                  color: colors.ink,
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
              Submit →
            </button>
          </form>
        </div>
      </section>
    </AnimatedSection>
  );
}
