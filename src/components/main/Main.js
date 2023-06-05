import React from "react";
import Typewriter from "typewriter-effect";
function Main() {
  return (
    <div>
      <main className="xl:px-28 md:px-12 px-4 sm:px-6    dark:text-slate-700">
        <div className="md:text-6xl sm:text-5xl  py-10 pb-6 lg:pt-20 lg:text-7xl text-3xl">
          <div className="">
            <h1 className="font-semibold">
              I'm
              <span className="text-4xl lg:ml-3 ml-2 md:text-7xl sm:text-6xl  lg:text-8xl text-blue-600">
                J
              </span>
              awad,
            </h1>
          </div>
          <div className=" inline-flex">
            <span className="mr-2 font-semibold text-3xl md:text-6xl sm:text-5xl  lg:text-7xl text-blue-600">
              a
            </span>
            <div className="md:mt-1 mt-0 font-semibold">
              <Typewriter
                className="mt-10"
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 80,
                  strings: [
                    "Software Engineer.",
                    "Frontend Developer.",
                    "Web Developer.",
                  ],
                }}
              />
            </div>
          </div>
        </div>
        <div className="md:text-2xl text-lg ">
          <h3 className="w-full lg:w-2/3">
            I build high-performing & modern applications with React.js by
            consuming backend APIs
          </h3>
          <button
            onClick={() => window.location.replace("#fotterlink")}
            className="px-3 my-10  bg-gradient-to-l from-cyan-700 via-cyan-800  dark:via-blue-300 dark:bg-slate-300 dark:from-blue-400  dark:text-gray-700 md:py-4 py-1 w-full sm:w-1/2 md:w-1/3 lg:w-1/4  text-lg md:text-xl lg:text-2xl text-slate-200 bg-slate-700  rounded-full hover:scale-105 duration-300  shadow-2xl  hover:bg-slate-500 dark:hover:bg-slate-600"
          >
            <span className="text-blue-500 ">Let's</span> Connect
          </button>
        </div>
      </main>
    </div>
  );
}

export default Main;
