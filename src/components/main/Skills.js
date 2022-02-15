import React from "react";

function Skills() {
  return (
    <div id="skills" className="xl:px-28 md:px-12 px-8 my-6  text-gray-300 dark:text-slate-700">
      <h1 className="xl:text-7xl text-4xl sm:text-5xl md:text-6xl  py-6 font-semibold">Technologies</h1>
      <p className="font-serif md:font-semibold xl:text-2xl md:text-xl text-lg pb-6">
        My skills are not confined only to MERN stack but I've worked with
        multiple web technologies
      </p>
      <div className="py-8 shadow-lg">
        <ul className="flex flex-wrap justify-between items-center">
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
