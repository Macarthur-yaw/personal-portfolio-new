import {projects} from '../Constant/Constant'

const Projects = () => {
    return ( 

<>
<div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects
</h2></div>
 <div className='mt-16' id='project'>
          
          {
                projects.map((content)=>(
                    <div key={content.id} className=" p-2 flex flex-row mb-12 items-start gap-4" >

    <img
    loading='lazy'
   width='200'
   height='50'
    src={content.imgUrl} alt='project description' className='rounded border-2  border-slate-200/10 '/>

    <div className="z-10 sm:col-span-6">
    <h3 className="font-medium leading-snug text-slate-200">
      <div>
        <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://upstatement.com" target="_blank" rel="noreferrer noopener" aria-label="Lead Engineer at Upstatement (opens in a new tab)">
          {/* <span className=" -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span> */}
          <span className="text-[1rem]">{content.title} · <span className="inline-block"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg></span></span>
        </a>
      </div>
    </h3>
<h2 className="mt-2 text-sm leading-normal text-slate-400 text-[1rem]">{content.description}</h2>
<span>
    {/* {content.tools.map((content)=>(
        <div className="" >
 <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
      <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">{content.tool1}</div></li>
      <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">{content.tool2}</div></li>
      <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">{content?.tool3}</div></li>
   </ul>
        </div>
    ))} */}
</span>
        </div>

                        </div>
                ))
            }
  


    </div>
    </>
     );
}
 
export default Projects;