import React from "react";
import PText from "../components/PText";
import Button from "../components/Button";
import AboutImg from "../assets/images/about-2.jpg";
import "../styles/About.css";
import AboutInfoItem from "../components/AboutInfoItem";
import ContactBanner from "../components/ContactBanner";
import CV from "../assets/data/certificates/cv.pdf";

import items from "../assets/data/aboutMeinfo";

export default function About() {
  return (
    <div className="about__wrapper">
      <div className=" about container ">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              What's up? I am <span className="about__span">Roman</span>
            </p>
            <h2 className="about__heading">A Front End Developer</h2>
            <div className="about__info">
              <PText>
                I am a passionate frontend developer who loves creating and
                learning. I am located in Lublin, Poland but right now I have
                been having my first commercial job remotely for Warsaw company.
                Stick around here and I'll show you what I can do.
                <br />
                <br /> Web Dev is my hobby that allows me to use my creativity
                and imagination. I can do some simple ui/ux for your webpage
                that will help you enhance your online services and attract your
                potential clients. I can develop your future website from
                scratch. I will code your webpage using up-to-date web
                technologies ensuring that your project is a high performance
                website.
              </PText>
            </div>
            <div className="about__action">
              <Button
                btnText="Download my Resume"
                download={CV}
                className="button"
                aboutBtn={true}
              />
            </div>
          </div>
          <div className="right">
            <img src={AboutImg} alt="me" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading title-section__title">
              My Skills
            </h1>
            <AboutInfoItem title="Front End" items={items.frontEnd} />
            <AboutInfoItem title="UI/UX Design" items={items.uiUx} />
          </div>

          <div className="about__info__item">
            <h1 className="about__info__heading title-section__title">
              Education
            </h1>
            <AboutInfoItem
              title="Education Background"
              items={items.highSchool}
            />
            <AboutInfoItem
              title="Completed Online Courses"
              items={items.courses}
            />
          </div>

          <div className="about__info__item">
            <h1 className="about__info__heading title-section__title">
              Experience
            </h1>
            <AboutInfoItem title="2021 - now" items={items.experience} />
          </div>
        </div>
      </div>
      <ContactBanner />
    </div>
  );
}
