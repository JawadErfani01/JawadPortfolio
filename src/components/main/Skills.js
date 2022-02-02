import React from "react";

function Skills() {
  return (
    <div id="skills" className="px-28 m-4 text-gray-200 dark:text-slate-700">
      <h1 className="text-6xl py-6 font-semibold">Technologies</h1>
      <p className="font-semibold text-2xl pb-6">
        My skills are not confined only to MERN stack but I've worked with
        multiple web technologies
      </p>
      <div className="py-8 shadow-lg">
        <ul className="flex  justify-between items-center">
          <li className="text-center mx-10 ">
            <img src="logo512.png" alt="react" className="w-12 h-12 my-2" />
            <span>React</span>
          </li>
          <li className="text-center mx-10">
            <img src="logo512.png" alt="react" className="w-12 h-12 mx-auto my-2" />
            <span>Redux</span>
          </li>
          <li className=" mx-10">
            <img src="logo512.png" alt="react" className="w-12 h-12 mx-auto my-2" />
            <span>TypeScript</span>
          </li>
          <li className="text-center mx-10">
            <img src="logo512.png" alt="react" className="w-12 h-12 mx-auto my-2" />
            <span>Html</span>
          </li>
          <li className="text-center mx-10">
            <img src="logo512.png" alt="react" className="w-12 h-12 mx-auto my-2" />
            <span>javascript</span>
          </li>
          <li className="text-center mx-10">
            <img src="logo512.png" alt="react" className="w-12 h-12 mx-auto my-2" />
            <span>Css</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
