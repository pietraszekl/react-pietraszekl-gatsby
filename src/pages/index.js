import React from 'react'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import { about, skills, projects } from './personData.js'

const IndexPage = () => (
  <div>
    <Hero person={about} />
    <Skills skills={skills} />
    <Portfolio projects={projects} />
  </div>
)

export default IndexPage
