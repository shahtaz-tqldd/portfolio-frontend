import React from "react";
import Greetings from "../../../utiles/Greetings";
import AddButton from "../../../ui/Buttons/AddButton";
import { Link } from "react-router-dom";
import ProjectTable from "../Dashboard/ProjectTable";
// import ProjectListTable from "./ProjectListTable";

const ProjectDashboard = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <Greetings
          page={"Projects"}
          text={"Featured projects and tasks details"}
        />
        <Link to={"/dashboard/projects/new-project"}>
          <AddButton name={"Add Project"} />
        </Link>
      </div>
      <ProjectTable />
    </div>
  );
};

export default ProjectDashboard;
