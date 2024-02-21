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
      icon: "https://cdn.lordicon.com/bhfjfgqz.json",
      link: "#about",
    },
    {
      icon: "https://cdn.lordicon.com/ofwpzftr.json",
      link: "#experience",
    },
    {
      icon: "https://cdn.lordicon.com/fpmskzsv.json",
      link: "#projects",
    },
    {
      icon: "https://cdn.lordicon.com/svbmmyue.json",
      link: "#skills",
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
    <div className="w-fit flex gap-10 py-4 px-10 rounded-full sticky top-3 border border-slate-500 bg-slate-700 bg-opacity-[0.98] relative z-[100]">
      {navItems?.map(({ icon, link }, index) => (
        <a
          key={index}
          href={link}
          className="fl gap-2 group"
        >
          <lord-icon
            src={icon}
            trigger="hover"
            target="a"
            class="current-color"
            style={{ width: "24px", height: "24px" }}
          />
          <span className="group-hover:text-primary tr">{link?.charAt(1).toUpperCase()+link.slice(2)}</span>
        </a>
      ))}
    </div>
  );
};

export default Navbar;
