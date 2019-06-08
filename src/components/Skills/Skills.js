import React from 'react'
// import BackgroundImage from './background-image.js'
import './skills.scss'
//import Skill from './skill.js'

const Skills = ({ skills: { header, desc, skillsList } }) => {
  // const SkillsList = skills.list.map((skill, i) => (
  //   <Skill key={i} skill={skill} />
  // ))
  return (
    <section
      className="section skills background-pattern"
      style={{
        position: 'relative',
      }}
    >
      {/* <BackgroundImage /> */}
      <div className="container">
        <h2 className="section-heading">{header}</h2>
        <div className="row">
          <p className="section-description">{desc}</p>
        </div>
        <div className="row" dangerouslySetInnerHTML={{ __html: skillsList }} />
      </div>
    </section>
  )
}

export default Skills
