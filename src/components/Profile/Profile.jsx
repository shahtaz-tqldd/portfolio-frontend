import React from "react";
import profile from "../../assets/images/shahtaz.jpg";
import SocialLinks from "./SocialLink";
import { homenavitems } from "../../assets/data/navdata";
import Lordicon from "../../utiles/Lordicon";

const Profile = () => {
  return (
    <div className="lg:w-[380px]">
      <div className="h-48 w-48 relative">
        <img
          src={profile}
          alt=""
          className="h-full w-full object-cover rounded-2xl relative z-10"
        />
        <div className="bg-primary h-48 w-48 absolute top-1 left-1 rounded-2xl"></div>
      </div>
      <div className="mt-8">
        <h2 className="text-4xl font-semibold font-ubuntu">Shahtaz Rahman</h2>
        <h2 className="text-xl mt-1.5 opacity-80">Full-Stack Web Developer</h2>
        <p className="text-start mt-5 opacity-80">
          I am a MERN Stack developer who loves to create dynamic and responsive
          web applications.
        </p>
      </div>
      <div className="group cursor-pointer mt-6 w-fit">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/1lV9dIwZU1Ede97Fao-GY1s3EjLPyjvO-/view?usp=share_link"
          className="font-bold text-primary group-hover:text-white fl gap-2 tr"
        >
          Get my resume
        </a>
        <div className="border-b-2 border-gray-200 w-10 group-hover:w-20 tr mt-1.5 group-hover:border-primary"></div>
      </div>

      <div className="fl gap-5 mt-10 mb-16 md:flex hidden">
        {homenavitems?.map(({ icon, link }, index) => (
          <a key={index} href={link} className="fl gap-2 group">
            {/* <Lordicon link={icon} /> */}
            <span className="group-hover:text-primary tr">
              {link?.charAt(1).toUpperCase() + link.slice(2)}
            </span>
          </a>
        ))}
      </div>
      <div className="md:mt-0 mt-12">
        <SocialLinks />
      </div>
    </div>
  );
};

export default Profile;
