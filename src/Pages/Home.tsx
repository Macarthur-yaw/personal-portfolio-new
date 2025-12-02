import SideNavBar from "../Components/SideNavBar"
import About from "./About"
import Blogs from "./Blogs"
import Experiences from "./Experience"
import Projects from "./Projects"


function Home() {
  
  return (
    <main className="bg-[#1c1917] leading-relaxed antialiased selection:bg-teal-300 selection:text-teal-900">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          
          {/* Sidebar - Fixed on larger screens */}
          <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-2">
            <SideNavBar />
          </div>
          
          {/* Main Content - Scrollable */}
          <div className="pt-24 lg:w-1/2 lg:py-24">
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <About />
            </section>
            
            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <Experiences />
            </section>
            
            <section id="project" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <Projects />
            </section>
            
            <section id="blogs" className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24">
            <Blogs/>
            </section>
          </div>
          
        </div>
      </div>
    </main>
  )
}

export default Home