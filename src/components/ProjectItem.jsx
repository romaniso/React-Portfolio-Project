import React from "react";
import { Link } from "react-router-dom";
import FitnessImg from "../assets/images/projects/fitness.png";

export default function ProjectItem({
  img = FitnessImg,
  title = "Project Name",
  des = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,mollitia facilis sit nesciunt veritatis adipisci similique numquamnemo error possimus optio atque sequi voluptas quod recusandae ullamiusto illo debitis!",
}) {
  return (
    <div className="projectItem">
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__des">{des}</p>
      </div>
    </div>
  );
}
