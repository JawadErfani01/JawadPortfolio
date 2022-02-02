import React from 'react';
import {FaMailBulk,FaWhatsapp,FaGithub,FaLinkedin,FaTwitter} from 'react-icons/fa'
function Fotter() {
  return <div id='about' className='px-24 m-4 my-6 dark:text-slate-900'>
      <hr className='opacity-30 dark:opacity-100 dark:text-slate-700 py-6' />
      
      <div className='mb-6'>
        <h3 className='flex items-center opacity-50 pb-3'><span className='mr-1 text-xl'><FaMailBulk/></span>EMAIL</h3>
        <a className='text-lg opacity-75 font-sans hover:opacity-100' href="mailto:jawad.erfani147@gmial.com" target="_blank">jawad.erfani147@gmail.com</a>
      </div>
      <div className='py-4'>
        <h3 className='flex items-center opacity-50  pb-3'><span className='mr-1 text-xl'><FaWhatsapp/></span>CALL</h3>
        <a className='text-lg opacity-75 font-sans hover:opacity-100' target='_blank' href="tel:+93786741729" >+93-786-741-729</a>
      </div>
     <div className='flex justify-between items-center'><p className='py-6 text-xl font-semibold opacity-75 pb-6 '>Keep Learning and Keep Growing</p>
    
  
     <section id='fotterlink' className="flex pl-16 w-1/4  ">
        
          <a
            className="text-2xl dark:hover:text-white dark:hover:bg-slate-700 mx-2 p-3 hover:bg-slate-900 hover:rounded-full hover:scale-125 transform duration-500"
            href="#"
          >
            <span>
              <FaLinkedin />
            </span>
          </a>
          <a
            className="text-2xl dark:hover:text-white dark:hover:bg-slate-700 animate-ping  hover:animate-none  mx-2 p-3 hover:bg-slate-900 hover:rounded-full hover:scale-125 transform duration-500"
            href="#"
          >
            <span>
              <FaGithub />
            </span>
          </a>
          <a
            className="text-2xl mx-2 dark:hover:text-white dark:hover:bg-slate-700 p-3 hover:bg-slate-900 hover:rounded-full hover:scale-125 transform duration-500"
            href="#"
          >
            <span>
              <FaTwitter />
            </span>
          </a>
        </section>
     </div> 
  </div>;
}

export default Fotter;
