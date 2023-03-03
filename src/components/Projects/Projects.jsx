import React from "react";
import "./Projects.css";
import Portfolio from "../../img/portfolio.png";
import Bankist from "../../img/bankist.png";
import ChefMax from "../../img/chefMax.png";
import Church from "../../img/church.png";
import Forkify from "../../img/forkify.png";
import Mapty from "../../img/mapty.png";
import MaxArt from "../../img/MaxArt.png";
import MiniBankist from "../../img/miniBankist.png";
import PigGame from "../../img/pigGame.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { themeContext } from "../../Context";
import { useContext } from "react";

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
        loop={"true"}
        className="projects-slider"
      >
        <SwiperSlide>
          <a href="#">
            <img src={Portfolio} alt="portfolio" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://forkify2023.netlify.app">
            <img src={Forkify} alt="forkify" />
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
          <a href="https://github.com/NwekeMaxwell/mini-bankist">
            <img src={MiniBankist} alt="miniBankist" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://mapty2022.netlify.app">
            <img src={Mapty} alt="mapty" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://maxart.netlify.app">
            <img src={MaxArt} alt="maxArt" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://chefmax.netlify.app">
            <img src={ChefMax} alt="chefmax" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://heavenschurch.netlify.app">
            <img src={Church} alt="church" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;
