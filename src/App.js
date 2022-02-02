import Header from './components/headers/Header';
import Main from './components/main/Main';

function App() {
  return (
    <div className="bg-slate-800 text-white h-full">
      <Header/>
      <div  className="w-16 rounded-full mx-28 mt-12   p-1 z-10 bg-green-600"></div>
      <Main/>
    </div>
  );
}

export default App;
