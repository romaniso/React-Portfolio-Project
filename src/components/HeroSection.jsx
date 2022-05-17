import React from "react";
import HeroImg from "../assets/images/hero-black-white-img.svg";
import Button from "./Button";
import PText from "./PText";

export default function HeroSection() {
  return (
    <div className="container">
      <h1 className="hero__heading">
        <span>Hello There!</span>
        <span>I'm Roman</span>
      </h1>
      <div className="hero__img">
        <img src={HeroImg} alt="" />
      </div>
      <div className="hero__info">
        <PText>
          I am a beginner front end developer who loves to create and learn.
          Stick around here and I'll show you what I can.
        </PText>
        <Button btnLink="/projects" btnText="Check out my works" />
      </div>
    </div>
  );
}
