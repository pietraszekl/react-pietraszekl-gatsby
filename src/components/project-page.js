import { graphql, Link } from 'gatsby'
import React from 'react'
import Image from 'gatsby-image'
import SEO from './Seo/Seo'
import dateformat from 'dateformat'
export default ({ data }) => {
  const project = data.cms.project

  return (
    <>
      <SEO title={project.title} />
      <div>
        <header className="project-header">
          <div className="container">
            <span className="navigation-header-title">Projects</span>
            <Link to="/" className="navigation-button-back" href="/">
              <span className="icon icon-close">×</span>
            </Link>
          </div>
        </header>
        <section className="section project">
          <div className="container">
            <h1 className="section-heading">{project.title}</h1>
            <div className="row">
              <div className="twelve columns">
                <div className="project-release">
                  <span className="project-release-label">Released: </span>
                  <span className="project-release-date">
                    {dateformat(project.released, `mediumDate`)}
                  </span>
                </div>
              </div>
              <div className="twelve columns">
                <span className="list-heading">Tech stack: </span>
                {project.tags}
              </div>
            </div>
            <div className="row">
              <div className="twelve column">
                <span className="list-heading">About: </span>
                <div
                  className="section-description"
                  dangerouslySetInnerHTML={{ __html: project.desc }}
                />
                <a href={project.link} className="button">
                  Visit project
                </a>
              </div>
            </div>
            <div className="row">
              <div className="slideshow">
                {project.projectImage.map((image, i) => (
                  <div key={i} className="slideshow__slides">
                    <Image
                      fluid={image.imageFile.childImageSharp.fluid}
                      alt={`${project.title} ${i}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export const query = graphql`
  query($blogId: ID!) {
    cms {
      project(where: { id: $blogId }) {
        title
        released
        tags
        desc
        link
        projectImage {
          url
          imageFile {
            childImageSharp {
              fluid(maxWidth: 960, maxHeight: 960) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
