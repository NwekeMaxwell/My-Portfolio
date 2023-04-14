import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Intro from "../components//Intro/Intro";
import Contacts from "../components/Contacts/Contacts";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Testimonials from "../components/Testimonials/Testimonials";
import Works from "../components/Works/Works";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Experience />
      <Projects />
      <Testimonials />
      <Contacts />
    </div>
  );
};

export default HomePage;
