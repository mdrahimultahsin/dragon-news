import React, {use} from "react";
import {NavLink, useNavigate} from "react-router";
import login from "../assets/user.png";
import {AuthContext} from "../provider/Context";
import { toast } from "react-toastify";

const Navbar = () => {
  const nevigate = useNavigate();
  const {user, logOutUser} = use(AuthContext);

  const handleSignOut = () => {
    logOutUser()
      .then(() => {
        toast.success("Signed out successfully!");
      })
      .catch(() => {
        
        toast.warn("Failed to sign out.");
      });
  };
  return (
    <div className="flex justify-between items-center">
      <div>
        {user && <h1 className="font-semibold text-lg">{user?.displayName}</h1>}
      </div>
      <div>
        <ul className="flex items-center gap-5">
          <li className=" font-medium">
            <NavLink
              className={({isActive}) =>
                isActive
                  ? "text-secondary border-b-2 p-2"
                  : "text-primary-content border-b-2 p-2 border-transparent"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className=" font-medium">
            <NavLink
              className={({isActive}) =>
                isActive
                  ? "text-secondary border-b-2 p-2"
                  : "text-primary-content border-b-2 p-2 border-transparent"
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className=" font-medium">
            <NavLink
              className={({isActive}) =>
                isActive
                  ? "text-secondary border-b-2 p-2"
                  : "text-primary-content border-b-2 p-2 border-transparent"
              }
              to="/career"
            >
              Career
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex gap-4">
        <img
          className="w-10  ring ring-blue-500 rounded-full object-cover"
          src={user?.photoURL ? user?.photoURL: login}
          alt=""
        />
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn btn-primary text-white py-2 px-5 font-medium text-lg"
          >
            Sign out
          </button>
        ) : (
          <button
            onClick={() => nevigate("/auth/login")}
            className="btn btn-primary text-white py-2 px-5 font-medium text-lg"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
