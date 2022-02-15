import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

function Dropdown() {
  return (
    <div className="lg:hidden bg-slate-800 dark:bg-slate-200 shadow-xl dark:shadow-slate-300 shadow-slate-900 ">
      <section className="flex justify-end py-2">
        <a
          className="text-xl mx-2  p-2 dark:hover:text-white dark:hover:bg-slate-700 hover:bg-slate-900 hover:rounded-full hover:scale-125 transform duration-500"
          href="#"
        >
          <span>
            <FaGithub />
          </span>
        </a>
        <a
          className="text-xl mx-2 p-2 dark:hover:text-white dark:hover:bg-slate-700  hover:bg-slate-900 hover:rounded-full hover:scale-125 transform duration-500"
          href="#"
        >
          <span>
            <FaLinkedin />
          </span>
        </a>
        <a
          className="text-xl mx-2 dark:hover:text-white dark:hover:bg-slate-700  p-2 hover:bg-slate-900 hover:rounded-full hover:scale-125 transform duration-500"
          href="#"
        >
          <span>
            <FaTwitter />
          </span>
        </a>
      </section>
      <nav className=" pb-4">
        <ul className=" text-gray-300 dark:text-slate-700  text-center  text-md">
          <li className="my-4 mt-0 dark:hover:text-slate-900 hover:text-white">
            <span
              onClick={() => window.location.replace("#project")}
              className=" hover:border-b dark:border-slate-900  p-2 duration-100"
            >
              Projects
            </span>
          </li>
          <li className="my-4 dark:hover:text-slate-900 hover:text-white ">
            <span
              onClick={() => window.location.replace("#skills")}
              className=" hover:border-b dark:border-slate-900 p-2 duration-100"
            >
              Skills
            </span>
          </li>
          <li className="my-3 dark:hover:text-slate-900 hover:text-white">
            <span
              onClick={() => window.location.replace("#about")}
              className=" hover:border-b dark:border-slate-900  p-2 duration-100"
            >
              About
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Dropdown;
