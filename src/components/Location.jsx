import React from "react";
import { GiPalm } from "react-icons/gi";
import PText from "./PText";
// import LocationImg from "../assets/images/location.png";

export default function Location() {
  return (
    <div className="map__wrapper">
      <iframe
        title="My location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2497.0189921509373!2d22.52863424089851!3d51.25555967187476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472259dd62c640b5%3A0xc153e8119e0e825a!2sPu%C5%82awska%2026%2C%2020-400%20Lublin!5e0!3m2!1spl!2spl!4v1682618993342!5m2!1spl!2spl"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container map">
        <div className="map__card card">
          <h3 className="map__heading">
            I am here <GiPalm />
          </h3>
          <PText>Puławska 26, Lublin, Poland</PText>
          Find me in Google Map
        </div>
      </div>
    </div>
  );
}
