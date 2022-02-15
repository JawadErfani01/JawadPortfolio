import React from "react";

function Interest() {
  return (
    <div
      id="interst"
      className="xl:px-28 md:px-12 px-8 text-gray-300 dark:text-slate-700"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl pb-6   font-semibold">
        Interests
      </h1>
      <div className="pb-10 pt-4  flex  flex-wrap ">
        <article className="py-6 rounded-2xl m-1 md:w-1/4 flex-1  bg-slate-900 hover:bg-slate-800 shadow-lg shadow-slate-600 px-6">
          <h2 className="text-xl md:text-2xl  xl:text-3xl font-bold text-gray-300">Teach</h2>
          <p className="text-sm md:text-lg  text-semibold text-gray-300">
            Inspired by Indutrial Revolution 4.0
          </p>
        </article>
        <article className="py-6 rounded-2xl m-1 md:w-1/4 flex-1  bg-slate-900 hover:bg-slate-800 shadow-lg shadow-slate-600 px-6">
          <h2 className="text-xl md:text-2xl  xl:text-3xl font-bold text-gray-300">Traveling</h2>
          <p className="text-sm md:text-lg  text-semibold text-gray-300">
            Love to explore nature
          </p>
        </article>
        <article className="py-6 rounded-2xl m-1 md:w-1/4 flex-1 bg-slate-900 hover:bg-slate-800 shadow-lg shadow-slate-600 px-6">
          <h2 className="text-xl md:text-2xl  xl:text-3xl font-bold text-gray-300">Footbal</h2>
          <p className="text-sm md:text-lg  text-semibold text-gray-300">
            I like to play footbal it is fan and intersting
          </p>
        </article>
        <article className="py-6 rounded-2xl m-1 md:w-1/4 flex-1  bg-slate-900 hover:bg-slate-800 shadow-lg shadow-slate-600 px-6">
          <h2 className="text-xl md:text-2xl  xl:text-3xl font-bold text-gray-300">Jeogaphy</h2>
          <p className="text-sm md:text-lg  text-semibold text-gray-300">
            Inspired by Indutrial Revolution 4.0
          </p>
        </article>
      </div>
    </div>
  );
}

export default Interest;
