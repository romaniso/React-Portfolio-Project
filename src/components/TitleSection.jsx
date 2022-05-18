import React from "react";
import "../styles/TitleSection.css";

export default function TitleSection({
  subheading = "This is a subheading",
  heading = "This is a heading",
}) {
  return (
    <div className="title-section">
      <p className="title-section__subtitle">{subheading}</p>
      <h2 className="title-section__title">{heading}</h2>
    </div>
  );
}
