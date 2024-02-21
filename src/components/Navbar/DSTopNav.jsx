import { HiMenuAlt1 } from "react-icons/hi";
import { useSelector } from "react-redux";
const DSTopNav = ({ toggle, setToggle }) => {
  // const { user } = useSelector((state) => state?.auth);
  const user = { fullname: "Shahtaz Rahman", email: "shahtaz67@gmail.com" };

  return (
    <div
      className="bg-transparent fl justify-between fixed left-0 right-0 md:px-8 px-4"
      style={{ zIndex: 99 }}
    >
      <div className="transition-all duration-300 cursor-pointer rounded-full flex items-center gap-4">
        <div
          onClick={() => setToggle(!toggle)}
          className="lg:hidden md:hidden block"
        >
          <HiMenuAlt1 />
        </div>
      </div>

      <div>
        <div className="fl gap-3 bg-slate-700 hover:bg-slate-600 py-2 rounded-lg pr-5 pl-3 mt-2 border border-slate-500 bg-opacity-80 tr">
          <div>
            {user?.photo?.url ? (
              <img
                className="w-10 h-10 object-cover rounded-full border-[3px] border-blue-200 hover:border-blue-300 tr"
                src={user?.photo?.url}
                alt={user?.fullname}
              />
            ) : (
              <div className="h-9 w-9 rounded-full grid place-items-center font-bold text-white bg-primary text-xl">
                {user?.fullname?.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white">
              {user.fullname}
            </h2>
            <p className="text-xs opacity-60">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DSTopNav;
