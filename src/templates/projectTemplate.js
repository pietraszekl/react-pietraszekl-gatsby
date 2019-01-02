import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const cloudinaryUrl =
    'https://res.cloudinary.com/dtxfvmuvk/image/upload/v1528825851/'
  return (
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
          <h1 className="section-heading">{frontmatter.title}</h1>
          <div className="row">
            <div className="twelve columns">
              <div className="project-release">
                <span className="project-release-label">Year: </span>
                <span className="project-release-date">
                  {frontmatter.released}
                </span>
              </div>
            </div>
            <div className="twelve columns">
              <span className="list-heading">Tech stack: </span>
              {frontmatter.tags.map(tag => (
                <span key={tag}>{tag} / </span>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="twelve column">
              <p
                className="section-description"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </div>
          <div className="row">
            <div className="slideshow">
              {frontmatter.screenshots.map(image => (
                <div className="slideshow__slides" key={image}>
                  <img src={cloudinaryUrl + image} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD MM YYYY")
        path
        title
        tags
        released
        screenshots
      }
    }
  }
`
