import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { openNav } from "../features/navBar/navSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.navBar);

  return (
    <header className="flex items-center lg:justify-around min-h-[5vh] mt-3 lg:container lg:mx-auto max-w-[375px] md:max-w-[700px] lg:max-w-[900px]">
      {/* logo */}
      <div className="flex items-center justify-evenly sm:space-x-14 sm:w-[370px]">
        <div>
          <h1 className="ml-8">
            <Link className="hover:text-[15px]" to="/">
              my<span className="text-red-600">foody</span>
            </Link>
          </h1>
        </div>

        <button
          onClick={() => dispatch(openNav())}
          className="md:hidden text-[15px] cursor-pointer mr-[5px] hover:text-xl"
        >
          <AiOutlineMenuUnfold />
        </button>
      </div>
      <nav className="md:flex hidden md:w-[450px]">
        <ul className="md:space-x-3 ">
          <Link className="hover:border-b hover:border-red-500" to="/">
            Home
          </Link>
          <Link className="hover:border-b hover:border-red-500" to="/">
            About
          </Link>
          <Link className="hover:border-b hover:border-red-500" to="/">
            Features
          </Link>
          <Link className="hover:border-b hover:border-red-500" to="/">
            Contact
          </Link>
        </ul>
      </nav>

      <div className=" hidden lg:flex md:space-x-4 lg:w-[150px] lg:items-center">
        <div>
          <button className="hover:border-b hover:border-red-500">Login</button>
        </div>
        <div className="">
          <div className="py-3">
            <button className="w-[80px] h-[32px] bg-red-500 rounded-lg hover:rounded-2xl font-semibold text-white ">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
