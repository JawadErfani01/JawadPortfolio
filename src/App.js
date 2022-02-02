import React,{useState} from 'react'
import Header from './components/headers/Header';
import Main from './components/main/Main';
import Skills from './components/main/Skills';
import About from './components/main/About';
import Interest from './components/main/Interest';
import Fotter from './components/fotter/Fotter';


function App() {
  const [light, setlight] = useState(true);
  return (
    <div className={`${light?'':'dark'}`}>
    <div className='bg-slate-800  dark:bg-slate-100 dark:text-slate-900  text-white flex flex-col min-h-screen'>
      <Header setlight={setlight} light={light}/>
      <div  className="w-16 rounded-full mx-28 my-20 mb-4  p-1 z-10 bg-blue-600"></div>
      <Main/>
      <div  className="w-16 rounded-full mx-28 mt-0   p-1 z-10 bg-blue-600"></div>
      <Skills/>
      <div  className="w-16 rounded-full mx-28 mt-0   p-1 z-10 bg-blue-600"></div>
      <About/>
      <div  className="w-16 rounded-full mx-28 mt-0   p-1 z-10 bg-blue-600"></div>
      <Interest/>
      <div  className="w-16 rounded-full mx-28 mt-0   p-1 z-10 bg-blue-600"></div>
<Fotter/>
    </div>
    </div>
  );
}

export default App;
