import React from "react";
import ContactInfoItem from "./ContactInfoItem";
import TitleSection from "./TitleSection";
import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <div className="container">
      <TitleSection heading="Contact" subheading="Get in touch with me" />
      <div className="contactSection__wrapper">
        <div className="left">
          <ContactInfoItem icon={<AiFillPhone />} text="+48 537 128 290" />
          <ContactInfoItem
            icon={<AiTwotoneMail />}
            text="isopenkoroman@gmail.com"
          />
          <ContactInfoItem text="Lublin, Poland" />
        </div>
        <div className="right">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
