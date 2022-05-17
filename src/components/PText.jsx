import React from "react";
import "../styles/PText.css";

export default function PText({ children: text }) {
  return (
    <div className="des__container">
      <p>{text}</p>
    </div>
  );
}
