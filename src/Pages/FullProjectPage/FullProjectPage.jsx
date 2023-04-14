import React from "react";
import ProjectDetails from "../../components/ProjectDetails/ProjectDetails";
import "./FullProjectPage.css";
import MyProjectsData from "../../components/MyProjectsData";
import { Link } from "react-router-dom";
import iArrowBack from "../../img/arrowback.svg";

const FullProjectPage = () => {
  return (
    <div className="fullProjectPage">
      <Link to="/" className="button prevBtn">
        <img src={iArrowBack} alt="" />
        <span>Back to Home</span>
      </Link>
      <h1 className="heading">MY PROJECTS</h1>
      <div className="projBtns">
        {/* <button>All</button> */}
        <button>React</button>
        <button>TypeScript</button>
        <button>JavaScript</button>
        <button>SCSS</button>
        <button>HTML/CSS</button>
      </div>
      <p>
        Showing {MyProjectsData.length} / {MyProjectsData.length} Projects{" "}
      </p>
      <div>
        <ProjectDetails />
      </div>
    </div>
  );
};

export default FullProjectPage;
