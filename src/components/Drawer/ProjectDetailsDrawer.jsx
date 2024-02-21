import { SwipeableDrawer } from "@mui/material";
import { BsDot } from "react-icons/bs";
import { GrGithub } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Lordicon from "../../utiles/Lordicon";

const ProjectDetailsDrawer = ({ state, setState, toggleDrawer, data }) => {
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
    features,
    img,
  } = data;
  const navigate = useNavigate();
  const handleNavigate = (link) => {
    navigate(link);
    setState({ right: false });
  };

  return (
    <div className="w-full absolute">
      <SwipeableDrawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        <div className="md:w-[65vw] w-[60vw] py-5 px-8 text-slate-200 bg-slate-800">
          <div className="fl gap-2">
            <h2 className="text-white">Web Development</h2>
            <div className="h-1 w-12 rounded-r-full bg-orange-600"></div>
          </div>
          <h2 className="text-6xl font-bold font-ubuntu mt-2">{name}</h2>
          <h2 className="mt-4 text-xl">{description}</h2>

          <div className="flex gap-4 mt-10">
            {images?.map((img) => (
              <img
                src={img}
                alt=""
                className="h-36 w-60 object-cover rounded-xl "
              />
            ))}
          </div>

          <h2 className="mt-10 mb-3 font-bold text-xl text-orange-500 font-ubuntu">
            Key Features
          </h2>
          <div className="flex flex-col -ml-3">
            {features?.map((f, i) => (
              <div key={i} className="fl gap-3">
                <BsDot className="text-4xl" />
                {f}
              </div>
            ))}
          </div>
          <h2 className="mt-10 mb-5 font-bold text-xl text-orange-500 font-ubuntu">
            Technologies
          </h2>
          <div className="flex flex-wrap gap-2">
            {technologies?.map((tech, i) => (
              <span key={i} className="py-1 px-3 rounded-full text-sm font-semibold bg-slate-700 group-hover:bg-slate-600 text-primary tr">
                {tech}
              </span>
            ))}
          </div>
          <h2 className="mt-20 mb-2 text-slate-400">GitHub Repository</h2>
          <div className="fl gap-10">
            <a
              href={client}
              target="_blank"
              rel="noreferrer"
              className="fl gap-2"
            >
              <GrGithub /> Frontend{" "}
              <Lordicon link={"cpzdadwu"} size={16} color={"#fff"} />
            </a>
            <a
              href={server}
              target="_blank"
              rel="noreferrer"
              className="fl gap-2"
            >
              <GrGithub /> Backend
              <Lordicon link={"cpzdadwu"} size={16} color={"#fff"} />
            </a>
          </div>
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default ProjectDetailsDrawer;
