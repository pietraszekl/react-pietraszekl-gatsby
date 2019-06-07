import React from 'react'

import Project from './Project'
import './portfolio.scss'

const Portfolio = ({ projects }) => {
  console.log('projects', projects)

  const ProjectsList = projects.map((project, i) => (
    <Project key={i} project={project} />
  ))

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-heading">Projects section Title</h2>
        <p className="section-description">Section intro</p>
        <div className="row">{ProjectsList}</div>
      </div>
    </section>
  )
}

export default Portfolio
