import React from "react";
import { Link } from "react-router-dom";
import "../styles/Button.css";

export default function Button({
  btnLink = "test",
  btnText = "Test",
  outline = false,
  download = null,
}) {
  return (
    <div className="btn-div">
      {download ? (
        <a
          href={download}
          download={download}
          className={
            outline ? "button button--outline button--sm" : "button button--sm"
          }
        >
          {" "}
          {btnText}
        </a>
      ) : (
        <Link
          className={outline ? "button button--outline" : "button"}
          to={btnLink}
        >
          {btnText}
        </Link>
      )}
    </div>
  );
}
