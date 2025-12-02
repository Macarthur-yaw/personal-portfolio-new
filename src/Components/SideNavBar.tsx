import { useState, useEffect } from "react";

const SideNavBar = () => {
  const [activeSection, setActiveSection] = useState("about");

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "project", label: "Projects" },
    { id: "blogs", label: "Blog" }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Macarthur-yaw",
      icon: <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />,
      viewBox: "0 0 16 16",
      size: "h-6 w-6"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/yaw-macarthur81/",
      icon: <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />,
      viewBox: "0 0 24 24",
      size: "h-6 w-6"
    },
    {
      name: "Twitter",
      href: "https://twitter.com/kevin_yaw_mac",
      icon: <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="currentColor" />,
      viewBox: "0 0 1200 1227",
      size: "h-5 w-5"
    },
    {
      name: "Gmail",
      href: "mailto:arthurkevin1260@gmail.com",
      icon: <>
        <path fill="currentColor" d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z"/>
        <path fill="currentColor" d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z"/>
        <path fill="currentColor" d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"/>
        <path fill="currentColor" d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z"/>
        <path fill="currentColor" d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z"/>
      </>,
      viewBox: "0 0 256 193",
      size: "h-5 w-5"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between lg:py-12 p-4 md:h-screen md:p-10 md:w-[70%]   md:fixed">
      {/* Header */}
    <div> 
  <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-200">
    MacArthur Kevin
  </h1>
  
  <h2 className="mt-3 text-lg sm:text-xl font-medium text-slate-200">
    Software Engineer
  </h2>

  <p className="mt-4 text-slate-400 leading-normal">
    I create software that solves real problems and brings ideas to life. I enjoy building applications that are efficient, user-friendly, and impactful.
  </p>
</div>


      {/* Navigation */}
      <nav className="hidden lg:block">
        <ul className="mt-16 space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`}
                className="group flex items-center py-3"
              >
                <span 
                  className={`mr-4 h-px transition-all ${
                    activeSection === item.id 
                      ? "w-16 bg-slate-200" 
                      : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
                  }`}
                />
                <span 
                  className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                    activeSection === item.id 
                      ? "text-slate-200" 
                      : "text-slate-500 group-hover:text-slate-200"
                  }`}
                >
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Links */}
      <ul className="ml-1 mt-8 flex items-center gap-5">
        {socialLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              target={link.name !== "Gmail" ? "_blank" : undefined}
              rel={link.name !== "Gmail" ? "noreferrer noopener" : undefined}
              className="block text-slate-600 hover:text-slate-200 transition-colors"
              aria-label={`${link.name} (opens in ${link.name === "Gmail" ? "your default email client" : "a new tab"})`}
              title={link.name}
            >
              <span className="sr-only">{link.name}</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox={link.viewBox} 
                fill="currentColor" 
                className={link.size}
                aria-hidden="true"
              >
                {link.icon}
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNavBar;