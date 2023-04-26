import React, { useRef, useEffect } from "react";
import TitleSection from "./TitleSection";
import projects from "../assets/data/projects";
import MainProject from "./MainProject";
import "../styles/ProjectsSection.css";
import "../styles/MainProject.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const scrollTrigerredElRef = useRef(null);
  useEffect(() => {
    const el = scrollTrigerredElRef.current;
    gsap.fromTo(
      el,
      { y: "+=100", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "easeInOut",
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          end: "center 60%",
          toggleActions: "restart none none reverse",
          toggleClass: "scrolled",
        },
      }
    );
  }, []);
  return (
    <>
      <div
        className="main-projects__container container"
        ref={scrollTrigerredElRef}
      >
        <TitleSection heading="Projects" subheading="My recent works" />
        <div className="main-projects">
          {projects.map((project, index) => {
            if (index >= 5) return null;
            return (
              <MainProject
                key={project.id}
                title={project.name}
                gif={project.gif}
                des={project.des}
                links={project.links}
                technologies={project.technologies}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
