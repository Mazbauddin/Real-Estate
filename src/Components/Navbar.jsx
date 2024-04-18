import { Link, NavLink } from "react-router-dom";
import useAuthHooks from "../Hooks/useAuthHooks";

const Navbar = () => {
  const { logout, user } = useAuthHooks();
  return (
    <div className="">
      <div className="navbar bg-white fixed z-10">
        {/* {
  data-aos="fade-right"
  data-aos-duration="1000"

  data-aos="fade-down"
          data-aos-duration="1000"
          data-aos="fade-left"
          data-aos-duration="1000"
} */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#e5958e] rounded-lg mx-2 font-bold border-2 px-5 py-3 border-[#e5958e] bg-transparent hover:bg-transparent"
                      : "font-bold px-5 py-3 mx-2"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#e5958e] rounded-lg mx-2 font-bold border-2 px-5 py-3 border-[#e5958e] bg-transparent hover:bg-transparent"
                      : "font-bold px-5 py-3 mx-2"
                  }
                  to={"/UpdateProfile"}
                >
                  Update Profile
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex justify-between items-center">
            <NavLink to={"/"}>
              <div className="flex justify-between items-center">
                <img
                  className="w-12 h-full"
                  src="https://i.ibb.co/djR0sdW/logo.png"
                  alt=""
                />
                <a className=" text-xl font-bold">
                  Gorib <span className="text-[#e5958e]">Homes</span>
                  <p className=" text-[14px] font-bold text-[#7097eb]">
                    Real Estate Pvt.
                  </p>
                </a>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[#e5958e] rounded-lg mx-2 font-bold border-2 px-5 py-3 border-[#e5958e] bg-transparent hover:bg-transparent"
                    : "font-bold px-5 py-3 mx-2"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[#e5958e] rounded-lg mx-2 font-bold border-2 px-5 py-3 border-[#e5958e] bg-transparent hover:bg-transparent"
                    : "font-bold px-5 py-3 mx-2"
                }
                to={"/UpdateProfile"}
              >
                Update Profile
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={user?.photoURL || "https://i.ibb.co/tspH3rJ/user.jpg"}
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button className="btn btn-sm btn-ghost">
                    {user?.displayName || "user name not found"}
                  </button>
                </li>
                <li>
                  <button onClick={logout} className="btn btn-sm  btn-ghost">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn flex btn-primary  items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md  bg-[#e5958e] border-transparent border-2 hover:bg-transparent hover:border-[#e5958e] hover:text-[#e5958e] text-white">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
