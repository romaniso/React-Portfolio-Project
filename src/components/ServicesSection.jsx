import React, { useRef, useEffect } from "react";
import ServicesSectionItem from "./ServicesSectionItem";
import { AiOutlineDesktop } from "react-icons/ai";
import { BiCodeCurly } from "react-icons/bi";
import { BsPhone } from "react-icons/bs";
import TitleSection from "./TitleSection";
import "../styles/ServicesSection.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const scrollTrigerredElRef = useRef(null);
  const scrollTrigerredServiceFirstRef = useRef(null);
  const scrollTrigerredServiceSecondRef = useRef(null);
  const scrollTrigerredServiceThirdRef = useRef(null);
  useEffect(() => {
    const section = scrollTrigerredElRef.current;
    const fisrtService = scrollTrigerredServiceFirstRef.current;
    const secondService = scrollTrigerredServiceSecondRef.current;
    const thirdtService = scrollTrigerredServiceThirdRef.current;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "bottom 40%",
        toggleActions: "restart reverse play reverse",
        toggleClass: "scrolled",
      },
    });
    gsap.fromTo(
      section,
      { y: "+=100", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "easeInOut",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "center 60%",
          toggleActions: "restart none none reverse",
          toggleClass: "scrolled",
        },
      }
    );
    tl.fromTo(
      fisrtService,
      { y: "+=100", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "easeInOut",
      }
    )
      .fromTo(
        secondService,
        { y: "-=100", opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "easeInOut",
        }
      )
      .fromTo(
        thirdtService,
        { y: "+=100", opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "easeInOut",
        }
      );
  }, []);
  return (
    <div className="services__container container" ref={scrollTrigerredElRef}>
      <TitleSection heading="Services" subheading="What I offer" />

      <div className="services__items">
        <article
          className="services__item"
          ref={scrollTrigerredServiceFirstRef}
        >
          <ServicesSectionItem
            icon={<AiOutlineDesktop />}
            title="Website Design"
            des="I can do some simple ui/ux for your webpage that will help you enhance your online services and attract your potential clients"
          />
        </article>
        <article
          className="services__item"
          ref={scrollTrigerredServiceSecondRef}
        >
          <ServicesSectionItem
            icon={<BiCodeCurly />}
            title="Web Dev"
            des="I can develop your future website from scratch. I will code your webpage using up-to-date web technologies ensuring that your project is a high performance website"
          />
        </article>
        <article
          className="services__item"
          ref={scrollTrigerredServiceThirdRef}
        >
          <ServicesSectionItem
            icon={<BsPhone />}
            title="Web Mobile App"
            des="I also develop web apps which are responsive and good-looking in mobile devices. If you are looking for a user-friendly eye-catching mobile as an effective tool for your services, you are in the right place!"
          />
        </article>
      </div>
    </div>
  );
}
