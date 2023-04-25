import React, { useRef, useEffect } from "react";
import TitleSection from "./TitleSection";
import { Swiper, SwiperSlide } from "swiper/react";
import projects from "../assets/data/projects";
import ProjectItem from "./ProjectItem";
import "../styles/ProjectsSection.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";

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
      <div className="projects__container container" ref={scrollTrigerredElRef}>
        <TitleSection heading="Projects" subheading="My recent works" />
        <div className="projects">
          <Swiper
            // className="mySwiper"
            // pagination={true}
            navigation={true}
            spaceBetween={30}
            slidesPerView={1}
            modules={[Navigation, Pagination]}
            breakpoints={{
              // when window width is greater or equal than 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is greater or equal than 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is greater or equal than 1200px
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {projects.map((project, index) => {
              if (index >= 5) return null;
              return (
                <SwiperSlide key={project.id}>
                  <ProjectItem
                    title={project.name}
                    img={project.img}
                    des={project.des}
                    links={project.links}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
}
