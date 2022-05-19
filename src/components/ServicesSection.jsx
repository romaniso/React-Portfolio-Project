import React from "react";
import ServicesSectionItem from "./ServicesSectionItem";
import { AiOutlineDesktop } from "react-icons/ai";
import { BiCodeCurly } from "react-icons/bi";
import { BsPhone } from "react-icons/bs";
import TitleSection from "./TitleSection";
import "../styles/ServicesSection.css";

export default function ServicesSection() {
  return (
    <div className="services__container container">
      <TitleSection heading="Services" subheading="What I offer" />

      <div className="services__items">
        <ServicesSectionItem
          icon={<AiOutlineDesktop />}
          title="Website Design"
          des="I can do some simple ui/ux for your webpage that will help you enhance your online services and attract your potential clients"
        />
        <ServicesSectionItem
          icon={<BiCodeCurly />}
          title="Web Dev"
          des="I can develop your future website from scratch. I will code your webpage using up-to-date web technologies ensuring that your project is a high performance website"
        />
        <ServicesSectionItem
          icon={<BsPhone />}
          title="Mobile App"
          des="I also develop mobile apps. If you are looking for a user-friendly eye-catching mobile as an effective tool for your services, you are in the right place!"
        />
      </div>
    </div>
  );
}
