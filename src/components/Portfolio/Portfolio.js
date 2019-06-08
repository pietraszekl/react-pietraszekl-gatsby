import React from 'react'

import Project from './Project'
import './portfolio.scss'

const Portfolio = ({ projectSection: { heading, desc, project } }) => {
  const ProjectsList = project.map((item, i) => (
    <Project key={i} project={item} />
  ))

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-heading">{heading}</h2>
        <p className="section-description">{desc}</p>
        <div className="row">{ProjectsList}</div>
      </div>
    </section>
  )
}

export default Portfolio
