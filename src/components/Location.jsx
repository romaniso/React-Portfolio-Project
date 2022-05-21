import React from "react";
import { GiPalm } from "react-icons/gi";
import PText from "./PText";
// import LocationImg from "../assets/images/location.png";

export default function Location() {
  return (
    <div className="map__wrapper">
      <div className="container map">
        <div className="map__card card">
          <h3 className="map__heading">
            I am here <GiPalm />
          </h3>
          <PText>Puławska 26, Lublin, Poland</PText>
          <a
            className="map__link"
            href="https://goo.gl/maps/YAMMAzQ7Vknx7dpW9"
            target="_blank"
            rel="noreferrer"
          >
            Find me in Google Map
          </a>
        </div>
      </div>
    </div>
  );
}
