import React from "react";
import { Link } from "react-router-dom";
import "../styles/Button.css";

export default function Button({
  btnLink = "test",
  btnText = "Test",
  outline = false,
}) {
  return (
    <div className="btn-div">
      <Link
        className={outline ? "button button--outline" : "button"}
        to={btnLink}
      >
        {btnText}
      </Link>
    </div>
  );
}
