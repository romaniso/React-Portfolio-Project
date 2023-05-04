import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactBanner from "../components/ContactBanner";
import ExperienceSection from "../components/ExperienceSection";
import Technologies from "../components/Technologies";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <Technologies />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactBanner />
    </div>
  );
}
