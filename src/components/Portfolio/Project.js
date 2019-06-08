import React from 'react'
import { Link } from 'gatsby'
import { makeProjectPath } from '../../utils'
import './project.scss'
class Project extends React.Component {
  render() {
    const project = this.props.project
    return (
      <Link
        to={makeProjectPath(project)}
        className="four columns img-grayscale-color project-thumbnail"
      >
        <img className="u-max-full-width" src={project.logo.url} alt="" />
        <div className="view-more">More details</div>
      </Link>
    )
  }
}

export default Project
