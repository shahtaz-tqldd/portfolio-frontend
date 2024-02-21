import React from "react";
import { GrFacebookOption, GrGithub, GrLinkedinOption } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import Lordicon from "../../utiles/Lordicon";
const SocialLinks = () => {
  return (
    <div className=" fleb">
      <div className="flex gap-8 text-xl">
        {[
          {
            link: "https://github.com/shahtaz-tqldd/",
            icon: GrGithub,
          },
          {
            link: "https://www.linkedin.com/in/shahtazrahman/",
            icon: GrLinkedinOption,
          },
          {
            link: "https://www.facebook.com/shahtaz.rahman.3/",
            icon: GrFacebookOption,
          },
          {
            link: "https://wa.me/8801521305382/",
            icon: FaWhatsapp,
          },
        ].map((social, index) => (
          <a
            key={index}
            target="_blank"
            rel="noreferrer"
            href={social.link}
            className="hover:text-primary tr"
          >
            <social.icon />
          </a>
        ))}
      </div>
      <button className="text-sm fl gap-2 font-bold text-primary hover:text-white tr">
        <Lordicon link={"bkjyrmiv"} target={"button"} />
        Get in touch
      </button>
    </div>
  );
};

export default SocialLinks;
