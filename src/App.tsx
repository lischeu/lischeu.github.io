import React, { useEffect } from "react"

import "./App.css"
import About from "./components/About"
import Projects from "./components/Projects"
import AOS from "aos";
import "aos/dist/aos.css";

let current = new Date();
let year = current.getFullYear();

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  function showNavigation() {
    const mobileNavigation = document.getElementById("mobile-navi")
    mobileNavigation.classList.toggle("hidden")
  }

  return (
    <div className="min-w-full min-h-screen bg-gray-100 overflow-x-hidden">
      <header className="flex flex-wrap gap-y-2 p-4 justify-end min-w-full text-white fixed font-bold bg-gray-100 z-10">
        <nav className="text-2xl space-x-4 text-rose hidden md:block">
          <a href="#about" className="hover:text-salmon"><i className="fas fa-user"></i> About</a>
          <a href="#projects" className="hover:text-salmon"><i className="fas fa-paint-brush"></i> Projects</a>
        </nav>
        <nav className="text-2xl text-rose block transform -rotate-90 select-none md:hidden"><span onClick={showNavigation}>|||</span>
        </nav>
        <div className="basis-full min-w-full h-0 block md:hidden"></div>
        <div id="mobile-navi" className="transition ease-in-out duration-500 p-2 min-w-full border-solid text-xl text-center text-rose hidden xl:hidden md:h-0">
          <span className="hover:text-salmon"><a href="#about"><i className="fas fa-user"></i> About</a></span><br />
          <a href="#projects" className="hover:text-salmon"><i className="fas fa-paint-brush"></i> Projects</a>
        </div>
      </header>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <footer className="text-center p-4">
        &copy; {year} Lisa Cheung
        <p>Built with <i className="fab fa-react"></i> React.js + Tailwind CSS</p>
        
      </footer>
    </div >
  )
}

export default App;

