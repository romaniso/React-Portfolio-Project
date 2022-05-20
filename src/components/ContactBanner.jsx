import React from "react";
import Button from "./Button";
import PText from "./PText";
import "../styles/ContactBanner.css";

export default function ContactBanner() {
  return (
    <div className="container contactBanner__container">
      <div className="contactBanner__wrapper card">
        <PText>Are you looking for a good website?</PText>
        <h3 className="contactBanner__heading">Let me know</h3>
        <Button btnText="Contact Me" btnLink="/contact" />
      </div>
    </div>
  );
}
