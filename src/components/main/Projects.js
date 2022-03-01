import React from "react";
import { projects } from "../PUblicData/Data";
function Projects() {
  return (
    <div id="project" className="xl:px-28  px-4 sm:px-6   md:px-12   ">
      <h1 className="xl:text-7xl sm:text-5xl text-3xl md:text-6xl text-gray-300 dark:text-slate-700 font-semibold">
        Featured Projects
      </h1>

      <div className="md:flex justify-center items-center mx-6 sm:mx-0  text-gray-300">
    
          {projects.map((project,index) => {
            const { image, name, des, tegUse, overviesButton } = project;
            return (
              <section className="md:w-3/5 lg:w-2/5  bg-gradient-to-l dark:via-blue-300 dark:bg-slate-300 dark:from-blue-300  dark:text-gray-700  from-slate-800 via-cyan-900  sm:w-4/6 w-full mx-auto text-center shadow-xl shadow-slate-500 rounded-2xl bg-slate-900 py-7 p-4  my-8  md:my-16 md:mx-4 lg:mx-10">
                <img
                  src={image}
                  className=" mx-auto items-center  lg:max-h-56 rounded-t-xl mb-4 hover:scale-105 duration-500 ease-in-out"
                  alt={name}
                />
                <h2 className="text-2xl md:text-3xl font-normal">{name}</h2>
                <div className="w-16 rounded-full mx-auto m-4   h-1 z-10 bg-blue-600"></div>
                <p className="md:text-lg text-md lg:text-xl md:mx-4 mx-2 text-justify">
                  {des}
                </p>
                <div className="flex justify-center items-center">
                {tegUse.map((teg,index) => {
                  return (
                    <ul key={index} className="text-sm md:text-sm lg:text-lg sm:text-lg  m-2  my-3">
                      <li className=" rounded-xl   dark:text-blue-700 text-blue-400 py-1 sm:mr-1 ">
                        {teg}
                      </li>
                    </ul>
                  );
                })}
                </div>
                <div className="flex justify-center items-center  ">
                {overviesButton.map((btn,index) => {
                  return (
                    <div key={index} className="mx-auto px-4 ">
                      <button className="px-4 py-2 dark:via-blue-300 dark:bg-slate-300 dark:from-blue-400  dark:text-gray-700 rounded-lg bg-blue-500 shadow-md bg-gradient-to-l from-slate-800 via-cyan-900  hover:bg-blue-600 text-white shadow-cyan-600">
                        {btn}
                      </button>
                    </div>
                  );
                })}
                </div>
                </section>
            );
          })}
     
      </div>
    </div>
  );
}

export default Projects;
