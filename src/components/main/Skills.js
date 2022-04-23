
import { FaGithub, FaGit, FaReact } from 'react-icons/fa';
import {SiTypescript,SiRedux} from 'react-icons/si'

function Skills() {
  return (
    <div
      id="skills"
      className="xl:px-28 md:px-12  px-4 sm:px-6  text-gray-300 dark:text-slate-700"
    >
      <h1 className="xl:text-7xl text-4xl sm:text-5xl md:text-6xl  py-6 font-semibold">
        Technologies
      </h1>
      <p className="font-serif md:font-semibold xl:text-2xl md:text-xl text-lg pb-6">
        My skills are not confined only to Frontend stack but I've worked with
        multiple web technologies
      </p>
      <div className="py-8 ">
        <ul className="flex flex-wrap justify-between  items-center">
          <li className="text-center mx-10  flex-1 m-2    py-1 px-3 ">
         <FaReact       className="w-12 h-12 rounded-lg my-2 mx-auto"/>
        
          
            <span>React</span>
          </li>
          <li className="text-center mx-10  rounded-lg flex-1 m-2    py-1 px-3">
          <SiRedux  className="w-12 h-12 mx-auto my-2"/>

            <span>Redux</span>
          </li>
          <li className=" mx-10 text-center rounded-lg flex-1 m-2    py-1 px-3">
          <SiTypescript  className="w-12 h-12 mx-auto my-2"/>
            <span>TypeScript</span>
          </li>
          <li className="text-center mx-10  rounded-lg flex-1 m-2    py-1 px-3">
            <img
              src="vue.png"
              alt="git"
              className="w-12 h-12 mx-auto my-2"
            />
            <span>Vue</span>
          </li>
          <li className="text-center mx-10  rounded-lg flex-1 m-2    py-1 px-3">
          <FaGit  className="w-12 h-12 mx-auto my-2"/>
            <span>git</span>
            
          </li>
          <li className="text-center mx-10  rounded-lg flex-1 m-2    py-1 px-3">
          <FaGithub     className="w-12 h-12 mx-auto my-2"/>
          
        
            <span>FaGithub </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
