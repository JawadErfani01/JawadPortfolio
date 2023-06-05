import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contact"
      className="xl:px-28 md:px-12 text-center sm:text-left  px-4  sm:px-6 "
    >
      <section className="flex flex-col  md:flex-row  justify-between items-center">
        <div className="w-2/3  md:w-2/5 ">
          <h2 className="text-2xl font-bold">Contact Me</h2>

          <i className="flex items-center text-lg gap-2 my-6">
            <FaEnvelope /> jawad.erfani147@gmail.com
          </i>

          <i className="flex items-center text-lg gap-2 my-3">
            <FaWhatsapp />
            0786741729
          </i>

          <div className="flex  items-center  ">
            <a href="https://github.com/JawadErfani01" target="_blank">
              <i className="text-2xl mr-4 block  p-3 bg-slate-600 rounded-full  dark:hover:text-white dark:hover:bg-slate-700 hover:bg-slate-800 hover:rounded-full hover:scale-125 transform duration-500">
                <FaGithub />
              </i>
            </a>

            <a
              href="https://www.linkedin.com/in/jawad-erfani-610197195/"
              target="_blank"
            >
              <i className="text-2xl mx-4 block  p-3 bg-slate-600 rounded-full  dark:hover:text-white dark:hover:bg-slate-700 hover:bg-slate-800 hover:rounded-full hover:scale-125 transform duration-500">
                <FaLinkedin />
              </i>
            </a>
            <a href="https://twitter.com/JawadErfani01" target="_blank">
              <i className="text-2xl mx-4 block  p-3 bg-slate-600 rounded-full  dark:hover:text-white dark:hover:bg-slate-700 hover:bg-slate-800 hover:rounded-full hover:scale-125 transform duration-500">
                <FaTwitter />
              </i>
            </a>
            <a href="https://telegram.com/JawadErfani01" target="_blank">
              <i className="text-2xl mx-4 block  p-3 bg-slate-600 rounded-full  dark:hover:text-white dark:hover:bg-slate-700 hover:bg-slate-800 hover:rounded-full hover:scale-125 transform duration-500">
                <FaTelegram />
              </i>
            </a>
          </div>

          <a href="assets/files/Jawad Erfani.pdf" download="Jawad Erfani">
            <button className="px-2 md:py-4 py-2 my-10  bg-gradient-to-l from-slate-800 via-slate-800  dark:via-blue-300 dark:bg-slate-300 dark:from-blue-400  dark:text-gray-700  w-full  md:w-2/5   text-lg md:text-xl text-slate-200 bg-slate-700  rounded-xl hover:scale-105 duration-300  shadow-2xl  hover:bg-slate-500 dark:hover:bg-slate-600">
              Download CV
            </button>
          </a>
        </div>

        <form
          className="text-center  md:text-left  md:w-3/5 w-4/5 mt-10"
          action="#"
          method="post"
        >
          <input
            type="text"
            placeholder="Your Name"
            id="name"
            className="p-3 px-5
            rounded-md
            border-none
            mb-4
            w-11/12
            text-base
            bg-black
            text-white"
            required
            name="name"
          />
          <br />
          <br />

          <input
            type="email"
            id="email"
            required
            className="p-3 px-5
            rounded-md
            border-none
            mb-4
            w-11/12
            text-base
          mx-auto
            bg-black
            text-white"
            placeholder="Your Email"
            name="email"
          />
          <br />
          <br />

          <textarea
            id="message"
            placeholder="Your Message"
            rows="5"
            className="p-3 px-5
            rounded-md
            border-none
            mb-4
            w-11/12
            text-base
            bg-black
            text-white"
            name="message"
            spellcheck="true"
          ></textarea>
          <br />
          <br />
          <input
            className=" bg-black  text-white py-3 
          px-8 
          rounded-md 
          border-none 
          shadow-md 
          cursor-pointer 
          transition-all 0.2s linear   hover:bg-slate-800
          hover:transform: scale-98"
            type="submit"
            value="Send Email"
          />
        </form>
      </section>
    </div>
  );
};

export default Contact;
