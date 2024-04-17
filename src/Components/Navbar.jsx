import { Link, NavLink } from "react-router-dom";
import useAuthHooks from "../Hooks/useAuthHooks";

const Navbar = () => {
  const { logout, user } = useAuthHooks();
  return (
    <div className="max-w-6xl container mx-auto bg-red-500">
      <div className="navbar">
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
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/UpdateProfile"}>Update Profile</NavLink>
              </li>
              <li>
                <NavLink to={"/UserProfile"}>User Profile</NavLink>
              </li>
            </ul>
          </div>
          <div className="flex justify-between items-center">
            <NavLink to={"/"}>
              <img
                className="w-12 h-full"
                src="https://i.ibb.co/YTnBNNJ/logo1.png"
                alt=""
              />
            </NavLink>
            <NavLink to={"/"}>
              <a className=" text-xl font-bold">
                Gorib <span className="text-[#5163eb]">Real Estate</span>
              </a>
            </NavLink>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/UpdateProfile"}>Update Profile</NavLink>
            </li>
            <li>
              <NavLink to={"/UserProfile"}>User Profile</NavLink>
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
                  <button className="btn btn-sm  btn-ghost">
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
              <button className="btn btn-sm  btn-ghost">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
