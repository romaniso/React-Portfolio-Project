import React from "react";
import { AiOutlineDesktop } from "react-icons/ai";
import PText from "./PText";

export default function ServicesSectionItem({
  icon = <AiOutlineDesktop />,
  title = "web design",
  des = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate unde, architecto laboriosam, ipsa qui iste dolore incidunt molestias maxime molestiae maiores aspernatur labore quia ratione dolor officia ut iure ex.",
}) {
  return (
    <div className="servicesItem">
      <div className="servicesItem__icon">{icon}</div>
      <div className="servicesItem__title">{title}</div>
      <PText>{des}</PText>
    </div>
  );
}
