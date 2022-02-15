import React from "react";

function About() {
  return (
    <div id="about" className="xl:px-28 md:px-12 px-8 my-4 text-gray-300 dark:text-slate-700">
      <h1 className="xl:text-7xl text-4xl sm:text-5xl md:text-6xl    ">About Me</h1>
      <div className="xl:text-2xl text-lg py-6   font-medium text-justify lg:leading-10 leading-8 w-full md:w-4/5">
        <p>
          Hello! I'm Jawad from Afghanistan. I'm a self taught developer,
          building efficient projects both for clients and to enhance my
          skillset. I started my web development journey after pandemic in 2020
          by realizing the potential & growth opportunities. Later, while
          gradually enhancing my skills, I got my passion in this field. Web app
          development is something that I always wanted to do.
        </p> 
        <p className="xl:py-8 py-4">I'm a kind of person who doesn't stop unless explore something. Therefore, I keep exploring multiple methods of building web applications. Now, I feel more confident to build full scale applications and to solve business problems.</p>
      <p >Check out my projects on GitHub and I mostly share about my progress and web development tips and resoruces on Twitter. I'm also available to hire for your projects. Feel free to contact me.</p>
      </div>
    </div>
  );
}

export default About;
