
// import { useState } from "react";

const SideNavBar = () => {
return ( 
      <nav className=" lg:top-0 lg:flex lg:max-h-screen lg:flex-col p-4 lg:justify-between lg:py-24 md:h-screen  md:p-10 md:w-[40%]  md:fixed">
            
            <div id="header">
       <span className="flex flex-row items-center justify-between">
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                    MacArthur Kevin
                </h1>

                {/* <button onClick={()=>changeTheme()}>
                    Black
                </button> */}
</span>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-[20px] text-[#E2E8F0]  sm:text-xl">
                    Frontend Engineer
                </h2>

                <h3 className="mt-4 md:mx-w-xs leading-normal text-[16px] text-[#94A3BB]">
                I create digital experiences that are meticulously crafted, captivating, and easily accessible

                </h3>
            </div>

            <div id="main-nav" className="lg:block hidden">
<ul className="mt-16 md:w-max list-none ">
<li><a className="group flex items-center py-3 active" href="#about"><span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span></a></li>

<li><a className="group flex items-center py-3 active" href="#experience"><span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span></a></li>

<li><a className="group flex items-center py-3 active" href="#project"><span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects</span></a></li>

</ul>
            </div>

            <div id="social-icons">

<ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
    <li className="mr-5 text-xs shrink-0"><a className="block hover:text-slate-200 text-slate-600" href="https://github.com/Macarthur-yaw" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub"><span className="sr-only">GitHub</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg></a></li>
<li className="mr-5 text-xs shrink-0"><a className="block text-slate-600 hover:text-slate-200" href="https://www.linkedin.com/in/yaw-macarthur81/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn"><span className="sr-only">LinkedIn</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg></a></li>
<li className="mr-5 text-xs shrink-0"><a className="block text-slate-600 hover:text-slate-200" href="https://twitter.com/kevin_yaw_mac" target="_blank" rel="noreferrer noopener" aria-label="Twitter (opens in a new tab)" title="Twitter"><span className="sr-only">Twitter</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" fill="none" className="h-5 w-5" aria-hidden="true"><path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="currentColor"></path></svg></a></li>
<li className="mr-5 text-xs shrink-0">
  <a className="block text-slate-600 hover:text-slate-200" href="mailto:arthurkevin1260@gmail.com" aria-label="Gmail (opens in your default email client)" title="Gmail">
    <span className="sr-only">Gmail</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="1.33em" height="1em" viewBox="0 0 256 193">
      <path fill="#4A5568" d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z"/>
      <path fill="#4A5568" d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z"/>
      <path fill="#4A5568" d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"/>
      <path fill="#4A5568" d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z"/>
      <path fill="#4A5568" d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z"/>
    </svg>
  </a>
</li>



</ul>
            </div>
        </nav>
        
     );
}
 
export default SideNavBar;