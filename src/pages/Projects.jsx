import TitleSection from "../components/TitleSection";
import projects from "../assets/data/projects";
import "../styles/Projects.css";
import Project from "../components/Project";
import { useState } from "react";
import { useEffect } from "react";

export default function Projects() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <div className="projects__wrapper">
      <div
        className={
          loaded
            ? "projects__container container"
            : "projects__container--unloaded container"
        }
      >
        <TitleSection
          heading="Projects"
          subheading=" Check out my recent works"
        />
        <div className="projects__items">
          {projects.map((project) => (
            <Project
              key={project.id}
              img={project.img}
              title={project.name}
              des={project.des}
              links={project.links}
              technologies={project.technologies}
              gif={project.gif}
              type={project.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
