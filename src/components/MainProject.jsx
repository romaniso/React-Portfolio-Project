import React, { useRef, useEffect } from "react";
import Portfolio from "../assets/images/projects/portfolio-img.jpg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function MainProject({
  index = null,
  gif = Portfolio,
  title = "Project Name",
  type = "Landing page",
  des = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,mollitia facilis sit nesciunt veritatis adipisci similique numquamnemo error possimus optio atque sequi voluptas quod recusandae ullamiusto illo debitis!",
  links,
  technologies = ["React", "SCSS", "GSAP", "Tailwind", "Next.js"],
  inProgress,
}) {
  const scrollTrigerredElRef = useRef(null);
  useEffect(() => {
    const i = index;
    const el = scrollTrigerredElRef.current;
    gsap.fromTo(
      el,
      { x: `${i % 2 === 0 ? "+100" : "-600"}`, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "easeInOut",
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          end: "bottom 60%",
          toggleActions: "restart none none reverse",
          toggleClass: "scrolled",
        },
      }
    );
  }, [index]);
  return (
    <div className="main-project" ref={scrollTrigerredElRef}>
      <a
        href={links.live}
        target="_blank"
        rel="noreferrer"
        className="main-project__img"
      >
        <img src={gif} alt="project" />
        {inProgress && (
          <div className="main-project__progress">
            <p>In progress</p>
          </div>
        )}
      </a>
      <article className="main-project__content">
        <header className="main-project__heading">
          <p className="main-project__type">{type}</p>
          <h3 className="main-project__title">{title}</h3>
        </header>
        <main className="main-project__info">
          <p className="main-project__des">{des}</p>
          <section className="main-project__links">
            {links.live && (
              <a
                className="main-project__btn"
                href={links.live}
                target="_blank"
                rel="noreferrer"
              >
                Open live
              </a>
            )}

            <a
              className="main-project__btn"
              href={links.gitHub}
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repo
            </a>
          </section>
        </main>
        <footer className="main-project__stack">
          {technologies.map((tech, index) => {
            return (
              <p className="main-project__technology" key={index}>
                {tech}
              </p>
            );
          })}
        </footer>
      </article>
    </div>
  );
}
