import React from "react"

const About = () => {
  return (
    <>
      <div className="min-w-screen min-h-screen flex flex-col items-center justify-center gap-4">
        <div className=" rounded p-4 space-y-4 bg-dust md:w-1/2">
          <h2><i className="fas fa-bullhorn"></i> Hi, I'm Lisa!</h2>
          <p>
            I'm currently based in southern California and graduated with a bachelor's degree in Computer Engineering. Looking for opportunities to create meaningful, impactful software!
          </p>
          <p>In my free time, I enjoy making silly animations, learning new creative skills, and video games.
          </p>
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <button className="border border-rose text-rose font-bold py-2 px-4 rounded-full hover:border-salmon hover:bg-salmon hover:text-gray-100">
              <a href="https://github.com/lischeu"><i className="fab fa-github-alt"></i>  GitHub</a>
            </button>
            <button className="border border-rose text-rose font-bold py-2 px-4 rounded-full hover:border-salmon hover:bg-salmon hover:text-gray-100">
              <a href="https://www.linkedin.com/in/lischeu"><i className="fab fa-linkedin"></i> LinkedIn</a>
            </button>
          </div>
          
          
        </div>
        <h3 className="text-center">Technologies</h3>
        <div className="md:w-1/2 tool-icons grid gap-4 grid-cols-5 justify-evenly text-center">
            <span><i className="fab fa-html5 fa-2x"></i><br />HTML</span>
            <span><i className="fab fa-css3-alt fa-2x"></i><br />CSS3</span>
            <span><i className="fab fa-js-square fa-2x"></i><br />JavaScript</span>
            <span><i className="fab fa-react fa-2x"></i><br />React.js</span>
            <span><i className="fab fa-sass fa-2x"></i><br />Sass</span>
            <span><i className="fab fa-aws fa-2x"></i><br />AWS</span>
            <span><i className="fab fa-java fa-2x"></i><br />Java</span>
            <span><i className="devicon-csharp-plain fa-2x"></i><br />C#</span>
            <span><i className="fab fa-sass fa-2x"></i><br />Sass</span>
            <span><i className="fab fa-figma fa-2x"></i><br />Figma</span>
          </div>
      </div>
    </>
  )
}

export default About
