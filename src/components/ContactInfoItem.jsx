import React from "react";
import { MdPlace } from "react-icons/md";
import PText from "../components/PText";

export default function ContactInfoItem({
  icon = <MdPlace></MdPlace>,
  text = "this is an info",
}) {
  return (
    <div className="contactInfoItem__wrapper">
      <div className="icon">{icon}</div>
      <div className="info">
        <PText>{text}</PText>
      </div>
    </div>
  );
}
