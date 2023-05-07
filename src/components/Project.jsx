import { useState } from "react";

import Portfolio from "../assets/images/projects/portfolio-img.jpg";
import { AiFillGithub } from "react-icons/ai";
import { HiExternalLink } from "react-icons/hi";
import { GiClick } from "react-icons/gi";

export default function Project({
  img = Portfolio,
  title = "Project Name",
  des = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,mollitia facilis sit nesciunt veritatis adipisci similique numquamnemo error possimus optio atque sequi voluptas quod recusandae ullamiusto illo debitis!",
  links,
  technologies = ["HTML/SCSS", "Vanilla JS", "OOP", "Gsap", "Webpack 5"],
  gif,
  type = "a type of a project",
}) {
  const [flippedCard, setFlippedCard] = useState(false);
  const onHandleClick = () => {
    setFlippedCard(!flippedCard);
  };
  const onHandleMouseLeave = () => {
    if (flippedCard) {
      setFlippedCard(!flippedCard);
    } else {
      return;
    }
  };

  return (
    <div className="project__container">
      <article
        className={flippedCard ? "project flipped" : "project"}
        onMouseLeave={onHandleMouseLeave}
      >
        <section className="project__front">
          <img src={img} alt="" />
          <div
            className="project__flipper"
            id="card-flipper"
            onClick={onHandleClick}
          >
            <GiClick />
          </div>
          <div className="project__info project-info">
            <h3 className="project-info__title">{title}</h3>
            <p className="project-info__type">{type}</p>
            <p className="project-info__des">{des}</p>
            <div className="project-info__links">
              <a
                className="project-info__btn"
                href={links.live}
                target="_blank"
                rel="noreferrer"
              >
                <HiExternalLink />
              </a>
              <a
                className="project-info__btn"
                href={links.gitHub}
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            </div>
            <div className="project-info__technologies">
              {technologies.map((technology, index) => {
                return (
                  <p className="project-info__technology" key={index}>
                    {technology}
                  </p>
                );
              })}
            </div>
          </div>
        </section>
        <div className="project__back">
          <div className="project__img">
            <img src={gif ? gif : img} alt="project" />
          </div>
        </div>
      </article>
    </div>
  );
}
