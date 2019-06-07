import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/Hero'
import Skills from '../components/skills'
import Portfolio from '../components/portfolio'
import Recommendations from '../components/recommendations'
export default ({ data }) => (
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

    <Hero aboutAuthor={data.cms.aboutAuthor} />
    <Skills skills={data.cms.aboutAuthor.skills} />
    <Portfolio projects={data.cms.projects} />
    <Recommendations recommendations={data.cms.recommendations} />
  </Layout>
)

export const query = graphql`
  query($id: ID = "cjwlpa46egjri0941w113rtan") {
    cms {
      aboutAuthor(where: { id: $id }) {
        name
        jobtitle
        bio
        skills {
          header
          desc
        }
      }
      recommendations(where: { status: PUBLISHED }, orderBy: createdAt_DESC) {
        author
        text
      }
      projects(where: { status: PUBLISHED }, orderBy: createdAt_DESC) {
        title
        createdAt
        slug
      }
    }
  }
`
