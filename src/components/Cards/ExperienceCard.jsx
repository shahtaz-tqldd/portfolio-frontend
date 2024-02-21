import React from "react";
import Lordicon from "../../utiles/Lordicon";

const ExperienceCard = ({ data }) => {
  const {
    _id,
    company,
    description,
    designation,
    timeline,
    isWorking,
    projects,
    website,
    techs,
  } = data;
  return (
    <div className="flex md:flex-row flex-col gap-6">
      <div className="md:w-[30%] w-full h-fit">
        <h2 className="text-xl mb-1">{designation}</h2>
        <a href={website} target="_blank">
          <h2 className="text-primary font-bold fl gap-2 w-fit">
            {company}
            <Lordicon link={"cpzdadwu"} size={16} colorClass={"primary-color"} />
          </h2>
        </a>

        <p className="font-medium opacity-50 mt-4">{timeline}</p>
      </div>

      <div className="md:w-[70%] w-full">
        <h2 className="opacity-80">{description}</h2>
        <h2 className="mt-8 mb-3 opacity-50">Technology Used</h2>
        <div className="flex flex-wrap gap-2">
          {techs?.map((tech, i) => (
            <span
              key={i}
              className="py-1 px-3 rounded-full text-xs bg-slate-800 group-hover:bg-slate-700 text-primary tr"
            >
              {tech}
            </span>
          ))}
        </div>
        <h2 className="mt-8 mb-3 opacity-50">Projects</h2>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
          {projects?.map((project, i) => (
            <a key={i} className="tr">
              {project.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
