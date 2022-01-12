import React, { useEffect } from "react"

import "./App.css";
import About from "./components/About";
import Projects from "./components/Projects";
import AOS from "aos";
import "aos/dist/aos.css";
import Navigation from "./components/Navigation";

let current = new Date();
let year = current.getFullYear();

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <main className="w-full bg-gray-100 overflow-x-hidden">
      <Navigation />
      <About />
      <Projects />
      <footer className="text-center p-4">
        &copy; {year} Lisa Cheung
        <p>Built with <i className="fab fa-react"></i> React.js + <i className="devicon-tailwindcss-plain"></i> Tailwind CSS</p>

      </footer>
    </main >
  )
}

export default App;

