import React from "react";
import SectionHead from "../../../ui/Heading/SectionHead";
import SkillCard from "../../../components/Cards/SkillCard";
import { useGetSkillsQuery } from "../../../feature/info/infoApiSlice";

const MySkills = () => {
  const { data, isLoading, isSuccess } = useGetSkillsQuery(
    {},
    { refetchOnReconnect: true }
  );
  return (
    <section id="skills" className="pt-12 md:mt-20 mt-10">
      <SectionHead
        title={"Skills and Expertise"}
        text={"My Specialization"}
        icon={"svbmmyue"}
      />
      <div className="grid grid-cols-1 gap-20">
        {data?.map((sets, index) => (
          <SkillCard key={index} index={index} sets={sets} />
        ))}
      </div>
    </section>
  );
};

export default MySkills;
