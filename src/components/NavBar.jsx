import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgMenuMotion, CgClose } from "react-icons/cg";

import "../styles/NavBar.css";

const NavBar = () => {
  const [showNavBar, SetShowNavBar] = useState(false);
  const navLinks = [
    { title: "Home", to: "/" },
    { title: "About", to: "/about" },
    { title: "Projects", to: "/projects" },
    // { title: "Blog", to: "/blog" },
    { title: "Contact", to: "/contact" },
  ];

  document.addEventListener("scroll", () => {
    const navBar = document.querySelector(".navBar");
    navBar.classList.toggle("scrolled", window.scrollY > 0);
  });

  return (
    <nav className="navBar">
      <div
        className="navBar__menu"
        onClick={() => SetShowNavBar(!showNavBar)}
        role="button"
        onKeyDown={() => SetShowNavBar(!showNavBar)}
        tabIndex={0}
      >
        <CgMenuMotion />
      </div>
      <ul className={!showNavBar ? "navBar__list hidden" : "navBar__list"}>
        <div
          className="navBar__close"
          onClick={() => SetShowNavBar(!showNavBar)}
          role="button"
          onKeyDown={() => SetShowNavBar(!showNavBar)}
          tabIndex={0}
        >
          <CgClose />
        </div>
        {navLinks.map((navLink) => (
          <li key={navLink.title} className="navBar__item">
            <NavLink
              className="navBar__link"
              to={navLink.to}
              onClick={() => SetShowNavBar(!showNavBar)}
              role="button"
              onKeyDown={() => SetShowNavBar(!showNavBar)}
              tabIndex={0}
            >
              {navLink.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
