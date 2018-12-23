import React from 'react'
import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'

import Hero from '../components/hero'
import Skills from '../components/skills'
import Portfolio from '../components/portfolio'
import Recommendations from '../components/recommendations'

import { about, skills, projects, recommendations } from '../data/personData'

const IndexPage = () => (
  <Layout>
    <SEO title="LP" keywords={[`frontend`, `JavaScript`]} />
    <Hero person={about} />
    <Skills skills={skills} />
    <Portfolio projects={projects} />
    <Recommendations recommendations={recommendations} />

  </Layout>
)

export default IndexPage
