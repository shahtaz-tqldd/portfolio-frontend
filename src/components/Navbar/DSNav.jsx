import { useDispatch } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import { userLoggedOut } from "../../feature/auth/authSlice";
import { BiChevronLeft } from "react-icons/bi";
import { dsnavdata } from "../../assets/data/dsnavdata";
import { FiLogOut } from "react-icons/fi";

const DSNav = ({ toggle, setToggle }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const isActiveNavLink = (path) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    dispatch(userLoggedOut());
  };

  return (
    <div className="min-h-screen relative bg-slate-800">
      <div
        onClick={() => setToggle(!toggle)}
        className="h-7 w-7 bg-primaryColor hover:bg-primaryColorh text-white rounded-full lg:hidden grid place-items-center absolute top-5 right-4 cursor-pointer"
      >
        <BiChevronLeft className="text-2xl" />
      </div>
      <div className="pt-12 mb-12 flex flex-col items-center justify-center gap-1">
        <Link to={"/"} className="text-2xl font-ubuntu font-bold text-primary">
          Shahtaz Rahman
        </Link>
        <h2 className="text-sm opacity-60">Admin Dashboard</h2>
      </div>

      <div className="mt-2 mx-4">
        {dsnavdata?.map((item, index) => (
          <div key={index} className="group">
            <NavLink
              title={item.title}
              to={item.link}
              onClick={() => setToggle(false)}
              className={`${
                isActiveNavLink(item.link)
                  ? "bg-slate-200 text-slate-900"
                  : "group-hover:bg-slate-600 group-hover:text-white"
              } rounded-md tr w-full fl gap-2 py-2 pl-4 font-medium mt-1`}
            >
              <item.icon className="text-base" />
              {item.title}
            </NavLink>
          </div>
        ))}

        <div className="group pb-8 absolute bottom-0 left-5 right-5">
          <button
            onClick={handleLogout}
            className={`py-2 w-full bg-rose-500 hover:bg-rose-600 text-white rounded-md fl justify-center font-medium tr`}
          >
            <FiLogOut className="rotate-180 -ml-2 mr-2"/> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default DSNav;
