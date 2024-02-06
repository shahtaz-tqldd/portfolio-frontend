import React from "react";
import useTitle from "../../hooks/useTitle";
import Hero from "./components/Hero";
import TopBanner from "./components/TopBanner";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import MySkills from "./components/MySkills";

const Homepage = () => {
  useTitle("Portfolio");
  return (
    <div>
      <Hero />
      <TopBanner />
      <AboutMe />
      <Services />
      <MySkills />
      {/* <TopBanner />
      <Projects />
      <ContactMe /> */}
    </div>
  );
};

export default Homepage;
