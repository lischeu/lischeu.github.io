import React from 'react'
import { projectsData } from "../assets/data"

const Projects = () => {
  return (
    <>
      <div id="projects" className="flex flex-col min-w-screen items-center justify-center space-y-32 p-8 bg-dust">
        <h2>Projects</h2>
        {
          projectsData.map((data, key) => {
            if (data.show) {
              return (
                <div data-aos={data.aos} key={key} className="grid grid-cols-1 md:grid-cols-2 md:w-1/2">
                  <div className="bg-dust flex">
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
                              <span className="inline-block text-navy p-1.5 bg-gray-100 rounded text-center">{tool}</span>
                            );
                          })
                      }
                    </div>
                    <p className="text-left">
                      {data.description}
                    </p>
                    <div className="space-x-2">
                      {data.repo.length > 0 ? (
                        <button className="border border-rose text-rose font-bold py-2 px-4 rounded-full hover:border-salmon hover:bg-salmon hover:text-gray-100">
                          <a href={data.repo}><i className="fab fa-github-alt"></i> GitHub</a>
                        </button>
                      ) : null}
                      {data.preview.length > 0 ? (
                        <button className="border border-rose text-rose font-bold py-2 px-4 rounded-full hover:border-salmon hover:bg-salmon hover:text-gray-100">
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
      </div>
    </>
  )
}
export default Projects
