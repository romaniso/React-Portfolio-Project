import React from "react";
import ContactSection from "../components/ContactSection";
import Location from "../components/Location";
import "../styles/Contact.css";
import { useState } from "react";
import { useEffect } from "react";

export default function Contact() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <div className={loaded ? "contact__wrapper" : "contact__wrapper--unloaded"}>
      <ContactSection />
      <Location />
    </div>
  );
}
