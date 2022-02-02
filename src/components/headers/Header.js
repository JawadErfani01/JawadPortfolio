import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
function Header() {
  return (
    <header className="py-2">
      <div className="flex justify-between items-center p-4 shadow-2xl shadow-slate-900 ">
        <h1 className=" px-10 w-1/4 text-3xl font-semibold text-white"><span className="text-4xl text-green-500">J</span>awad</h1>
        <nav className="  w-1/2 ">
          <ul className="flex text-gray-300  items-center justify-center  text-xl">
            <li className="px-16 hover:text-white">
              <a href="#">Projects</a>
            </li>
            <li className="px-16 hover:text-white">
              <a href="#">Skills</a>
            </li>
            <li className="px-16 hover:text-white">
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
        <section className="flex pl-16 w-1/4  ">
          <a
            className="text-2xl mx-5 p-3 hover:bg-slate-900 hover:rounded-full hover:scale-125 transform duration-500"
            href="#"
          >
            <span>
              <FaGithub />
            </span>
          </a>
          <a
            className="text-2xl mx-5 p-3 hover:bg-slate-900 hover:rounded-full hover:scale-125 transform duration-500"
            href="#"
          >
            <span>
              <FaLinkedin />
            </span>
          </a>
          <a
            className="text-2xl mx-5 p-3 hover:bg-slate-900 hover:rounded-full hover:scale-125 transform duration-500"
            href="#"
          >
            <span>
              <FaTwitter />
            </span>
          </a>
        </section>
      </div>
      <main className="mx-4 text-gray-200">
        <div className="p-24 pt-20 pb-10 text-7xl font-semibold">
          <h1>
            I'm <span className="text-8xl text-green-500">J</span>awad,
          </h1>
          <h1>a Frontend Developer</h1>
        </div>
        <div className="px-24 text-2xl leading-10 font-thin">
          <h2>I build high-performing & modern applications</h2>
          <h2>with React.js by consuming backend APIs</h2>
          <button className="px-12 my-6 py-4 text-2xl bg-green-500 text-white rounded-full font-semibold shadow-lg shadow-green-800"><span className="text-slate-800 mx-1">Let's</span> Connect</button>
        </div>
      </main>
    </header>
  );
}

export default Header;
