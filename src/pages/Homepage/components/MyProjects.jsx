import React from "react";
import SectionHead from "../../../ui/Heading/SectionHead";
import { useGetMyProjectsQuery } from "../../../feature/projects/projectApiSlice";
import ProjectCard from "../../../components/Cards/ProjectCard";

const MyProjects = () => {
  const { data, isLoading, isSuccess } = useGetMyProjectsQuery(
    {},
    { refetchOnReconnect: true }
  );
  return (
    <div id="projects" className="pt-12 md:mt-20 mt-10">
      <SectionHead
        title={"Projects and Works"}
        text={"My Projects"}
        icon={"jkzgajyr"}
      />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        {
            data?.map((project, index)=><ProjectCard key={index} data={project} />)
        }

      </div>
    </div>
  );
};

export default MyProjects;
