import { useRef, useEffect } from "react";
import "../styles/Timeline.css";
import Decor from "../assets/images/timeline-decor.png";
import Decor2 from "../assets/images/timeline-decor2.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
  const scrollTrigerredItem1Ref = useRef(null);
  const scrollTrigerredItem2Ref = useRef(null);
  useEffect(() => {
    const item1 = scrollTrigerredItem1Ref.current;
    const item2 = scrollTrigerredItem2Ref.current;
    gsap.fromTo(
      item1,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: "easeInOut",
        scrollTrigger: {
          trigger: item1,
          start: "center 80%",
          end: "bottom 0%",
          toggleActions: "restart reverse play reverse",
        },
      }
    );
    gsap.fromTo(
      item2,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: "easeInOut",
        scrollTrigger: {
          trigger: item2,
          start: "center 80%",
          end: "bottom 0%",
          toggleActions: "restart reverse play reverse",
        },
      }
    );
  }, []);
  return (
    <section className="timeline">
      <article
        className="timeline-item item-timeline"
        ref={scrollTrigerredItem1Ref}
      >
        <div className="item-timeline__date date">
          <img className="date__decor" src={Decor} alt="Decor" />
          <div className="date__badge">07.2022 – until now</div>
        </div>
        <div className="item-timeline__content content">
          <h3 className="content__job">Junior Frontend Developer</h3>
          <p className="content__company">IPG Health Spark Warsaw</p>
          <section className="content__description content-description">
            <ul className="content-description__list">
              <li className="content-description__item">
                Creating frontend software for pharmaceutical companies using{" "}
                <strong>
                  HTML/PUG, CSS/SCSS(SASS), JavaScript/Typescript, React,
                  Webpack, NPM, GIT
                </strong>
              </li>
              <li className="content-description__item">
                Creating websites, coding <strong> html email templates</strong>{" "}
                and <strong>e&nbsp;-&nbsp;detailing presentations</strong> using
                the aforementioned tools.
              </li>
              <li className="content-description__item">
                Building an e-detailing presentation generator using
                <strong> Typescript, Webpack, SCSS</strong>. Creating reusable
                frontend components based on <strong>OOP</strong>
              </li>
              <li className="content-description__item">
                Coding materials for the <strong>Veeva</strong> platform.
              </li>
              <li className="content-description__item">
                Managing the Sanofi website using the
                <strong> Sanofi Magnolia&nbsp;CMS</strong>.
              </li>
            </ul>
          </section>
        </div>
      </article>
      <article
        className="timeline-item item-timeline"
        ref={scrollTrigerredItem2Ref}
      >
        <div className="item-timeline__date date">
          <img className="date__decor" src={Decor2} alt="Decor" />
          <div className="date__badge">01.2021 – until now</div>
        </div>
        <div className="item-timeline__content content">
          <h3 className="content__job">Freelance Frontend Developer</h3>
          <p className="content__company">Freelancer</p>
          <section className="content__description content-description">
            <ul className="content-description__list">
              <li className="content-description__item">
                Since 2021, I have started my journey with Frontend and so far,
                I have been creating projects on a <strong>freelance</strong>{" "}
                basis using freelance services.
              </li>
              <li className="content-description__item">
                One of them was a business card for a video studio, which was
                created using{" "}
                <strong>
                  React, SCSS, Styled Components, EmailJS, SwiperJS and React
                  Icons
                </strong>
              </li>
              <li className="content-description__item">
                The latest was a landing page for a beauty studio which was
                created using{" "}
                <strong>HTML/SCSS, Vanilla JS, OOP, Gsap and Webpack 5</strong>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </section>
  );
}
