import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout/Layout'
import SEO from '../components/Seo/Seo'
import Hero from '../components/Hero/Hero'
import Skills from '../components/Skills/Skills'
import Portfolio from '../components/Portfolio/Portfolio'
import Recommendations from '../components/Recommendations/Recommendations'
import Footer from '../components/Footer/Footer'
export default ({ data }) => (
  <Layout>
    <SEO title={data.cms.seo.title} keywords={[data.cms.seo.keywords]} />
    <Hero aboutAuthor={data.cms.aboutAuthor} />
    <Skills skills={data.cms.aboutAuthor.skills} />
    <Portfolio projectSection={data.cms.projectSection} />
    <Recommendations recommendations={data.cms.recommendations} />
    <Footer footerText={data.cms.seo.footer} />
  </Layout>
)

export const query = graphql`
  query {
    cms {
      seo(where: { id: "cjwmctoo2xn7f08195ekrd7x4" }) {
        footer
        title
        keywords
      }
      aboutAuthor(where: { id: "cjwlpa46egjri0941w113rtan" }) {
        name
        jobtitle
        bio
        heroImage {
          url
          imageFile {
            childImageSharp {
              fixed(width: 144, height: 144) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        cv {
          url
        }
        skills {
          header
          desc
          skillsList
        }
      }
      recommendations(where: { status: PUBLISHED }, orderBy: createdAt_DESC) {
        author
        text
        id
      }
      projectSection(where: { id: "cjwmh8cpfymop0819otcqo109" }) {
        heading
        desc
        project(where: { status: PUBLISHED }) {
          title
          slug
          logo {
            url
          }
        }
      }
    }
  }
`
