import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout/Layout'
import SEO from '../components/Seo'
import Hero from '../components/Hero/Hero'
import Skills from '../components/Skills/Skills'
import Portfolio from '../components/Portfolio/Portfolio'
import Recommendations from '../components/Recommendations/Recommendations'
import Footer from '../components/Footer/Footer'
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
    <Footer footerText={data.cms.seo.footer} />
    {console.log(data.cms.seo.footer)}
  </Layout>
)

export const query = graphql`
  query($id: ID = "cjwlpa46egjri0941w113rtan") {
    cms {
      seo(where: { id: "cjwmctoo2xn7f08195ekrd7x4" }) {
        footer
        title
        keywords
      }
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
        id
      }
      projects(where: { status: PUBLISHED }, orderBy: createdAt_DESC) {
        title
        createdAt
        slug
      }
    }
  }
`
