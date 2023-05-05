import React, { useState, useRef, useEffect } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import PText from "./PText";
import TitleSection from "./TitleSection";
import "../styles/TestimonialsSection.css";
import testimonials from "../assets/data/testimonials";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// React Transition Group is not working / to FIX

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = testimonials[activeIndex];

  const handlePrev = () => {
    if (activeIndex >= testimonials.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((oldIndex) => oldIndex + 1);
    }
  };

  const handleNext = () => {
    if (activeIndex <= 0) {
      setActiveIndex(testimonials.length - 1);
    } else {
      setActiveIndex((oldIndex) => oldIndex - 1);
    }
  };

  const scrollTrigerredContentRef = useRef(null);

  useEffect(() => {
    const testimonial = scrollTrigerredContentRef.current;
    gsap.fromTo(
      testimonial,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        ease: "easeInOut",
        scrollTrigger: {
          trigger: ".testimonials__container",
          start: "center 40%",
          end: "bottom 0%",
          toggleActions: "restart reverse restart reverse",
          toggleClass: "scrolled",
        },
      }
    );
  });

  return (
    <div className="testimonials__container container">
      <TitleSection
        heading="Testimonials"
        subheading="Some reviews from my clients"
      />
      <div className="testimonial__wrapper" ref={scrollTrigerredContentRef}>
        <SwitchTransition>
          <CSSTransition key={activeSlide.id} timeout={300} classNames="fade">
            <div className="testimonial__info">
              <div className="testimonial__des">
                <PText>{activeSlide.des}</PText>
              </div>
              <h2 className="testimonial__name">{activeSlide.name}</h2>
              <p className="testimonial__title">
                {activeSlide.title}, <br /> {activeSlide.org}
              </p>
            </div>
          </CSSTransition>
        </SwitchTransition>
        <div className="arrows">
          <div
            className="arrow--prev"
            onClick={handlePrev}
            role="button"
            tabIndex={0}
            onKeyDown={handlePrev}
          >
            <MdArrowBackIos />
          </div>
          <div
            className="arrow--next"
            onClick={handleNext}
            onChange={handleNext}
            role="button"
            tabIndex={0}
            onKeyDown={handleNext}
          >
            <MdArrowForwardIos />
          </div>
        </div>
      </div>
    </div>
  );
}
