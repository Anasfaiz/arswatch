import { useState } from "react";

// Sections
import Navbar from "./sections/Navbar";
import HeroSection from "./sections/HeroSection";
import BuiltForMovementSection from "./sections/BuiltForMovementSection";
import FeaturesSection from "./sections/FeaturesSection";
import TeamDeploymentSection from "./sections/TeamDeploymentSection";
import SystemArchitectureSection from "./sections/SystemArchitectureSection";
import SpecificationsSection from "./sections/SpecificationsSection";
import VitalMonitoringShowcase from "./sections/VitalMonitoringShowcase";
import FAQSection from "./sections/FAQSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";

// Styles
import "../styles/globals.css";
import "../styles/responsive.css";
import { colors } from "../styles/theme";

/**
 * ARS Kreedashala Landing Page - Main Component
 *
 * ✅ Refactored into modular, reusable components
 * ✅ Centralized styling with theme.js
 * ✅ Clean separation of concerns
 * ✅ Easy to maintain and extend
 */
export default function ARSLandingPage({ onNavBlog }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      style={{
        fontFamily: "'Barlow', sans-serif",
        background: colors.white,
        color: colors.ink,
        overflowX: "hidden",
        margin: 0,
        padding: 0,
      }}
    >
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onNavBlog={onNavBlog}
      />
      <HeroSection />
      <BuiltForMovementSection />
      <FeaturesSection />
      <VitalMonitoringShowcase />
      <SystemArchitectureSection />
      <TeamDeploymentSection />
      <SpecificationsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
