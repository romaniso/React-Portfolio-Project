import React from "react";
import { Typewriter } from "react-simple-typewriter";
import ContactInfoItem from "./ContactInfoItem";
import TitleSection from "./TitleSection";
import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <div className="container">
      <TitleSection
        heading="Contact"
        subheading={
          <Typewriter
            words={["Get in touch with me!", "Don't hesitate to ask me!"]}
            loop={5}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={30}
            delaySpeed={1000}
          />
        }
      />
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
