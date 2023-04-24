import React from "react";
import Button from "./Button";
import PText from "./PText";
import TitleSection from "./TitleSection";
import "../styles/AboutSection.css";
import AboutImg from "../assets/images/transparentMe.png";

export default function AboutSection() {
  return (
    <div>
      <div className="container">
        <div className="aboutSection__container">
          <div className="aboutSection__left">
            <TitleSection
              className="title"
              subheading="Let's get to know"
              heading="About me"
            />
            <PText>
              I am a frontend developer who loves creating and learning. Stick
              around here and I'll show you what&nbsp;I&nbsp;can.
            </PText>
            <div className="aboutSection__buttons">
              <Button btnLink="/projects" btnText="Works" />
              <Button btnLink="/about" btnText="Read More" outline={true} />
            </div>
          </div>
          <div className="aboutSection__right">
            <img className="aboutSection__img" src={AboutImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
