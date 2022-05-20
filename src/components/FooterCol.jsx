import React from "react";
import { Link } from "react-router-dom";
import ProjectItem from "./ProjectItem";

export default function FooterCol({
  heading = "col heading",
  links = [
    { type: "link", title: "Home", path: "/home" },
    { type: "link", title: "About", path: "/about" },
  ],
}) {
  return (
    <div className="footer__col">
      <h1 className="col__heading">{heading}</h1>
      <ul className="col__list">
        {links.map((link, index) => (
          <li key={index} className="col__li">
            {link.type === "link" ? (
              <Link to={link.path}>{link.title}</Link>
            ) : (
              <a href={link.path} target="_blank" rel="noreferrer">
                {link.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Two types of links:
// 1) from react-router dom
// 2) traditional a
