import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaSun,
  FaMoon,

} from "react-icons/fa";
import { VscMenu, VscClose } from "react-icons/vsc";
import Dropdown from "./Dropdown";
function Header({ light, setlight }) {
  const [Show, setShow] = useState(false);

  return (
    <header className="py-2 ">
      <div className="flex justify-between items-center px-2 p-0  lg:p-2 xl:p-3 shadow-2xl  dark:shadow-slate-300 shadow-slate-900 ">
        <h1 className=" px-4 sm:px-6 lg:px-8 w-1/4 text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-300 dark:text-slate-700">
          <span className="text-2xl md:text-3xl lg:text-4xl  text-blue-600">
            J
          </span>
          awad
        </h1>
        <nav className=" hidden lg:block  ">
          <ul className="flex text-gray-300 dark:text-slate-700  items-center justify-center  text-lg xl:text-xl">
            <li className="xl:px-16 px-12 dark:hover:text-slate-900 hover:text-white">
              <span
                onClick={() => window.location.replace("#project")}
                className=" hover:border-b dark:border-slate-900  p-2 duration-100"
              >
                Projects
              </span>
            </li>
            <li className="xl:px-16 px-12 dark:hover:text-slate-900 hover:text-white ">
              <span
                onClick={() => window.location.replace("#skills")}
                className=" hover:border-b dark:border-slate-900 p-2 duration-100"
              >
                Skills
              </span>
            </li>
            <li className="xl:px-16 px-12 dark:hover:text-slate-900 hover:text-white">
              <span
                onClick={() => window.location.replace("#about")}
                className=" hover:border-b dark:border-slate-900  p-2 duration-100"
              >
                About
              </span>
            </li>
          </ul>
        </nav>
        <div>
          <button
            onClick={() => setlight(!light)}
            className="text-xl md:text-2xl xl:p-3  p-2 m-2 lg:m-0 dark:hover:text-white dark:hover:bg-slate-700  hover:bg-slate-900  hover:rounded-full hover:scale-125 transform duration-500"
          >
            <span>{light ? <FaSun /> : <FaMoon />}</span>
          </button>
          <button
            onClick={() => setShow(!Show)}
            className=" lg:hidden text-xl md:text-2xl xl:p-3  p-2 m-2 lg:m-0 dark:hover:text-white dark:hover:bg-slate-700  hover:bg-slate-900  hover:rounded-full hover:scale-125 transform duration-500"
          >
            <span>{Show ? <VscClose /> : <VscMenu />}</span>
          </button>
        </div>
        <section className="lg:flex pl-8 xl:pl-12 w-1/4 hidden  ">
          <a
            className="text-2xl mx-4  p-3 dark:hover:text-white dark:hover:bg-slate-700 hover:bg-slate-900 hover:rounded-full hover:scale-125 transform duration-500"
            href="#"
          >
            <span>
              <FaGithub />
            </span>
          </a>
          <a
            className="text-2xl mx-4 p-3 dark:hover:text-white dark:hover:bg-slate-700  hover:bg-slate-900 hover:rounded-full hover:scale-125 transform duration-500"
            href="#"
          >
            <span>
              <FaLinkedin />
            </span>
          </a>
          <a
            className="text-2xl mx-4 dark:hover:text-white dark:hover:bg-slate-700  p-3 hover:bg-slate-900 hover:rounded-full hover:scale-125 transform duration-500"
            href="#"
          >
            <span>
              <FaTwitter />
            </span>
          </a>
        </section>
      </div>
      {Show && <Dropdown />}
      <main className="xl:px-28 md:px-12 px-8   dark:text-slate-700">
        <div className=" md:text-6xl sm:text-5xl  py-10 pb-6 lg:pt-20 lg:text-7xl text-3xl font-semibold">
          <h1>
            I'm{" "}
            <span className="text-4xl md:text-7xl sm:text-6xl  lg:text-8xl text-blue-600">
              J
            </span>
            awad,
          </h1>
          <h1>
            a Frontend <span className="opacity-80">Developer</span>
          </h1>
        </div>
        <div className="md:text-2xl text-lg lg:leading-10 font-thin">
          <h2 className="w-full lg:w-1/2">
            I build high-performing & modern applications with React.js by
            consuming backend APIs
          </h2>
          <button
            onClick={() => window.location.replace("#fotterlink")}
            className="px-3 my-10  bg-gradient-to-l from-cyan-700 via-cyan-800  dark:via-blue-300 dark:bg-slate-300 dark:from-blue-400  dark:text-gray-700 md:py-4 py-1 w-full sm:w-1/2 md:w-1/3 lg:w-1/4  text-lg md:text-xl lg:text-2xl text-slate-200 bg-slate-700  rounded-full hover:scale-105 duration-300 font-semibold shadow-2xl  hover:bg-slate-500 dark:hover:bg-slate-600"
          >
            <span className="text-blue-500  mx-1">Let's</span> Connect
          </button>
        </div>
      </main>
    </header>
  );
}

export default Header;
