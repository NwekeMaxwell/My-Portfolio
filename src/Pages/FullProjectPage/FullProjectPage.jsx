import React from "react";
// import ProjectDetails from "../../components/ProjectDetails/ProjectDetails";
import "./FullProjectPage.css";
import MyProjectsData from "../../components/MyProjectsData";
import { Link, NavLink } from "react-router-dom";
import iArrowBack from "../../img/arrowback.svg";
import { useState } from "react";

const FullProjectPage = () => {
  const [data, setData] = useState(MyProjectsData);
  const filteredData = (cat) => {
    const result = MyProjectsData.filter((item) => item.stack.includes(cat));
    setData(result);
  };
  return (
    <div className="fullProjectPage">
      <Link to="/" className="button prevBtn">
        <img src={iArrowBack} alt="" />
        <span>Back to Home</span>
      </Link>
      <h1 className="heading">MY PROJECTS</h1>
      <div className="projBtns">
        {/* <button>All</button> */}
        <NavLink activeC>
          <button activeC onClick={() => setData(MyProjectsData)}>
            All
          </button>
        </NavLink>
        <button onClick={() => filteredData("React")}>React</button>
        <button onClick={() => filteredData("TypeScript")}>TypeScript</button>
        <button onClick={() => filteredData("JavaScript")}>JavaScript</button>
        <button onClick={() => filteredData("SCSS")}>SCSS</button>
        <button onClick={() => filteredData("HTML/CSS")}>HTML/CSS</button>
      </div>
      <p>
        Showing {data.length} / {data.length} Projects
      </p>
      <div className="container">
        {/* <ProjectDetails /> */}
        {data.map(
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
                    Github
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
    </div>
  );
};

export default FullProjectPage;
