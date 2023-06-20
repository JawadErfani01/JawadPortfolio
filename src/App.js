import React, { useState } from "react";
import Header from "./components/headers/Header";
import Projects from "./components/main/Projects";
import About from "./components/main/About";
import Interest from "./components/main/Interest";
import Footer from "./components/footer/Footer";
import "./styles/App.css";
import Contact from "./components/main/Contact";
import GoToTopButton from "./components/main/GoToTopBtn";

function App() {
  const [light, setlight] = useState(true);
  return (
    <div className={`${light ? "" : "dark"} `}>
      <div className=" bg-slate-900  dark:bg-white dark:text-slate-900  text-white flex flex-col min-h-screen">
        <Header setlight={setlight} light={light} />
        <div className="md:w-12 lg:w-14 w-8 rounded-full md:mx-8  xl:mx-28 mx-5 md:my-12 my-4   h-0.5 md:h-1 lg:h-1.3 z-10 bg-gradient-to-bl from-slate-400  bg-blue-600"></div>
        <Projects />
        <div className="md:w-12 lg:w-14 w-8 rounded-full md:mx-8 xl:mx-28 mx-5 md:my-12 my-8   h-0.5 md:h-1 lg:h-1.3 z-10 bg-gradient-to-bl from-slate-400  bg-blue-600"></div>
        <About />
        <div className="md:w-12 lg:w-14 w-8 rounded-full md:mx-8 xl:mx-28 mx-5 md:my-12 my-8   h-0.5 md:h-1 lg:h-1.3 z-10 bg-gradient-to-bl from-slate-400  bg-blue-600"></div>
        <Interest />
        <div className="md:w-12 lg:w-14 w-8 rounded-full md:mx-8 xl:mx-28 mx-5 md:my-12 my-8   h-0.5 md:h-1 lg:h-1.3 z-10 bg-gradient-to-bl from-slate-400  bg-blue-600"></div>
        <Contact />
        <div className="md:w-12 lg:w-14 w-8 rounded-full md:mx-8 xl:mx-28 mx-5 md:my-12 my-8   h-0.5 md:h-1 lg:h-1.3 z-10 bg-gradient-to-bl from-slate-400  bg-blue-600"></div>
        <GoToTopButton />
        <Footer />
      </div>
    </div>
  );
}

export default App;
