import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeNav } from "./navSlice";

const NavbarPopUp = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-end mr-6 md:hidden relative">
      <nav className=" w-[200px] h-[240px] mr-10">
        <div class=" w-full text-black">
          <ul class="flex flex-col p-4 mt-4 bg-gray-50 shadow-xl rounded-lg border border-gray-100">
            <li>
              <Link
                to="/"
                class="block py-2 pr-4 pl-3 text-red-500 rounded hover:bg-yellow-200 "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block py-2 pr-4 pl-3  text-red-500 rounded hover:bg-yellow-200 "
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/"
                class="block py-2 pr-4 pl-3  text-red-500 rounded hover:bg-yellow-200 "
              >
                Features
              </Link>
            </li>

            <li>
              <Link
                to="/"
                class="block py-2 pr-4 pl-3  text-red-500  rounded hover:bg-yellow-200 "
              >
                Contact
              </Link>
            </li>

            <button
              className="absolute top-1 right-7"
              onClick={() => dispatch(closeNav())}
            >
              <div className="text-xs">
                <div className="text-white bg-remove bg-contain bg-transparent bg-no-repeat w-[30px] h-[25px]"></div>
              </div>
            </button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavbarPopUp;
