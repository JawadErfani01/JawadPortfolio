import React from 'react';
import {FaMailBulk,FaWhatsapp,FaGithub,FaLinkedin,FaTwitter} from 'react-icons/fa'
function Fotter() {
  return (
    <div id="about" className="xl:px-28   px-4 sm:px-6   md:px-12 dark:text-slate-900">
      <hr className="opacity-30 dark:opacity-100 dark:text-slate-700 py-6" />
 
      <div className="xl:mb-6 md:mb-4 mb-2">
        <h3 className="flex items-center opacity-50 pb-3 text-sm md:text-lg   ">
          <span className="mr-1 text-sm md:text-lg xl:text-xl ">
            <FaMailBulk />
          </span>
          EMAIL
        </h3>
        <a
          className="text-sm lg:text-lg opacity-75 font-sans hover:opacity-100"
          href="mailto:jawad.erfani147@gmial.com"
          target="_blank"
        >
          jawad.erfani147@gmail.com
        </a>
      </div>
      <div className="lg:py-4 py-2">
        <h3 className="flex items-center opacity-50 text-sm lg-text-lg  pb-3">
          <span className="mr-1 text-sm lg:text-lg">
            <FaWhatsapp />
          </span>
          CALL
        </h3>
        <a
          className="text-sm  lg:text-lg  opacity-75 font-sans hover:opacity-100"
          target="_blank"
          href="tel:+93786741729"
        >
          +93-786-741-729
        </a> 
        <br/>
         <a
          className="text-sm lg:text-lg  opacity-75 font-sans hover:opacity-100"
          target="_blank"
          href="tel:+93786741729"
        >
          +93-797-302-909
        </a>
      </div>
      <div className="lg:flex justify-between  items-center">
        <p className="py-6 text-xl text-center font-semibold opacity-75 pb-6 ">
          Keep Learning and Keep Growing
        </p>

        <section
          id="fotterlink"
          className="flex lg:pl-16 py-6 items-ceneter justify-center "
        >
          <a
            className="text-2xl dark:hover:text-white dark:hover:bg-slate-700 mx-2 p-3 hover:bg-slate-900 hover:rounded-full hover:scale-125 transform duration-500"
            href="https://www.linkedin.com/in/jawad-erfani-610197195/"
            target="_blank"

          >
            <span>
              <FaLinkedin />
            </span>
          </a>
          <a
            className="text-2xl dark:hover:text-white dark:hover:bg-slate-700 animate-ping  hover:animate-none  mx-2 p-3 hover:bg-slate-900 hover:rounded-full hover:scale-125 transform duration-700"
            href="https://github.com/JawadErfani01"
            target="_blank"

          >
            <span>
              <FaGithub />
            </span>
          </a>
          <a
            className="text-2xl mx-2 dark:hover:text-white dark:hover:bg-slate-700 p-3 hover:bg-slate-900 hover:rounded-full hover:scale-125 transform duration-500"
            href="https://twitter.com/JawadErfani01"
            target="_blank"
          >
            <span>
              <FaTwitter />
            </span>
          </a>
        </section>
      </div>
    </div>
  );
}

export default Fotter;
