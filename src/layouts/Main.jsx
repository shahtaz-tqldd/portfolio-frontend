import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import MobileNav from "../components/Navbar/MobileNav";
import Footer from "../components/Footer/Footer";
import Loader from "../ui/Loader/Loader";
import Profile from "../components/Profile/Profile";

const Main = () => {
  return (
    <div className="max-w-[1440px] mx-auto flex gap-10 lg:px-4 md:px-8 px-4">
      <Suspense fallback={<Loader />}>
        <div className="lg:block hidden fixed top-1/2 -translate-y-1/2">
          <Profile />
        </div>
        <div className="lg:ml-[440px]">
          <Outlet />
          <Footer />
        </div>
        <div className="max-w-[60px] lg:block md:block hidden">
          <Navbar />
        </div>
        <div className="lg:hidden md:hidden block fixed bottom-3 left-7 right-7">
          <MobileNav />
        </div>
      </Suspense>
    </div>
  );
};

export default Main;
