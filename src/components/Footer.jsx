import React from "react";
import logo from "../assets/images/logo-dark.png";
import FooterCol from "./FooterCol";
import PText from "./PText";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="footer__wrapper">
      <div className="footer__container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">
            <span className="footer__col1__logo">
              <img src={logo} alt="logo" />
            </span>
            Roman's Code{" "}
          </h1>
          <PText>
            A passionate beginner front end developer from Lublin, Poland. Web
            Dev is my hobby that allows me to use my creativity and imagination.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Main Links"
            links={[
              { title: "Home", path: "/", type: "link" },
              { title: "About", path: "/about", type: "link" },
              { title: "Projects", path: "/projects", type: "link" },
              { title: "Blog", path: "/blog", type: "link" },
              { title: "Contact", path: "/contact", type: "link" },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              { title: "+48 537 128 290", path: "tel:+48537128290" },
              {
                title: "isopenkoroman@gmail.com",
                path: "mailto:isopenkoroman@gmail.com",
              },
              {
                title: "Roman's Code, Lublin, Poland",
                path: "/",
                type: "link",
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Media"
            links={[
              {
                title: "Facebook",
                path: "https://www.facebook.com/roman.isopenko",
              },
              {
                title: "GitHub",
                path: "https://github.com/romaniso",
              },
              {
                title: "LinkedIn",
                path: "https://www.linkedin.com/in/roman-isopenko-b481b11ba/",
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container copyright__container">
          <PText>&copy; 2022 - Roman's Code</PText>
        </div>
      </div>
    </div>
  );
}
