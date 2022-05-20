import React from "react";
import PText from "../components/PText";
import Button from "../components/Button";
import AboutImg from "../assets/images/about-2.jpg";
import "../styles/About.css";
import AboutInfoItem from "../components/AboutInfoItem";
import ContactBanner from "../components/ContactBanner";

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
                I am a beginner front end developer who loves creating and
                learning. Stick around here and I'll show you what I can. A
                passionate beginner front end developer from Lublin, Poland.
                <br />
                <br /> Web Dev is my hobby that allows me to use my creativity
                and imagination. I can do some simple ui/ux for your webpage
                that will help you enhance your online services and attract your
                potential clients. I can develop your future website from
                scratch. I will code your webpage using up-to-date web
                technologies ensuring that your project is a high performance
                website.
                <br />
                <br /> I also develop mobile apps. If you are looking for a
                user-friendly eye-catching mobile as an effective tool for your
                services, you are in the right place!
              </PText>
            </div>
            <Button btnText="Download my Resume" btnLink="#" />
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
            <AboutInfoItem
              title="Front End"
              items={[
                { title: "HTML", stars: 5 },
                { title: "CSS", stars: 5 },
                { title: "JavaScript", stars: 3 },
                { title: "React", stars: 2 },
                { title: "Git", stars: 2 },
                { title: "SASS", stars: 2 },
                { title: "Bootstrap", stars: 2 },
                { title: "Webpack", stars: 1 },
              ]}
            />
            <AboutInfoItem
              title="UI/UX Design"
              items={[
                { title: "Figma", stars: 2 },
                { title: "PhotoShop", stars: 2 },
              ]}
            />
          </div>

          <div className="about__info__item">
            <h1 className="about__info__heading title-section__title">
              Education
            </h1>
            <AboutInfoItem
              title="Education Background"
              items={[
                {
                  title:
                    "Maria Curie-Sklodowska University in Lublin, English Philology, BA",
                },
                {
                  title: "Catholic University in Lublin, English Philology, MA",
                },
              ]}
            />
            <AboutInfoItem
              title="Completed Online Courses"
              items={[
                {
                  title: "Code with Mosh - The Ultimate HTML5 & CSS Series",
                  file: "photo",
                },
                {
                  title: "Code with Mosh - The Ultimate HTML5 & CSS Series",
                  file: "photo",
                },
                {
                  title: "Code with Mosh - The Ultimate HTML5 & CSS Series",
                  file: "photo",
                },
                {
                  title: "Code with Mosh - The Ultimate HTML5 & CSS Series",
                  file: "photo",
                },
                {
                  title: "Code with Mosh - The Ultimate HTML5 & CSS Series",
                  file: "photo",
                },
                {
                  title: "Code with Mosh - The Ultimate HTML5 & CSS Series",
                  file: "photo",
                },
              ]}
            />
          </div>

          <div className="about__info__item">
            <h1 className="about__info__heading title-section__title">
              Experience
            </h1>
            <AboutInfoItem
              title="2021 - now"
              items={[
                {
                  title: "Freelance Front End Developer",
                },
              ]}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </div>
  );
}
