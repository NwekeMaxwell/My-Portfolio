import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/scrollbar";
import ProfilePic1 from "../../img/profile1.jpg";
import ProfilePic2 from "../../img/profile2.jpg";
import ProfilePic3 from "../../img/profile3.jpg";
import ProfilePic4 from "../../img/profile4.jpg";

const Testimonials = () => {
  const clients = [
    {
      img: ProfilePic1,
      review:
        "I Love your efficiency. You helped push our organization to overwhelming Success  ~Ella",
    },
    {
      img: ProfilePic2,
      review:
        "You are really good at this!! Keep up the good work, I love your design  ~Lodamoz Consult",
    },
    {
      img: ProfilePic3,
      review:
        "Great team spirit Max!! We love having you around, you are a symbol of grit and success, call me for any assistance  ~Gold ",
    },
    {
      img: ProfilePic4,
      review:
        "Your codes are neat and easy to read, you are definitely headed for the big catch. Meet you at the top :)  ~Adonix",
    },
  ];
  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Employers & Clients always get</span>
        <span>Exceptional Work</span>
        <span>from me...</span>
        <div className="blur t-blur-1"></div>
        <div className="blur t-blur-2"></div>
      </div>
      {/* slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonials">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
