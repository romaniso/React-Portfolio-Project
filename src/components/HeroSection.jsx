import React from "react";
import HeroImg from "../assets/images/hero-black-white-img.svg";
import Button from "./Button";
import PText from "./PText";
import { IoIosArrowDown } from "react-icons/io";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "../styles/HeroSection.css";

export default function HeroSection() {
  return (
    <div className="hero">
      <div className="container hero__container">
        <h1 className="hero__heading">
          <span>Hello there!</span>
          <span className="hero__name">I'm Roman</span>
        </h1>
        <div className="hero__img">
          <img src={HeroImg} alt="" />
        </div>
        <div className="hero__info">
          <PText>
            I am a frontend developer who loves creating and learning. Stick
            around here and I'll show you what&nbsp;I&nbsp;can.
          </PText>
          <Button btnLink="/projects" btnText="Check out my works" />
        </div>
        <div className="hero__socials">
          <div className="hero__socials-indicator">
            <p>Follow</p>
            <IoIosArrowDown />
          </div>
          <div className="hero__socials-text">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/roman.isopenko"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/romaniso"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/roman-isopenko-b481b11ba/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hero__scrollDown">
          <p>Scroll</p>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
}
