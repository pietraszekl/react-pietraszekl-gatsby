import React from 'react'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Recommendations from '../components/Recommendations'
import { about, skills, projects, recommendations } from '../data/personData'

const IndexPage = () => (
  <div>
    <Hero person={about} />
    <Skills skills={skills} />
    <Portfolio projects={projects} />
    <Recommendations recommendations={recommendations} />
  </div>
)

export default IndexPage
