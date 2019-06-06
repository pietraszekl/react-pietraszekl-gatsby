import React from 'react'
import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'

import SEO from '../components/seo'

import Hero from '../components/hero'
import Skills from '../components/skills'
import Portfolio from '../components/portfolio'
import Recommendations from '../components/recommendations'
const IndexPage = () => (
  <Layout>
    <SEO
      title="Senior Frontend Developer - Remote Gliwice Katowice"
      keywords={[
        `frontend developer`,
        `frontend`,
        `JavaScript`,
        `Remote`,
        `Katowice`,
        `Gliwice`,
      ]}
    />

    <StaticQuery
      query={graphql`
        query PersonDataQuery {
          site {
            siteMetadata {
              aboutData {
                person {
                  photo
                  name
                  title
                  intro
                  specialities
                  btnText
                  connect {
                    icon
                    link
                    name
                  }
                }
                recommendations {
                  id
                  text
                  author
                }
                skills {
                  header
                  intro
                  list
                }
                projects {
                  title
                  intro
                  list {
                    id
                    logo
                    name
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <Hero />
          <Skills skills={data.site.siteMetadata.aboutData.skills} />
          <Portfolio projects={data.site.siteMetadata.aboutData.projects} />
          <Recommendations
            recommendations={data.site.siteMetadata.aboutData.recommendations}
          />
        </>
      )}
    />
  </Layout>
)

export default IndexPage
