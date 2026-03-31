# CONTACT FORM SECTION EXTRACTION

**Lines:** 3199-3450
**Type:** Contact form with validation and success state
**Dependencies:** form, setForm, upd(), submit() from parent state

## Complete JSX Code Structure

```jsx
<AnimatedSection animationType="fadeInUp">
  <section id="contact" style={{ background: white, padding: "80px 24px" }}>
    <div style={{ maxWidth: 860, margin: "0 auto" }}>
      {/* Header */}
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
          Ready to bring ARS Performance Tracking to your academy or team? Fill
          in your details and our team will reach out.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={submit}
        style={{
          background: offWhite,
          borderRadius: 8,
          padding: 40,
          border: "2px solid #e8e4dc",
        }}
      >
        {/* Success Message */}
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

        {/* Fields Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: 16,
          }}
        >
          {/* Text & Email Inputs */}
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
            {
              k: "sport",
              l: "Sport",
              t: "text",
              p: "Football, Cricket…",
            },
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

          {/* Select Dropdowns */}
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

        {/* Message Textarea */}
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

        {/* Submit Button */}
        <button type="submit" className="btn-s bc" style={{ marginTop: 20 }}>
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
</AnimatedSection>
```

## State Management Required (Parent Level)

```javascript
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

// Helper functions
const upd = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));

const submit = (e) => {
  e.preventDefault();
  setSubmitted(true);
  // Clear success message after 4 seconds
  setTimeout(() => setSubmitted(false), 4000);
  // Reset form
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
```

## Color Constants Required

```javascript
const gold = "#c9a84c";
const ink = "#111408";
const midGray = "#6b6b50";
const offWhite = "#f7f6f1";
const olive = "#747c27";
const white = "#ffffff";
```

## Components Used

### Tag Component

```javascript
<Tag bg={gold}>Get Started</Tag>
```

### AnimatedSection Component

```javascript
<AnimatedSection animationType="fadeInUp">
  {/* Content fades in from bottom on scroll */}
</AnimatedSection>
```

## Form Fields Structure

### Text Inputs (6 fields)

- firstName: "First Name" → placeholder "John"
- lastName: "Last Name" → placeholder "Smith"
- email: "Work Email" → placeholder "john@academy.com"
- phone: "Phone Number" → placeholder "+91 98765 43210"
- organization: "Organization" → placeholder "ARS Sports Academy"
- sport: "Sport" → placeholder "Football, Cricket…"

### Select Dropdowns (3 fields)

- country: 10 options (India, USA, UK, Australia, Germany, France, Brazil, UAE, Singapore, Canada)
- language: 7 options (English, Hindi, Spanish, French, Arabic, German, Portuguese)
- role: 7 options (Coach, Athlete, Analyst, Academy Director, Sports Scientist, Physiotherapist, Other)

### Textarea

- message: 4 rows, placeholder "Tell us about your team, training setup, and goals…"

## CSS Classes Used

- `.bc` (Barlow Condensed - for labels)
- `.teko` (Teko - for heading)
- `.inp` (Input styling - text, email, tel, select, textarea)
- `.btn-s` (Submit button styling)

## Inline Styles Summary

| Element    | Key Styles                                                 |
| ---------- | ---------------------------------------------------------- |
| Section    | background white, padding 80px 24px                        |
| Container  | maxWidth 860, margin 0 auto                                |
| Header     | textAlign center, marginBottom 48                          |
| Accent bar | width 44, height 4, background gold                        |
| Form       | background offWhite, padding 40, borderRadius 8            |
| Grid       | display grid, repeat(auto-fit, minmax(240px, 1fr)), gap 16 |
| Labels     | fontSize 10, fontWeight 800, uppercase, gap 6 from input   |
| Inputs     | width 100%, padding 11px 14px, border 2px #e0ddd5          |
| Textarea   | resize none, same styling as inputs                        |
| Button     | width 100%, flex centered, gap 8 with icon                 |
| Success    | olive background, white text, flex gap 8                   |

## Responsive Behavior

### 1024px+

- Full form layout with 2-3 columns
- 240px minimum column width

### 768px - 1024px

- Adjusted column layout
- Labels and inputs maintain styling

### 480px and below

- Single column layout (minmax(240px, 1fr) enforces)
- Full-width inputs and textarea
- Proper label spacing maintained

## Interactive Features

1. **Form Input Handling:**
   - All inputs controlled via `form` state
   - onChange handlers update state via `upd(key)` function
   - All input types properly defined

2. **Form Submission:**
   - preventDefault() stops page reload
   - Sets submitted state to true
   - Clears form after 4 seconds
   - Resets submitted state

3. **Success Message:**
   - Appears conditionally based on `submitted` state
   - Shows checkmark icon
   - Auto-disappears after 4 seconds
   - Margin pushes form fields down

4. **Validation:**
   - Currently none - add on parent level as needed
   - Email type provides basic HTML5 validation
   - Phone type provides basic HTML5 validation

## Data Submission Notes

The form currently doesn't submit to a backend. To add submission:

1. Add API call in submit() function before setSubmitted(true)
2. Add error handling for failed submissions
3. Optionally validate required fields before submission
4. Consider adding loading state during submission

## Accessibility Features

- Proper label associations
- Semantic HTML form structure
- Input types match data (email, tel, text)
- Alt text on SVG icons
- Color contrast maintained

## Key Design Elements

- Centered layout with max-width constraint
- Gold accent bar at top of form
- Off-white form background for distinction
- Success message with checkmark
- Submit button with arrow icon
- Multi-column responsive grid layout
- Clear visual hierarchy with font sizes and weights
