import { useSelector } from "react-redux";
import cube from "../../assets/images/cube.png";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import Lordicon from "../../utiles/Lordicon";
import { useGetSkillsQuery } from "../../feature/info/infoApiSlice";
import { useGetMyProjectsQuery } from "../../feature/projects/projectApiSlice";
import { GrGithub } from "react-icons/gr";
import ProjectTable from "./Dashboard/ProjectTable";

const Dashboard = () => {
  const { token } = useSelector((state) => state?.auth);
  const {
    data: skills,
    isLoading,
    isSuccess,
  } = useGetSkillsQuery({}, { refetchOnReconnect: true });
  const allSkiills = skills?.flatMap(({ skillSet }) => skillSet);

  const data = [
    {
      name: "Projects",
      number: 30,
      icon: "jkzgajyr",
    },
    {
      name: "Blogs and Articles",
      number: 22,
      icon: "lyrrgrsl",
    },
    {
      name: "Work Experiences",
      number: 2,
      icon: "ppyvfomi",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 p-10 rounded-2xl bg-accent bg-opacity-60 center">
          <div className="fl justify-around w-full">
            <div>
              <h3 className="text-xl opacity-60 mb-3">Welcome to your</h3>
              <h2 className="text-3xl font-ubuntu font-bold">
                Portfolio Dashboard
              </h2>
            </div>
            <div>
              <img
                src={cube}
                alt=""
                className="h-[200px] w-full object-contain"
              />
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-slate-700 rounded-xl bg-accent bg-opacity-60">
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DateCalendar defaultValue={moment()} />
          </LocalizationProvider>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-8">
        {data?.map((item, index) => (
          <div key={index} className="fl gap-6 p-8 rounded-xltr">
            <Lordicon
              link={item.icon}
              size={80}
              color={"#bbb"}
              target={"div"}
            />
            <div>
              <h1 className="text-4xl font-bold">
                {item.number > 9 ? item.number : "0" + item.number}
              </h1>
              <h2 className="mt-2 text-xl">{item.name}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-16 mt-16">
        <div className="col-span-2">
          <h2 className="text-2xl font-ubuntu text-primary font-bold mb-8">
            Projects
          </h2>
          <ProjectTable count={4} />
        </div>

        <div className="col-span-1">
          <h2 className="text-2xl font-ubuntu text-primary font-bold mb-8">
            Skill and Expertise
          </h2>
          <div className="fl justify-between font-semibold opacity-80 border-b border-slate-600 pb-3 mr-3">
            <h2>Technology</h2>
            <h2>Experience</h2>
          </div>
          <div
            className="h-[400px] overflow-auto 
           scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent"
          >
            {allSkiills?.map(({ name, icon }) => (
              <div className="fl justify-between border-t border-b border-slate-800 py-3 pr-3">
                <div className="fl gap-5">
                  <img src={icon} alt="" className="h-7 w-7 object-contain" />
                  <p>{name}</p>
                </div>
                <p className="text-sm opacity-50">2 years</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
