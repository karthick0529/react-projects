import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
    <nav className={`bg-white border-2 border-b-gray-200 px-5`}>
      <div className="max-w-screen-lg flex flex-wrap items-baseline justify-center mx-auto py-4 px-0 md:px-4">
        <div className="flex gap-6 items-center">
          <button
            onClick={() => setIsActive(!isActive)}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isActive ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul
            className={`bg-gray-50 md:bg-white font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-7 items-center text-center rtl:space-x-reverse md:mt-0 md:border-0 tracking-wide`}
          >
            <li>
              <Link
                to={"/"}
                className={`text-gray-900 hover:text-blue-700 max-md:block max-md:px-3 max-md:py-2 max-md:hover:text-white max-md:hover:bg-blue-700 text-base max-md:text-base uppercase navbar__link ${
                  splitLocation[1] === "" ? "active text-green-600" : ""
                }`}
                aria-current="page"
              >
                All
              </Link>
            </li>
            <li>
              <Link
                to={"/fsd"}
                className={`text-gray-900 hover:text-blue-700 max-md:block max-md:px-3 max-md:py-2 max-md:hover:text-white max-md:hover:bg-blue-700 text-base max-md:text-base uppercase navbar__link text-center ${
                  splitLocation[1] === "fsd" ? "active text-green-600" : ""
                }`}
                aria-current="page"
              >
                full stack development
              </Link>
            </li>
            <li>
              <Link
                to={"/ds"}
                className={`text-gray-900 hover:text-blue-700 max-md:block max-md:px-3 max-md:py-2 max-md:hover:text-white max-md:hover:bg-blue-700 text-base max-md:text-base uppercase navbar__link text-center ${
                  splitLocation[1] === "ds" ? "active text-green-600" : ""
                }`}
                aria-current="page"
              >
                data science
              </Link>
            </li>
            <li>
              <Link
                to={"/cs"}
                className={`text-gray-900 hover:text-blue-700 max-md:block max-md:px-3 max-md:py-2 max-md:hover:text-white max-md:hover:bg-blue-700 text-base max-md:text-base uppercase navbar__link ${
                  splitLocation[1] === "cs" ? "active text-green-600" : ""
                }`}
                aria-current="page"
              >
                cyber security
              </Link>
            </li>
            <li>
              <Link
                to={"/career"}
                className={`text-gray-900 hover:text-blue-700 max-md:block max-md:px-3 max-md:py-2 max-md:hover:text-white max-md:hover:bg-blue-700 text-base max-md:text-base uppercase navbar__link ${
                  splitLocation[1] === "career" ? "active text-green-600" : ""
                }`}
                aria-current="page"
              >
                career
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;