import React from "react";
import { useGetMyProjectsQuery } from "../../../feature/projects/projectApiSlice";
import Lordicon from "../../../utiles/Lordicon";
import moment from "moment";
import { GrGithub } from "react-icons/gr";

const ProjectTable = () => {
  const {
    data: projects,
    isLoading: projectLoading,
    isSuccess: successLoading,
  } = useGetMyProjectsQuery({}, { refetchOnReconnect: true });
  return (
    <div>
      <div className="grid grid-cols-6 gap-5 font-semibold opacity-80 border-b border-slate-600 pb-3 mr-3">
        <h2 className="col-span-3">Project</h2>
        <h2 className="col-span-1 text-start">Last Update</h2>
        <h2 className="col-span-2 text-end">Github Repository</h2>
      </div>
      <div
        className="h-[400px] overflow-auto 
           scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent"
      >
        {projects?.map(
          ({ name, description, img, server, client, liveLink, _id }) => (
            <div
              key={_id}
              className="grid grid-cols-6 items-center gap-4 border-t border-b border-slate-700 py-3 pr-3"
            >
              <div className="col-span-3 fl gap-5">
                <img
                  src={img}
                  alt=""
                  className="h-16 w-24 object-cover rounded-md"
                />
                <div>
                  <p className="text-lg font-medium text-white fl gap-4">
                    {name}
                    <a
                      href={liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="fl gap-2"
                    >
                      <Lordicon link={"cpzdadwu"} size={18} />
                    </a>
                  </p>
                  <p className="text-sm opacity-70 mt-1">
                    {description.slice(0, 30) + "..."}
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <p className="text-sm opacity-70">
                  {moment("22-Nov-2023").format("DD MMM YYYY")}
                </p>
                <p className="text-xs opacity-50">2 years ago</p>
              </div>
              <div className="col-span-2 flex justify-end">
                <div className="fl gap-6 text-sm">
                  <a
                    href={client}
                    target="_blank"
                    rel="noreferrer"
                    className="fl gap-2 hover:text-blue-500 tr"
                  >
                    <GrGithub /> Frontend
                  </a>
                  <a
                    href={server}
                    target="_blank"
                    rel="noreferrer"
                    className="fl gap-2 hover:text-blue-500 tr"
                  >
                    <GrGithub /> Backend
                  </a>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ProjectTable;
