import React from "react";
import PText from "../components/PText";
import Button from "../components/Button";
import AboutImg from "../assets/images/about-2.jpg";
import "../styles/About.css";
import ContactBanner from "../components/ContactBanner";
import CV from "../assets/data/certificates/cv.pdf";

import Timeline from "../components/Timeline";

export default function About() {
  return (
    <div className="about__wrapper">
      <div className=" about container ">
        <div className="top-section">
          <div className="left">
            <img src={AboutImg} alt="me" />
          </div>
          <div className="right">
            <p className="about__subheading">
              What's up? I am{" "}
              <span className="subheading__span">&lt; Roman /&gt;</span>
            </p>
            <h2 className="about__heading">Frontend Developer</h2>
            <div className="about__info">
              <PText>
                My interest in web development started back in 2021 when I
                decided to create my own website. I am a passionate frontend
                developer who loves creating and learning. Web Dev is my hobby
                that allows me to use my creativity and imagination. Right now I
                have been having my first commercial job remotely for Warsaw
                company.
              </PText>
            </div>
            <div className="about__action">
              <Button
                btnText="See Resume"
                download={CV}
                className="button"
                active={true}
              />
            </div>
          </div>
        </div>
        <Timeline />
      </div>
      <ContactBanner />
    </div>
  );
}
