import React from "react";

function Main() {
  return (
    <div id="project" className="xl:p-28 px-8 md:px-12   xl:pt-0 my-8 xl:my-0 ">
      <h1 className="xl:text-7xl sm:text-5xl text-3xl md:text-6xl text-gray-300 dark:text-slate-700 font-semibold">
        Featured Projects
      </h1>

      <div className="md:flex   text-gray-300">
        <section className="md:w-2/5 sm:w-4/6 w-5/6 mx-auto text-center shadow-xl shadow-slate-500 rounded-2xl bg-slate-900 py-7 p-4 my-8  md:my-16 md:mx-12">
          <img
            src="logo192.png"
            className=" mx-auto items-center w-2/3 lg:max-h-52"
            alt="logo192"
          />
          <h2 className="text-2xl md:text-3xl font-normal">Maxpot Ecommerce</h2>
          <div className="w-16 rounded-full mx-auto m-4   h-1 z-10 bg-blue-600"></div>
          <p className="md:text-lg text-md lg:text-xl md:mx-4 mx-2 text-justify">
            This is a full stack Ecommerce Store for Mixed Martial Art Products
            where you create your account and use it for checkout process
          </p>
          <ul className="flex items-center justify-center  md:m-4 my-3">
            <li className="px-2 md:px-0 lg:px-2  rounded-xl   text-blue-400 py-1 sm:mr-2  mr-1">
              React
            </li>
            <li className="px-2 md:px-0 lg:px-2  rounded-xl   text-blue-400 py-1 sm:mr-2  mr-1">
              Redux
            </li>
            <li className="px-2 md:px-0 lg:px-2  rounded-xl   text-blue-400 py-1 sm:mr-2  mr-1">
              TypeScript
            </li>
            <li className="px-2 md:px-0 lg:px-2  rounded-xl   text-blue-400 py-1 sm:mr-2  mr-1">
              TailwindCss
            </li>
          </ul>
          <div className="mx-auto px-4 w-4/5 flex justify-between">
            <button className="px-4 py-2 rounded-lg bg-blue-500 shadow-md  hover:bg-blue-600 text-white shadow-blue-700">
              Code
            </button>
            <button className="px-4 py-2 rounded-lg bg-blue-500 shadow-md  hover:bg-blue-600 text-white shadow-blue-700">
              Live
            </button>
          </div>
        </section>{" "}
        <section className="md:w-2/5 sm:w-4/6 w-5/6 mx-auto text-center shadow-xl shadow-slate-500 rounded-2xl bg-slate-900 py-7 p-4 my-8  md:my-16 md:mx-12">
          <img
            src="logo192.png"
            className=" mx-auto items-center w-2/3 lg:max-h-52"
            alt="logo192"
          />
          <h2 className="text-2xl md:text-3xl font-normal">Maxpot Ecommerce</h2>
          <div className="w-16 rounded-full mx-auto m-4   h-1 z-10 bg-blue-600"></div>
          <p className="md:text-lg text-md lg:text-xl md:mx-4 mx-2 text-justify">
            This is a full stack Ecommerce Store for Mixed Martial Art Products
            where you create your account and use it for checkout process
          </p>
          <ul className="flex items-center justify-center  md:m-4 my-3">
            <li className="px-2 md:px-0 lg:px-2  rounded-xl   text-blue-400 py-1 sm:mr-2  mr-1">
              React
            </li>
            <li className="px-2 md:px-0 lg:px-2  rounded-xl   text-blue-400 py-1 sm:mr-2  mr-1">
              Redux
            </li>
            <li className="px-2 md:px-0 lg:px-2  rounded-xl   text-blue-400 py-1 sm:mr-2  mr-1">
              TypeScript
            </li>
            <li className="px-2 md:px-0 lg:px-2  rounded-xl   text-blue-400 py-1 sm:mr-2  mr-1">
              TailwindCss
            </li>
          </ul>
          <div className="mx-auto px-4 w-4/5 flex justify-between">
            <button className="px-4 py-2 rounded-lg bg-blue-500 shadow-md  hover:bg-blue-600 text-white shadow-blue-700">
              Code
            </button>
            <button className="px-4 py-2 rounded-lg bg-blue-500 shadow-md  hover:bg-blue-600 text-white shadow-blue-700">
              Live
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Main;
