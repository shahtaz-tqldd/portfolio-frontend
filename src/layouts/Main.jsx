import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import MobileNav from "../components/Navbar/MobileNav";
import Footer from "../components/Footer/Footer";
import Loader from "../ui/Loader/Loader";
import Profile from "../components/Profile/Profile";
import BackGroundLight from "../ui/Effect/BackGroundLight";

const Main = () => {
  return (
    <div>
      <BackGroundLight className={`-top-40 -right-48`} />
      <div className="container flex gap-10 lg:px-4 md:px-8 px-4 relative z-100">
        <Suspense fallback={<Loader />}>
          <div className="lg:block hidden fixed top-1/2 -translate-y-1/2">
            <Profile />
          </div>
          <div className="lg:ml-[440px]">
            <Outlet />
            <Footer />
          </div>
          <div className="lg:hidden md:hidden block fixed bottom-3 left-7 right-7">
            <MobileNav />
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default Main;
