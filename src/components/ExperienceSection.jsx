import { useRef, useEffect } from "react";
import Timeline from "./Timeline";
import TitleSection from "./TitleSection";
import "../styles/ExperienceSection.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSection() {
  const scrollTrigerredSectionRef = useRef(null);
  useEffect(() => {
    const section = scrollTrigerredSectionRef.current;
    gsap.fromTo(
      section,
      { opacity: 0, y: "+=100" },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "easeInOut",
        scrollTrigger: {
          trigger: section,
          start: "top 50%",
          end: "bottom 30%",
          toggleActions: "restart reverse play reverse",
          toggleClass: "scrolled",
        },
      }
    );
  }, []);
  return (
    <div
      className="experience-section__container container"
      ref={scrollTrigerredSectionRef}
    >
      <TitleSection heading="My experience " subheading="Where I’ve Worked" />
      <Timeline />
    </div>
  );
}
