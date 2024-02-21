import React from "react";
import profile from "../../../assets/images/shahtaz.jpg";
import Profile from "../../../components/Profile/Profile";

const HomeProfile = () => {
  return (
    <div className="w-full px-4 lg:hidden flex md:flex-row items-center flex-col py-6">
      <Profile />
    </div>
  );
};

export default HomeProfile;
