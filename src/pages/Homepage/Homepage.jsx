import React from "react";
import useTitle from "../../hooks/useTitle";
import Hero from "./components/Hero";
import TopBanner from "./components/TopBanner";
import Services from "./components/Services";
import MySkills from "./components/MySkills";
import BoxGame from "./Games/BoxGame/BoxGame";
import MyProjects from "./components/MyProjects";
import MyBlogs from "./components/MyBlogs";
import MyExperience from "./components/MyExperience";
import ContactMe from "./components/ContactMe";

const Homepage = () => {
  useTitle("Shahtaz Rahman");
  return (
    <div>
      <Hero />
      <TopBanner />
      <Services />
      <MyExperience/>
      <MyProjects/>
      <MySkills />
      <BoxGame/>
      <MyBlogs/>
      <ContactMe />
    </div>
  );
};

export default Homepage;
