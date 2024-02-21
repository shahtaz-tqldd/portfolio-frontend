import React from "react";

const Greetings = ({ page, text }) => {
  return (
    <div className="mt-4 mb-16">
      <h2 className="text-3xl font-bold ml-2 text-blue-400 font-ubuntu">{page}</h2>
      <p className="opacity-70 mt-1 ml-2">{text}</p>
    </div>
  );
};

export default Greetings;
