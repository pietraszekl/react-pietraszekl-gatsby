import React from 'react'
import { Link } from 'gatsby'
import { makeProjectPath } from '../../utils'
import './project.scss'
class Project extends React.Component {
  render() {
    const project = this.props.project
    console.log('wat', project.title)
    return (
      <Link
        to={makeProjectPath(project)}
        className="four columns img-grayscale-color project-thumbnail"
      >
        <img className="u-max-full-width" src="" alt="" />
        <div className="view-more">{project.title}</div>
      </Link>
    )
  }
}

export default Project
