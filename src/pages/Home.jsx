import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <WorkExperience />
      <Education />
      <Contact />
    </>
  );
};

export default Home;
