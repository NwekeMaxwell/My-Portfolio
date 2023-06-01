import React from "react";
import "./Projects.css";
import lendsqr from "../../img/lendsqr.png";
import Bankist from "../../img/bankist.png";
import Forkify from "../../img/forkify.png";
import Mapty from "../../img/mapty.png";
import Dashboard from "../../img/React Dashboard.png";
import MiniBankist from "../../img/miniBankist.png";
import PigGame from "../../img/pigGame.png";
import Devxp from "../../img/devxp2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="projects" id="Projects">
      {/* heading */}
      <span style={{ color: darkMode ? "var(--tertiary-light)" : "" }}>
        My Outstanding
      </span>
      <span>Projects</span>
      {/* slider */}
      <Swiper
        modules={[Navigation, Scrollbar]}
        scrollbar={{ draggable: "true" }}
        pagination={{ clickable: "true" }}
        navigation
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={"true"}
        // loop={"false"}
        className="projects-slider"
      >
        <SwiperSlide>
          <a href="https://nweke-maxwell-lendsqr-fe-test.netlify.app">
            <img src={lendsqr} alt="lendsqr" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://forkify2023.netlify.app">
            <img src={Forkify} alt="forkify" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://devxp-react-projects.vercel.app/">
            <img src={Devxp} alt="Devxp" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://piggame100.netlify.app">
            <img src={PigGame} alt="pigGame" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://bankist2022.netlify.app">
            <img src={Bankist} alt="bankist" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://adminpanel-max.netlify.app/">
            <img src={Dashboard} alt="Dashboard" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/NwekeMaxwell/mini-bankist">
            <img src={MiniBankist} alt="miniBankist" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://mapty2022.netlify.app">
            <img src={Mapty} alt="mapty" />
          </a>
        </SwiperSlide>
      </Swiper>
      <div className="viewAllBtn">
        <Link to="/projects">View All Projects + Description &rarr;</Link>
      </div>
    </div>
  );
};

export default Projects;
