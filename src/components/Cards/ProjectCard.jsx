import React, { useState } from "react";
import Lordicon from "../../utiles/Lordicon";
import { GrGithub } from "react-icons/gr";
import ProjectDetailsDrawer from "../Drawer/ProjectDetailsDrawer";

const ProjectCard = ({ data }) => {
  const {
    _id,
    name,
    description,
    images,
    duration,
    technologies,
    client,
    server,
    liveLink,
    img,
  } = data;
  console.log(data);
  const [drawerState, setDrawerState] = useState({ left: false, right: false });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event?.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerState({ ...drawerState, [anchor]: open });
  };
  return (
    <div className="group relative bg-slate-800 hover:bg-slate-700 md:p-4 p-3 rounded-2xl tr">
      <div className="overflow-hidden lg:h-56 md:h-52 h-48 w-full rounded-xl">
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover group-hover:scale-105 tr"
        />
      </div>
      <div className="h-36 flex flex-col justify-between mt-5">
        <div>
          <h2 className="text-2xl font-semibold mb-2 fl gap-2">
            {name}
            <a
              className="cursor-pointer pt-1"
              href={liveLink}
              target="_blank"
              rel="noreferrer"
            >
              <Lordicon link={"cpzdadwu"} size={24} />
            </a>
          </h2>
          <h2 className="">{description}</h2>
        </div>
        <div className="flex justify-end">
          <div
            className="cursor-pointer"
            onClick={() => setDrawerState({ right: true })}
          >
            <button className="font-bold text-primary">See Project</button>
            <div className="border-b-2 border-gray-200 w-8 group-hover:w-16 tr mt-1.5 group-hover:border-primary"></div>
          </div>
        </div>
      </div>

      <ProjectDetailsDrawer
        state={drawerState}
        setState={setDrawerState}
        toggleDrawer={toggleDrawer}
        data={data}
      />
    </div>
  );
};

export default ProjectCard;
