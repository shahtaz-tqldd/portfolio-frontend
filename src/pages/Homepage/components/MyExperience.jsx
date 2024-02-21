import React from "react";
import SectionHead from "../../../ui/Heading/SectionHead";
import ExperienceCard from "../../../components/Cards/ExperienceCard";

const MyExperience = () => {
  const data = [
    {
      _id: 1,
      company: "Ishqool",
      website:"https://www.ishqool.com/",
      description:
        "Ishqool is a ed tech startup of bangladesh. I joined as an IT manager to lead projects and manage a team of 4 developers. I also work on hand code there.",
      designation: "IT Manager",
      timeline: "April, 2023 - November, 2023",
      isWorking: false,
      projects: [
        { name: "IqSonet", link: "www.iqsonet.com" },
        { name: "iqbarter", link: "www.iqbarter.com" },
      ],
      techs: [
        "React JS",
        "Redux",
        "Redux toolkit",
        "tailwind css",
        "Socket.io",
        "Node js",
        "MongoDB",
        "postgreSQL",
      ],
    },
    {
      _id: 2,
      company: "AyyKori Digital Ltd.",
      website:"https://www.ayykori.net/",
      description:
        "Ayykori is a affliate and cashback site of bangladesh. I started my Internship as a MERN Stack developer and then became a Junior MERN Stack developer. I had collaborated with 5 developers in ayykori and worked on 6 projects.",
      designation: "MERN Stack Developer",
      timeline: "July, 2023 - December, 2023",
      isWorking: false,
      projects: [
        { name: "HRM Dashboard", link: null },
        { name: "Restaurant Management Dashboard", link: null },
        { name: "Ayykori Dashboard", link: null },
        { name: "Ayykori Career", link: null },
        { name: "Ayykori Blogs", link: null },
      ],
      techs: [
        "React JS",
        "Next JS",
        "Redux",
        "Redux toolkit",
        "tailwind css",
        "Material UI",
        "Node js",
        "MongoDB",
        "Google API",
      ],
    },
  ];
  return (
    <div id="experience" className="pt-12 md:mt-20 mt-10">
      <SectionHead
        title={"Career"}
        text={"My Work Experience"}
        icon={"kthelypq"}
      />
      <div className="grid grid-cols-1 gap-12">
        {data?.map((exp, index) => (
          <ExperienceCard key={index} data={exp} />
        ))}
      </div>
    </div>
  );
};

export default MyExperience;
