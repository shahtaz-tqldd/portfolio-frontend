import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedOut } from "../../feature/auth/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state?.auth);
  const location = useLocation();
  const dispatch = useDispatch();
  const path = location?.pathname?.split("/")[1];
  const handleLogout = () => {
    dispatch(userLoggedOut());
  };

  const navItems = [
    {
      icon: "https://cdn.lordicon.com/osuxyevn.json",
      link: "#home",
    },
    {
      icon: "https://cdn.lordicon.com/bhfjfgqz.json",
      link: "#about",
    },
    {
      icon: "https://cdn.lordicon.com/ofwpzftr.json",
      link: "#services",
    },
    {
      icon: "https://cdn.lordicon.com/svbmmyue.json",
      link: "#skills",
    },
    {
      icon: "https://cdn.lordicon.com/fpmskzsv.json",
      link: "#projects",
    },
    {
      icon: "https://cdn.lordicon.com/diihvcfp.json",
      link: "#contact",
    },
  ];

  for (let nav of navItems) {
    const scrollToSection = (e) => {
      e.preventDefault();
      const section = document.querySelector(`${nav?.link}`);
      section.scrollIntoView({ behavior: "smooth" });
    };

    const link = document.querySelector(`a[href="${nav?.link}"]`);
    link?.addEventListener("click", scrollToSection);
  }

  return (
    <section className="flex flex-col gap-4 sticky top-16">
      {/* Homepage */}
      {path !== "" && (
        <div className="px-3 py-2 border-[1px] border-accent rounded-full">
          <Link to="/" className="icon" data-title="Homepage">
            <lord-icon
              src="https://cdn.lordicon.com/osuxyevn.json"
              trigger="hover"
              class="current-color"
              style={{ width: "24px", height: "24px", paddingTop: "2px" }}
            ></lord-icon>
          </Link>
        </div>
      )}

      {/* Homepage contents */}
      {path === "" && (
        <div className="flex flex-col gap-5 py-6 px-3 border-[1px] border-accent rounded-full">
          {navItems?.map(({ icon, link }, index) => (
            <a
              key={index}
              href={link}
              className="icon flex flex-col items-center"
              data-title={link?.split("#")[1]}
            >
              <lord-icon
                src={icon}
                trigger="hover"
                class="current-color"
                style={{ width: "24px", height: "24px" }}
              />
              <span className="text-xs">{link?.split("#")[1]}</span>
            </a>
          ))}
        </div>
      )}

      {/* Blogs */}
      <div className="px-3 py-2 border-[1px] border-accent rounded-full">
        <Link to="/blogs" className="icon" data-title="Blogs">
          <lord-icon
            src="https://cdn.lordicon.com/vufjamqa.json"
            trigger="hover"
            class="current-color"
            style={{ width: "24px", height: "24px", paddingTop: "2px" }}
          ></lord-icon>
        </Link>
      </div>

      {/* Dashboard */}
      {user && (
        <div className="flex flex-col gap-3 py-6 px-3 border-[1px] border-accent rounded-full">
          <Link to="/dashboard" className="icon" data-title="Dashboard">
            <lord-icon
              src="https://cdn.lordicon.com/ynwbvguu.json"
              trigger="hover"
              class="current-color"
              style={{ width: "24px", height: "24px", paddingTop: "2px" }}
            ></lord-icon>
          </Link>
          <div data-title="Logout">
            <FiLogOut
              onClick={handleLogout}
              className="text-[24px] hover:text-error cursor-pointer"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Navbar;
