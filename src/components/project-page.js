import { graphql, Link } from 'gatsby'
import React from 'react'
import Image from 'gatsby-image'
import SEO from '../components/seo'

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
                  <span className="project-release-label">Year: </span>
                  <span className="project-release-date">date released</span>
                </div>
              </div>
              <div className="twelve columns">
                <span className="list-heading">Tech stack: </span>
                {project.tags}
              </div>
            </div>
            <div className="row">
              <div className="twelve column">
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
                {project.projectImage &&
                  project.projectImage.imageFile &&
                  project.projectImage.imageFile.childImageSharp && (
                    <div className="slideshow__slides">
                      <Image
                        fixed={
                          project.projectImage.imageFile.childImageSharp.fixed
                        }
                      />
                    </div>
                  )}
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
        createdAt
        tags
        desc
        link
        projectImage {
          url
          imageFile {
            childImageSharp {
              fixed {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`
