import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="mt-20 md:mb-10 mb-20 opacity-60">
      {/* <hr /> */}
      <div className="flex justify-start items-start mt-5 text-sm">
        <div className="">
          <p>Envisioned, Designed and Developed by myself.</p>
          <p>Built with React, Tailwind, Node Js and Material UI</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
