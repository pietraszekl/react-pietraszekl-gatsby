import React from 'react'
import Skill from './skill.js'

const Skills = ({ skills }) => {
  const SkillsList = skills.list.map((skill, i) => (
    <Skill key={i} skill={skill} />
  ))
  return (
    <section className="section skills">
      <div className="container">
        <h2 className="section-heading">{skills.header}</h2>
        <div className="row">
          <p className="section-description">{skills.intro}</p>
        </div>
        <div className="row">
          <ul className="skills-list">{SkillsList}</ul>
        </div>
      </div>
    </section>
  )
}

export default Skills
