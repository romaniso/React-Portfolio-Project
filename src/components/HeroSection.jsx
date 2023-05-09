import React, { useState, useEffect } from "react";
import HeroImg from "../assets/images/hero-black-white-img.svg";
import Button from "./Button";
import PText from "./PText";
import { IoIosArrowDown } from "react-icons/io";
import "../styles/HeroSection.css";
import FixedSocials from "./FixedSocials";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <div className="hero">
      <div
        className={
          loaded
            ? "container hero__container"
            : "container hero__container--unloaded"
        }
      >
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
        <div className="hero__scrollDown">
          <p>Scroll</p>
          <IoIosArrowDown />
        </div>
      </div>
      <FixedSocials />
    </div>
  );
}
