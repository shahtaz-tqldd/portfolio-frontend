import React from "react";
import SectionTitle from "../../../ui/Heading/SectionTitle";
import TicTacToe from "../Games/TicTacToe/TicTacToe";
import Lordicon from "../../../utiles/Lordicon";

const TopBanner = () => {
  return (
    <section id="about" className="pt-12">
      <div className="flex justify-between lg:flex-row md:flex-row flex-col gap-20">
        <div className="max-w-[600px]">
          Back in 2020 when I was in the final year of my undergraduation, I was
          not sure if I am really going to pursue a career in Metallurgical
          Engineering. So I started to explore options and started working on
          websites.
          <br />
          <br />I started web programming out of self interest and found out I
          enjoy designing and developing web application. It gives me the
          enlightenment of creating something that I can own.
          <div className="flex lg:gap-28 md:gap-24 gap-20 md:mt-12 mt-10">
            <div>
              <span className="text-primary lg:text-[60px] md:text-[50px] text-[40px] leading-[90px] font-bold">
                02+
              </span>
              <p className="">Years of Experience</p>
            </div>
            <div>
              <span className="text-primary lg:text-[60px] md:text-[50px] text-[40px] leading-[90px] font-bold">
                30+
              </span>
              <p className="">Projects Completed</p>
            </div>
          </div>
        </div>

        <TicTacToe />
      </div>
    </section>
  );
};

export default TopBanner;
