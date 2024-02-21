import React from "react";

const BackGroundLight = ({className}) => {
  return (
    <div className={`fixed rounded-full h-[800px] w-[800px] ${className ? className: "right-0 -top-40"} `}>
      <div className="h-[800px] w-[800px] bg-slate-900 bg-opacity-20 rounded-full absolute inset-0 backdrop-blur-2xl z-10"></div>
      <div className=" h-[400px] w-[400px] bg-[#04364A] bg-opacity-40 rounded-full absolute top-1/2 -translate-y-1/2 translate-x-1/2 right-1/2 z-0"></div>
    </div>
  );
};

export default BackGroundLight;
