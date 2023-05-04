import React from "react";
import { Link } from "react-router-dom";
import "../styles/Button.css";

export default function Button({
  btnLink = "test",
  btnText = "Test",
  outline = false,
  download = null,
  isInNavbar = false,
  active = false,
}) {
  return (
    <>
      {download ? (
        <a
          href={download}
          download={download}
          className={
            outline
              ? "button button--outline button--sm"
              : active
              ? "button button--active button--sm"
              : isInNavbar
              ? "button button--navbar"
              : "button button--sm"
          }
        >
          {" "}
          {btnText}
        </a>
      ) : (
        <Link
          className={
            outline
              ? "button button--outline"
              : active
              ? "button button--active"
              : "button"
          }
          to={btnLink}
        >
          {btnText}
        </Link>
      )}
    </>
  );
}
