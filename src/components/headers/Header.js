import React,{useState} from "react";
import { FaGithub, FaLinkedin, FaTwitter,FaSun,FaMoon ,FaMinusCircle} from "react-icons/fa";
function Header({light,setlight}) {
  return (
    <header className="py-2 ">
    
      <div className="flex justify-between items-center p-1 sm:p-2 md:p-3 lg:p-4 shadow-2xl  dark:shadow-slate-300 shadow-slate-900 ">
        <h1 className=" px-4 sm:px-6 lg:px-10 w-1/4 text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-300 dark:text-slate-700"><span className="text-2xl md:text-3xl lg:text-4xl  text-blue-600">J</span>awad</h1>
        <nav className=" hidden lg:block  ">
          <ul className="flex text-gray-300 dark:text-slate-700  items-center justify-center  text-xl">
            <li className="px-16 dark:hover:text-slate-900 hover:text-white">
              <span onClick={()=>window.location.replace('#project')} className=" hover:border-b dark:border-slate-900  p-2 duration-100" >Projects</span>
            </li>
            <li className="px-16 dark:hover:text-slate-900 hover:text-white ">
              <span onClick={()=>window.location.replace('#skills')}  className=" hover:border-b dark:border-slate-900 p-2 duration-100" >Skills</span>
            </li>
            <li className="px-16 dark:hover:text-slate-900 hover:text-white">
              <span onClick={()=>window.location.replace('#about')}  className=" hover:border-b dark:border-slate-900  p-2 duration-100" >About</span>
            </li>
          </ul>
        </nav>
        <div>
        <button
        onClick={()=>setlight(!light)}
            className="text-xl md:text-2xl md:p-3  p-2 m-2 lg:m-0 dark:hover:text-white dark:hover:bg-slate-700  hover:bg-slate-900  hover:rounded-full hover:scale-125 transform duration-500"
          >
            <span>
           {light?<FaSun/>:<FaMoon/>}  
            </span>
          </button>
          <button
            className=" lg:hidden text-xl md:text-2xl md:p-3  p-2 m-2 lg:m-0 dark:hover:text-white dark:hover:bg-slate-700  hover:bg-slate-900  hover:rounded-full hover:scale-125 transform duration-500"
        
          >
            <span>
        <FaMinusCircle/>  
            </span>
          </button>
          </div>
        <section className="lg:flex pl-16 w-1/4 hidden  ">
          <a
            className="text-2xl mx-5  p-3 dark:hover:text-white dark:hover:bg-slate-700 hover:bg-slate-900 hover:rounded-full hover:scale-125 transform duration-500"
            href="#"
          >
            <span>
              <FaGithub />
            </span>
          </a>
          <a
            className="text-2xl mx-5 p-3 dark:hover:text-white dark:hover:bg-slate-700  hover:bg-slate-900 hover:rounded-full hover:scale-125 transform duration-500"
            href="#"
          >
            <span>
              <FaLinkedin />
            </span>
          </a>
          <a
            className="text-2xl mx-5 dark:hover:text-white dark:hover:bg-slate-700  p-3 hover:bg-slate-900 hover:rounded-full hover:scale-125 transform duration-500"
            href="#"
          >
            <span>
              <FaTwitter />
            </span>
          </a>
        </section>
      </div>
      <main className="mx-4 text-gray-300 dark:text-slate-700">
        <div className="p-24 pt-20 pb-10 text-7xl font-semibold">
          <h1 >
            I'm <span className="text-8xl text-blue-600">J</span>awad,
          </h1>
          <h1>a Frontend <span className="opacity-80">Developer</span></h1>
        </div>
        <div className="px-24 text-2xl leading-10 font-thin">
          <h2>I build high-performing & modern applications</h2>
          <h2>with React.js by consuming backend APIs</h2>
          <button onClick={()=>window.location.replace('#fotterlink')} className="px-12 my-6 py-4 text-2xl text-slate-200 bg-slate-700  rounded-full hover:scale-105 duration-300 font-semibold shadow-2xl  hover:bg-slate-600"><span className="text-blue-500  mx-1">Let's</span> Connect</button>
        </div>
      </main>
    </header>
  );
}

export default Header;
