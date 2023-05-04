import { useRef, useEffect } from "react";
import TitleSection from "./TitleSection";
import "../styles/Technologies.css";
import technologies from "../assets/data/about";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Technologies() {
  const { stack } = technologies;
  console.log(stack);
  const scrollTrigerredSectionRef = useRef(null);
  useEffect(() => {
    const section = scrollTrigerredSectionRef.current;
    gsap.fromTo(
      section,
      { opacity: 0, x: "-=100" },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "easeInOut",
        scrollTrigger: {
          trigger: section,
          start: "top 50%",
          end: "bottom 30%",
          toggleActions: "restart reverse play reverse",
          toggleClass: "scrolled",
        },
      }
    );
  }, []);

  return (
    <section className="technologies container" ref={scrollTrigerredSectionRef}>
      <TitleSection heading="My stack " subheading="What I have used" />
      <div className="technologies__wrapper">
        {stack.map((item, index) => {
          return (
            <div className="technologies__item item-technology">
              <article className="item-technology__content">
                <div className="item-technology__heading">{item.title}</div>
                <img
                  src={item.img}
                  alt="logo of a software technology"
                  className="item-technology__image"
                />
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}
