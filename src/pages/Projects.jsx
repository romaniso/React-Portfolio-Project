import React, { useEffect, useState } from "react";
import TitleSection from "../components/TitleSection";
import { BiSearchAlt } from "react-icons/bi";
import ProjectItem from "../components/ProjectItem";
import ProjectInfo from "../assets/data/projects";
import "../styles/Projects.css";

export default function Projects() {
  // Search Button Solution with using match method and useEffect hook
  const [searchText, setSearchText] = useState("");
  const [projectData, setProjectData] = useState(ProjectInfo);

  useEffect(() => {
    if (searchText === "") return;
    setProjectData(() =>
      ProjectInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLocaleLowerCase())
      )
    );
  }, [searchText]);

  function handleChange(e) {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectData(ProjectInfo);
    }
  }

  return (
    <div className="projects__wrapper">
      <div className="container projects__container">
        <TitleSection
          heading="Projects"
          subheading=" Check out my recent works"
        />
        <div className="projects__searchBar">
          <form>
            <input
              className="card"
              type="text"
              value={searchText}
              onChange={handleChange}
              placeholder="Look for a specific project"
            />
            <BiSearchAlt className="searchIcon" />
          </form>
        </div>
        <div className="projects__allItems">
          {projectData.map((item) => (
            <ProjectItem
              key={item.id}
              img={item.img}
              title={item.name}
              des={item.des}
              item={item.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
