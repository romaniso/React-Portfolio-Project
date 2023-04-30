import "../styles/Timeline.css";
import Decor from "../assets/images/timeline-decor.png";

export default function Timeline() {
  return (
    <section className="timeline">
      <article className="timeline-item item-timeline">
        <div className="item-timeline__date date">
          <img className="date__decor" src={Decor} alt="Decor" />
          <div className="date__badge">07.2022 – until now</div>
        </div>
        <div className="item-timeline__content content">
          <h3 className="content__job">Junior Front End Developer</h3>
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
                and <strong>e-detailing presentations</strong> using the
                aforementioned tools.
              </li>
              <li className="content-description__item">
                Building an e-detailing presentation generator using
                <strong> Typescript, webpack, scss</strong>. Creating reusable
                frontend components based on <strong>OOP</strong>
              </li>
              <li className="content-description__item">
                Coding materials for the <strong>Veeva</strong> platform.
              </li>
              <li className="content-description__item">
                Managing the Sanofi website using the
                <strong> Sanofi Magnolia CMS</strong>.
              </li>
            </ul>
          </section>
        </div>
      </article>
      <article className="timeline-item item-timeline">
        <div className="item-timeline__date date">
          <img className="date__decor" src={Decor} alt="Decor" />
          <div className="date__badge">01.2021 – until now</div>
        </div>
        <div className="item-timeline__content content">
          <h3 className="content__job">Freelance Front End Developer</h3>
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
