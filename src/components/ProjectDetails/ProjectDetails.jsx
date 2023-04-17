import React from "react";
import "./ProjectDetails.css";

import MyProjectsData from "../MyProjectsData";

const ProjectDetails = () => {
  const project = MyProjectsData;
  return (
    <div className="container">
      {project.map(
        ({
          id,
          title,
          image,
          description,
          github,
          stack,
          projectFocus,
          link,
        }) => (
          <div key={id} className="projectDetails">
            <div className="imgContainer">
              <img src={image} alt="project image" />
            </div>
            <div className="descriptionContainer">
              <h2> {title} </h2>
              <div> {description} </div>
              <span>Stack: {stack.toString()} </span>
              <div>Focus: {projectFocus.toString()} </div>
              <div>
                <a href={github} className="p-button">
                  view Code
                </a>
                <a href={link} className="p-button">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ProjectDetails;
