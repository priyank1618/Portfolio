import React from "react";
import { ProjectList } from "../helpers/ProjectList";


import "../styles/Projects.css";
import ProjectItem from "../components/ProjectNavigator";

function Projects() {
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
          <ProjectItem id={idx} name={project.name} image={project.image}/>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;

