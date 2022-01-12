import React from 'react'
import { projectsData } from "../assets/data"

const Projects = () => {
  return (
    <>
      <section id="projects" className="flex flex-col min-w-screen items-center justify-center space-y-32 p-8 bg-lightcolor">
        <h2>Projects</h2>
        {
          projectsData.map((data, key) => {
            if (data.show) {
              return (
                <div key={key} data-aos=
                  {
                    data.id % 2 == 0 ? 'fade-left' : 'fade-right'
                  } className="grid grid-cols-1 md:grid-cols-2 md:w-1/2">
                  <div className="bg-lightcolor flex">
                    <img src={data.screenshot} />
                  </div>
                  <div className="text-center space-y-2 p-4">
                    <h3>{data.title}</h3>
                    <div className="space-x-2 space-y-2">
                      {
                        (data.tools)
                          .sort()
                          .map((tool, key) => {
                            return (
                              <span className="inline-block p-1 border border-dust text-basecolor rounded text-center">{tool}</span>
                            );
                          })
                      }
                    </div>
                    <p className="text-left">
                      {data.description}
                    </p>
                    <div className="space-x-2">
                      {data.repo.length > 0 ? (
                        <button className="border border-basecolor text-basecolor font-bold py-2 px-4 rounded-full hover:border-accentcolor hover:bg-accentcolor hover:text-lightcolor">
                          <a href={data.repo}><i className="fab fa-github"></i> GitHub</a>
                        </button>
                      ) : null}
                      {data.preview.length > 0 ? (
                        <button className="border border-basecolor text-basecolor font-bold py-2 px-4 rounded-full hover:border-accentcolor hover:bg-accentcolor hover:text-lightcolor">
                          <a href={data.preview}><i className="fas fa-seedling"></i> Live Demo</a>
                        </button>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            }
          })
        }
      </section>
    </>
  )
}
export default Projects
