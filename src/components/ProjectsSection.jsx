import React from "react";
import TitleSection from "./TitleSection";
import { Swiper } from "swiper/react";

export default function ProjectsSection() {
  return (
    <>
      <div className="container">
        <TitleSection heading="Projects" subheading="My recent works" />
        <div className="projects__i">
          <Swiper></Swiper>
        </div>
      </div>
    </>
  );
}
