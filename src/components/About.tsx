import React from "react"

const About = () => {
  return (
    <>
      <section id="about" className="min-w-screen min-h-screen flex flex-col items-center justify-center gap-4">
        <article className="h-auto items-center rounded p-4 space-y-4 bg-lightcolor md:w-1/2">
          <h1>Hi, I'm Lisa!</h1>
          <p>
            I'm a software engineer—currently based in southern California—who graduated with a bachelor's degree in Computer Engineering. Looking for opportunities to create meaningful, impactful software!
          </p>
          <p>In my free time, I enjoy making silly animations, learning new creative skills, and video games.
          </p>
          <div className="space-x-2 md:justify-start">
            <button className="border border-basecolor text-basecolor font-bold py-2 px-4 rounded-full hover:border-accentcolor hover:bg-accentcolor hover:text-gray-100">
              <a href="https://github.com/lischeu"><i className="fab fa-github"></i>  GitHub</a>
            </button>
            <button className="border border-basecolor text-basecolor font-bold py-2 px-4 rounded-full hover:border-accentcolor hover:bg-accentcolor hover:text-gray-100">
              <a href="https://www.linkedin.com/in/lischeu"><i className="fab fa-linkedin"></i> LinkedIn</a>
            </button>
          </div>
        </article>
        <h3 className="text-center">Technologies</h3>
        <article className="tool-icons bg-lightcolor p-4 grid grid-cols-4 gap-2 text-center">
          <span><i className="fab fa-html5 fa-2x"></i><br />HTML</span>
          <span><i className="fab fa-css3-alt fa-2x"></i><br />CSS3</span>
          <span><i className="fab fa-js-square fa-2x"></i><br />JavaScript</span>
          <span><i className="fab fa-react fa-2x"></i><br />React.js</span>
          <span><i className="fab fa-sass fa-2x"></i><br />Sass</span>
          <span><i className="devicon-tailwindcss-plain fa-2x"></i><br />Tailwind CSS</span>
          <span><i className="fab fa-java fa-2x"></i><br />Java</span>
          <span><i className="devicon-csharp-plain fa-2x"></i><br />C#</span>
          <span><i className="devicon-postgresql-plain fa-2x"></i><br />PostgreSQL</span>
          <span><i className="devicon-git-plain fa-2x"></i><br />Git</span>
          <span><i className="devicon-photoshop-plain fa-2x"></i><br />Photoshop</span>
          <span><i className="fab fa-figma fa-2x"></i><br />Figma</span>
        </article>
      </section>
    </>
  )
}

export default About
