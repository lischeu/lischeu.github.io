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

  return (
    <div className="min-w-full min-h-screen bg-gray-100">
      <header className="min-w-full p-4 text-white fixed font-bold bg-gray-100 z-10">
        <h1 className="float-left">lischeu</h1>
        <nav className="float-right text-2xl space-x-4 text-rose">
          <a href="#about" className="hover:text-salmon">About</a>
          <a href="#projects" className="hover:text-salmon">Projects</a>
        </nav>
      </header>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <footer className="text-center p-4">
        &copy; {year} lischeu
      </footer>
    </div>
  )
}

export default App;

