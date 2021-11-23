import React from 'react'
import { projectsData } from "../assets/data"

const Projects = () => {
  return (
    <>
      <div className="bg-dust min-w-screen min-h-screen flex flex-col items-center justify-center space-y-4">
      <h2>Projects</h2>
        {
          projectsData.map((data, key) => {
            if (data.show) {
              return (
                <div key={key} className="md:w-1/2 md:min-h-40 md:flex">
                  <div className="bg-no-repeat bg-center bg-cover bg-dust min-w-screen h-96 md:w-1/2" style={
                    {
                      backgroundImage: `url(${data.screenshot})`
                    }
                  }>

                  </div>
                  <div className="text-center space-y-2 p-4 md:w-1/2">
                    <h3>{data.title}</h3>
                    <div className="space-x-2 space-y-2">
                        {
                          (data.tools)
                            .sort()
                            .map((tool, key) => {
                              return (
                                <span className="inline-block text-navy p-1 bg-gray-100 rounded text-center">{tool}</span>
                            );
                          })
                        }
                    </div>
                    <p className="text-left">
                    {data.description}
                    </p>
                    <div className="space-x-2">
                      {data.repo.length > 0 ? (
                          <button className="bg-rose hover:bg-salmon active:bg-salmon text-gray-100 font-bold py-2 px-4 rounded">
                            <a href={data.repo}>Repository</a>
                          </button>
                        ) : null}
                      {data.preview.length > 0 ? (
                        <button className="bg-rose hover:bg-salmon active:bg-salmon text-gray-100 font-bold py-2 px-4 rounded">
                          <a href={data.preview}>Preview</a>
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
