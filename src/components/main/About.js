import { FaGithub, FaGit, FaReact } from "react-icons/fa";
import { SiTypescript, SiRedux, SiNextdotjs } from "react-icons/si";

function About() {
  return (
    <div
      id="about"
      className="flex content-center items-center flex-col text-center xl:px-28 md:px-12  px-4 sm:px-6  text-gray-300 dark:text-slate-700"
    >
      <h1 className="xl:text-7xl text-4xl sm:text-5xl md:text-6xl  py-6 ">
        Who Am I?
      </h1>
      <img
        src="jawad-erfani.jpg"
        alt="jawad erfani"
        className="rounded-full w-[200px] h-[200px]"
      />
      <div className="xl:text-xl text-lg py-6 text-justify  md:text-center text-gray-300 dark:text-slate-900 tracking-tighter w-full ">
        <p className=" leading-9">
          Hello! I am Jawad from Afghanistan. I graduated from Herat University,
          where I studied Computer Science at the Faculty of Software
          Engineering Department. I am also a self-taught developer who loves a
          challenge and finding solutions to build efficient projects for
          clients and enhance my skill set. I began my web development journey
          in 2019 after succeeding in college and realizing the potential
          opportunities for growth. Gradually increasing my skills, I developed
          a passion for this field, specifically web application development,
          which is something I have always wanted to do.
        </p>

        <p className=" leading-9">
          Check out my projects on GitHub. I mostly share my progress, web
          development tips, and resources on Twitter. Additionally, I am
          available for hire for your projects. Feel free to contact me.
        </p>
      </div>
      <h3 className="text-3xl my-4 ">Skills && Technologies</h3>
      <div className="py-4 ">
        <ul className="flex flex-wrap justify-between  items-center">
          <li className="text-center mx-10  flex-1 m-2 border rounded-xl    py-1 px-3 ">
            <FaReact className="w-12 h-12  my-2 mx-auto" />

            <span className="text-[12px]">React</span>
          </li>
          <li className="text-center mx-10  flex-1 m-2 border rounded-xl     py-1 px-3">
            <SiRedux className="w-12 h-12 mx-auto my-2" />

            <span className="text-[12px]">Redux</span>
          </li>
          <li className=" mx-10 text-center   border rounded-xl   flex-1 m-2    py-1 px-3">
            <SiTypescript className="w-12 h-12 mx-auto my-2" />
            <span className="text-[10px]">TypeScript</span>
          </li>
          <li className="text-center mx-10 border rounded-xl   flex-1 m-2    py-1 px-3">
            <SiNextdotjs className="w-12 h-12 mx-auto my-2" />

            <span className="text-[12px]">NextJS</span>
          </li>
          <li className="text-center mx-10  border rounded-xl   flex-1 m-2    py-1 px-3">
            <FaGit className="w-12 h-12 mx-auto my-2" />
            <span className="text-[12px]">git</span>
          </li>
          <li className="text-center mx-10  border rounded-xl   flex-1 m-2    py-1 px-3">
            <FaGithub className="w-12 h-12 mx-auto my-2" />
            <span className="text-[12px]">Github </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
