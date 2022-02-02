import React from "react";

function Main() {
  return (
    <div id="project" className="p-28 py-8 pt-12 mx-2">
      <h1 className="text-7xl text-gray-300 dark:text-slate-700 font-semibold">
        Featured Projects
      </h1>

      <div className="flex   text-gray-300">
        <section className="w-2/5 text-center shadow-xl shadow-slate-500 rounded-2xl bg-slate-900 py-7 p-4  my-16 mx-12">
          <img
            src="logo192.png"
            className=" mx-auto items-center w-2/3 max-h-52"
            alt="logo192"
          />
          <h2 className="text-3xl font-normal">Maxpot Ecommerce</h2>
          <div className="w-16 rounded-full mx-auto m-4   h-1 z-10 bg-blue-600"></div>
          <p className="text-xl mx-4 text-justify">
            This is a full stack Ecommerce Store for Mixed Martial Art Products
            where you create your account and use it for checkout process
          </p>
          <ul className="flex m-4">
            <li className="px-2 rounded-xl   text-blue-400 py-1  mr-2">
              React
            </li>
            <li className="px-2 rounded-xl   text-blue-400 py-1  mr-2">
              Redux
            </li>
            <li className="px-2 rounded-xl   text-blue-400 py-1  mr-2">
              TypeScript
            </li>
            <li className="px-2 rounded-xl   text-blue-400 py-1  mr-2">
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
        <section className="w-2/5 text-center shadow-xl shadow-slate-500 rounded-2xl bg-slate-900 py-7 p-4  my-16 mx-12">
          <img
            src="logo512.png"
            className=" mx-auto items-center w-2/3 max-h-52"
            alt="logo512"
          />
          <h2 className="text-3xl font-normal">Maxpot Ecommerce</h2>
          <div className="w-16 rounded-full mx-auto m-4   h-1 z-10 bg-blue-600"></div>
          <p className="text-xl mx-4 text-justify">
            This is a full stack Ecommerce Store for Mixed Martial Art Products
            where you create your account and use it for checkout process
          </p>
          <ul className="flex m-4">
            <li className="px-2 rounded-xl   text-blue-400 py-1  mr-2">
              React
            </li>
            <li className="px-2 rounded-xl   text-blue-400 py-1  mr-2">
              Redux
            </li>
            <li className="px-2 rounded-xl   text-blue-400 py-1  mr-2">
              TypeScript
            </li>
            <li className="px-2 rounded-xl   text-blue-400 py-1  mr-2">
              TailwindCss
            </li>
          </ul>
          <div className="mx-auto px-4 w-4/5 flex justify-between">
            <button className="px-4 py-2 rounded-lg bg-blue-500 shadow-md text-white hover:bg-blue-600 shadow-blue-700">
              Code
            </button>
            <button className="px-4 py-2 rounded-lg bg-blue-500 shadow-md text-white hover:bg-blue-600 shadow-blue-700">
              Live
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Main;
