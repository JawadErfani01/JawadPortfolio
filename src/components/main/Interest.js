import React from "react";

function Interest() {
  return (
    <div
      id="interst"
      className="xl:px-28 md:px-12  px-4 sm:px-6   dark:text-slate-700"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl pb-6   ">
        Interests
      </h1>
      <div className="pb-10 pt-4  flex  flex-wrap  text-gray-300 ">
        <article className="py-4 bg-gradient-to-l from-slate-900 dark:via-blue-300 dark:bg-slate-300 dark:from-blue-300  dark:text-gray-700 via-cyan-900  rounded-2xl m-2 md:w-1/4 flex-1 bg-slate-800 hover:bg-slate-700 shadow-lg shadow-slate-800 px-6">
          <h2 className="text-xl md:text-2xl  xl:text-3xl  ">Coding</h2>
          <p className="text-sm md:text-lg    ">
            I Love to play with code for me error is to interesting
          </p>
        </article>
        <article className="py-6  bg-gradient-to-l from-slate-900 dark:via-blue-300 dark:bg-slate-300 dark:from-blue-300  dark:text-gray-700 via-cyan-900  rounded-2xl m-2 md:w-1/4 flex-1  bg-slate-800 hover:bg-slate-700 shadow-lg shadow-slate-800 px-6">
          <h2 className="text-xl md:text-2xl  xl:text-3xl  ">Teach</h2>
          <p className="text-sm md:text-lg  text-semibold ">
            I like to help and share my knowledge
          </p>
        </article>
        <article className="py-6 bg-gradient-to-l from-slate-900 dark:via-blue-300 dark:bg-slate-300 dark:from-blue-300  dark:text-gray-700 via-cyan-900  rounded-2xl m-2 md:w-1/4 flex-1  bg-slate-800 hover:bg-slate-700 shadow-lg shadow-slate-800 px-6">
          <h2 className="text-xl md:text-2xl  xl:text-3xl  ">Traveling</h2>
          <p className="text-sm md:text-lg  text-semibold">
            Love to explore nature
          </p>
        </article>

        <article className="py-6 bg-gradient-to-l from-slate-900 dark:via-blue-300 dark:bg-slate-300 dark:from-blue-300  dark:text-gray-700 via-cyan-900  rounded-2xl m-2 md:w-1/4 flex-1  bg-slate-800 hover:bg-slate-700 shadow-lg shadow-slate-800 px-6">
          <h2 className="text-xl md:text-2xl  xl:text-3xl ">geography</h2>
          <p className="text-sm md:text-lg  text-semibold ">
            Reading about geography interesting
          </p>
        </article>
      </div>
    </div>
  );
}

export default Interest;
