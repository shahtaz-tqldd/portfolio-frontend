import React from "react";
import Lordicon from "../../utiles/Lordicon";

const SectionHead = ({ text, icon, title }) => {
  const [allButLast, lastWord] = text?.split(/\s(?=\S*$)/);
  return (
    <div>
      <div className="flex mb-4">
        <div className="flex items-center gap-2 rounded-full">
          <Lordicon link={icon} colorClass={"current-color"} size={20} />
          {title}
        </div>
      </div>
      <h2 className="lg:text-4xl md:text-4xl text-3xl mb-12">
        <span>{allButLast}</span>{" "}
        <span className="text-primary">{lastWord}</span>
      </h2>
    </div>
  );
};

export default SectionHead;
