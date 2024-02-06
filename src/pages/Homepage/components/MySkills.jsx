
import React from "react";
import SectionTitle from "../../../ui/Heading/SectionTitle";
import SectionHead from "../../../ui/Heading/SectionHead";
import SkillCard from "../../../components/Cards/SkillCard";
import { useGetSkillsQuery } from "../../../feature/info/infoApiSlice";

const MySkills = () => {
  const {
    data,
    isLoading,
    isSuccess,
  } = useGetSkillsQuery({}, { refetchOnReconnect: true });
console.log(data)
  return (
    <section id="skills" className="mb-32">
      <SectionTitle icon={"svbmmyue"} text={"My Skills"} />
      <SectionHead>
        My <span className="text-primary">Advantages</span>
      </SectionHead>
      <div className="grid grid-cols-1 gap-20">
        {data?.map((sets, index) => (
          <SkillCard key={index} index={index} sets={sets} />
        ))}
      </div>
    </section>
  );
};

export default MySkills;
