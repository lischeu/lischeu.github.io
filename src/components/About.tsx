import React from "react"

const About = () => {
  return (
    <>
      <div className="min-w-screen min-h-screen flex items-center justify-center">
        <div className="w-3/4 rounded p-4 space-y-4 bg-dust md:w-1/2">
          <h2>Hi, I'm Lisa!</h2>
          <p>
            I graduated from Cal Poly Pomona with a bachelors in Computer Engineering and am always learning new technologies! In my free time, I enjoy making silly animations and video games.
          </p>
          <div className="space-x-2 space-y-2">
            <button className="bg-rose hover:bg-salmon active:bg-salmon text-gray-100 font-bold py-2 px-4 rounded">
              <a href="https://github.com/lischeu">GitHub</a>
            </button>
            <button className="bg-rose hover:bg-salmon active:bg-salmon text-gray-100 font-bold py-2 px-4 rounded">
              <a href="https://www.linkedin.com/in/lischeu">LinkedIn</a>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
