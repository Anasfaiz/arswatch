import AnimatedSection from "../ui/AnimatedSection";
import FAQ from "../ui/FAQ";
import { colors } from "../../styles/theme";

/**
 * FAQ section
 */
export default function FAQSection() {
  const FAQS = [
    {
      q: "What sports are supported?",
      a: "The ARS tracker supports 50+ sports including football, cricket, basketball, hockey, tennis, athletics, and more. Custom sport definitions can also be created.",
    },
    {
      q: "How long is the battery life?",
      a: "The device provides up to 48 hours of continuous monitoring on a single charge, with ultra-low power mode extending usage up to 7 days.",
    },
    {
      q: "Is the data secure?",
      a: "Yes, all data is encrypted end-to-end with military-grade security. We comply with GDPR and international data protection standards.",
    },
    {
      q: "What is the accuracy rate?",
      a: "Our medical-grade sensors achieve 99.8% accuracy for heart rate, SpO2, and movement metrics across various conditions.",
    },
    {
      q: "Does it work offline?",
      a: "Yes, the device stores data locally and syncs automatically when connected. No loss of tracking data even without constant connectivity.",
    },
    {
      q: "Can I integrate with existing systems?",
      a: "Absolutely. We provide REST APIs and SDKs for integration with LMS, CRM, and performance tracking platforms.",
    },
  ];

  return (
    <AnimatedSection animationType="fadeInUp">
      <section
        id="sec-faqs"
        style={{ background: colors.white, padding: "80px 24px" }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2
              className="teko"
              style={{
                fontWeight: 700,
                fontSize: "clamp(2rem,5vw,4rem)",
                textTransform: "uppercase",
                color: colors.ink,
              }}
            >
              Frequently Asked{" "}
              <span style={{ color: colors.olive }}>Questions</span>
            </h2>
          </div>

          <div>
            {FAQS.map((f) => (
              <FAQ key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
