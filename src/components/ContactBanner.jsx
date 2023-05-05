import React, { useRef, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import Button from "./Button";
import PText from "./PText";
import "../styles/ContactBanner.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ContactBanner() {
  const scrollTrigerredContactRef = useRef(null);

  useEffect(() => {
    const contactBanner = scrollTrigerredContactRef.current;
    gsap.fromTo(
      contactBanner,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: "easeInOut",
        scrollTrigger: {
          trigger: contactBanner,
          start: "top 70%",
          end: "center 60%",
          toggleActions: "restart none none reverse",
        },
      }
    );
  });
  return (
    <div className="container contactBanner__container">
      <div
        className="contactBanner__wrapper card"
        ref={scrollTrigerredContactRef}
      >
        <PText>
          <Typewriter
            words={[
              "Are you looking for a creative web developer?",
              "Do you want to have a good-looking website?",
            ]}
            loop={5}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1000}
          />
        </PText>
        <h3 className="contactBanner__heading">Let me know</h3>
        <Button btnText="Contact Me" btnLink="/contact" active={true} />
      </div>
    </div>
  );
}
