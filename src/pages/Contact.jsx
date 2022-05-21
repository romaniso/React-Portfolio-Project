import React from "react";
import ContactSection from "../components/ContactSection";
import Location from "../components/Location";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact__wrapper">
      <ContactSection />
      <Location />
    </div>
  );
}
