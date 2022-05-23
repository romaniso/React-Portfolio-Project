import React from "react";
import TitleSection from "../components/TitleSection";
import { BiError } from "react-icons/bi";
import "../styles/NotFound.css";

export default function NotFound() {
  return (
    <div className="container not-found__container">
      <TitleSection
        heading="Not Found | 404"
        subheading="Ooops, it seems that there is no such a page that you are looking for"
      />

      <BiError />
    </div>
  );
}
