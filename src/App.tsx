import { useEffect, useState } from "react"
import SideNavBar from "./Components/SideNavBar"
import About from "./Pages/About"
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";

function App() {
  const[theme,setTheme]=useState<boolean >(false);
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme !== null) {
      setTheme(JSON.parse(storedTheme));
    }
  }, []);

  function changeTheme() {
    const newTheme = !theme;
    setTheme(newTheme);
    localStorage.setItem("theme", JSON.stringify(newTheme));
  }
  return (
    <>
    <main className={`
    ${theme ? 'bg-black bg-opacity-90':'bg-slate-900'}
    leading-relaxed antialiased
    
    selection:bg-teal-300  selection:text-teal-900 `}>
      <div className="font-sans
 
   md:px-12 md:mx-auto min-h-screen md:max-w-screen-xl px-2 py-12 md:py-20 lg:px-24 lg:py-0">
   <div className="">
    <SideNavBar changeTheme={changeTheme}/>
    </div> 
    <div className=" md:w-[40%] md:ml-auto p-4 md:pt-24 lg:w-1/2 lg:py-24 ">
    <About />
      <Experience/>
      <Projects/>
      </div>  </div>
    </main>
    </>
  )
}

export default App
