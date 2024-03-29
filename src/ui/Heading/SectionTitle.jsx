import React from "react";

const SectionTitle = ({ icon, text }) => {
  return (
    <div className="flex mb-16">
      <div className="md:text-md text-sm flex items-center gap-2 rounded-full">
        <lord-icon
          target="div"
          src={`https://cdn.lordicon.com/${icon}.json`}
          trigger="hover"
          colors="primary:#fff"
          style={{ width: "18px", height: "18px" }}
        ></lord-icon>
        {text}
      </div>
    </div>
  );
};

export default SectionTitle;
