import React, { useRef, useEffect } from "react";
import Button from "./Button";
import PText from "./PText";
import TitleSection from "./TitleSection";
import "../styles/AboutSection.css";
import AboutImg from "../assets/images/transparentMe.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const scrollTrigerredContentRef = useRef(null);
  const scrollTrigerredButtonsRef = useRef(null);
  const scrollTrigerredPhotoRef = useRef(null);
  useEffect(() => {
    const content = scrollTrigerredContentRef.current;
    const buttons = scrollTrigerredButtonsRef.current;
    const photo = scrollTrigerredPhotoRef.current;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".aboutSection__container",
        start: "top 50%",
        end: "bottom 30%",
        toggleActions: "restart reverse play reverse",
        toggleClass: "scrolled",
      },
    });
    tl.fromTo(
      content,
      { x: "-=100", opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "easeInOut",
      }
    )
      .fromTo(
        photo,
        { x: "+=50", opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "easeInOut",
        }
      )
      .fromTo(
        buttons,
        { x: "-=50", opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "easeInOut",
        }
      );
  }, []);
  return (
    <div>
      <div className="container">
        <div className="aboutSection__container">
          <div className="aboutSection__left">
            <div
              className="aboutSection__content"
              ref={scrollTrigerredContentRef}
            >
              <TitleSection
                className="title"
                subheading="Let's get to know"
                heading="About me"
              />
              <PText>
                I am a frontend developer who loves creating and learning. Stick
                around here and I'll show you what&nbsp;I&nbsp;can.
              </PText>
            </div>
            <div
              className="aboutSection__buttons"
              ref={scrollTrigerredButtonsRef}
            >
              <Button btnLink="/projects" btnText="Works" />
              <Button btnLink="/about" btnText="Read More" outline={true} />
            </div>
          </div>
          <div className="aboutSection__right" ref={scrollTrigerredPhotoRef}>
            <img className="aboutSection__img" src={AboutImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
