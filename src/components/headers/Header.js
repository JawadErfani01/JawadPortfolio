import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaSun, FaMoon } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

import Main from "../main/Main";
import Dropdown from "./Dropdown";
function Header({ light, setlight }) {
  const [Show, setShow] = useState(false);

  return (
    <header>
      <div className="flex justify-between items-center px-2 p-2  lg:p-3 xl:p-4 shadow-xl  dark:shadow-slate-200 shadow-slate-700 ">
        <h1 className=" px-4  sm:px-6 lg:px-8 w-1/4 text-xl sm:text-2xl lg:text-3xl text-gray-300 dark:text-slate-700">
          <span className="text-2xl md:text-3xl lg:text-4xl  text-blue-600">
            J
          </span>
          awad
        </h1>
        <nav className=" hidden lg:block  ">
          <ul className="flex text-gray-300 dark:text-slate-700  items-center justify-center  text-lg xl:text-xl">
            <li className="xl:px-10 px-5 dark:hover:text-slate-900 hover:text-white">
              <span
                onClick={() => window.location.replace("#project")}
                className=" hover:border-b dark:border-slate-900 cursor-pointer  p-2 duration-100"
              >
                Projects
              </span>
            </li>
            <li className="xl:px-10 px-5 dark:hover:text-slate-900 hover:text-white ">
              <span
                onClick={() => window.location.replace("#skills")}
                className=" hover:border-b dark:border-slate-900 cursor-pointer p-2 duration-100"
              >
                Skills
              </span>
            </li>
            <li className="xl:px-10 px-5 dark:hover:text-slate-900 hover:text-white">
              <span
                onClick={() => window.location.replace("#about")}
                className=" hover:border-b dark:border-slate-900 cursor-pointer  p-2 duration-100"
              >
                About
              </span>
            </li>
            <li className="xl:px-10 px-5 dark:hover:text-slate-900 hover:text-white">
              <span
                onClick={() => window.location.replace("#contact")}
                className=" hover:border-b dark:border-slate-900 cursor-pointer  p-2 duration-100"
              >
                Contact
              </span>
            </li>
          </ul>
        </nav>
        <div>
          <button
            onClick={() => setlight(!light)}
            className="text-xl md:text-2xl xl:p-3  p-2 m-1 lg:m-0 dark:hover:text-white dark:hover:bg-slate-700  hover:bg-slate-800  hover:rounded-full hover:scale-125 transform duration-500"
          >
            <span>{light ? <FaSun /> : <FaMoon />}</span>
          </button>
          <button
            onClick={() => setShow(!Show)}
            className="lg:hidden text-xl md:text-2xl xl:p-3  p-2 m-1 lg:m-0 dark:hover:text-white dark:hover:bg-slate-700  hover:bg-slate-800  hover:rounded-full hover:scale-125 transform duration-500"
          >
            <span>{Show ? <IoMdClose /> : <IoMenuSharp />}</span>
          </button>
        </div>
        <section className="lg:flex pl-8 xl:pl-12 w-1/4 hidden  ">
          <a
            className="text-2xl mx-2  p-3 dark:hover:text-white dark:hover:bg-slate-700 hover:bg-slate-800 hover:rounded-full hover:scale-125 transform duration-500"
            href="https://github.com/JawadErfani01"
            target="_blank"
          >
            <span>
              <FaGithub />
            </span>
          </a>
          <a
            className="text-2xl mx-2 p-3 dark:hover:text-white dark:hover:bg-slate-700  hover:bg-slate-800 hover:rounded-full hover:scale-125 transform duration-500"
            href="https://www.linkedin.com/in/jawad-erfani-610197195/"
            target="_blank"
          >
            <span>
              <FaLinkedin />
            </span>
          </a>
          <a
            className="text-2xl mx-2 dark:hover:text-white dark:hover:bg-slate-700  p-3 hover:bg-slate-800 hover:rounded-full hover:scale-125 transform duration-500"
            href="https://twitter.com/JawadErfani01"
            target="_blank"
          >
            <span>
              <FaTwitter />
            </span>
          </a>
        </section>
      </div>
      {Show && <Dropdown />}
      <Main />
    </header>
  );
}

export default Header;
