import React from "react";
import { FaServer } from "react-icons/fa";
import { HiOutlineCode } from "react-icons/hi";
import { BsServer } from "react-icons/bs";
import { MdSettingsSuggest } from "react-icons/md";

const SkillCard = ({ sets, index }) => {
  const { skillSet, setsName } = sets;
  return (
    <div>
      <h2 className="text-2xl mb-6 flex items-center gap-4">
        {index === 0 && <HiOutlineCode />}
        {index === 1 && <FaServer />}
        {index === 2 && <MdSettingsSuggest />}
        {setsName}
      </h2>
      <div className="flex flex-wrap gap-8">
        {skillSet?.map(({ icon, name }, index) => (
          <div
            key={index}
            className="fl flex-col group"
            data-aos="fade-up"
            data-aos-delay={`${(index % 6) * 100 + 100}`}
          >
            <img
              src={icon}
              alt="icon"
              className="h-[70px] w-[70px] bg-slate-800 p-4 rounded-lg object-contain group-hover:bg-slate-700 tr"
            />
            <h3 className="font-semibold mt-3 group-hover:text-primary tr">{name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
