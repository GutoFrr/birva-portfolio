import React from 'react'
import projectsData from './projectsData'
import Container from './styles'

const Projects = () => {
  return (
    <Container>
      <div className="works-projects">
        {projectsData.map((item, key) => (
          <div className="project" key={key}>
            <div className="overlay"></div>
            <div className="image"></div>
            <div className="project-content">
              <div className="content">
                <h5>{item.title}</h5>
                <h6>{item.role}</h6>
                <hr />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Projects
