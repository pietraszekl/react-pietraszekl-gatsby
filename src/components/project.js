import React from 'react'
import Link from 'gatsby-link'
import './project.scss'
class Project extends React.Component {
  render() {
    const { project } = this.props.project
    return (
      <Link
        to={'/projects/' + project.id}
        className="four columns img-grayscale-color project-thumbnail"
      >
        <img
          className="u-max-full-width"
          src={project.logo}
          alt={project.name}
        />
        <div className="view-more">More details</div>
      </Link>
    )
  }
}

export default Project
