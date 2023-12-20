import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar bg-indigo-600">
        <div className="container mx-auto">
          <div className=" navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-white shadow  rounded-box w-52"
              >
                <li>
                  <Link to="/" className="text-black font-medium">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-black font-medium">
                    Book
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-black font-medium">
                    Register
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-black font-medium">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
            <Link to="/" className="text-white text-xl font-medium">
              Hotel Booking
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/" className="text-white text-lg font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white text-lg font-medium">
                  Book
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white text-lg font-medium">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white text-lg font-medium">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
