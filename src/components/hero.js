import React from 'react'
import SocialLink from './sociallink'
import HeroImage from "./hero-image"

import cv from '../assets/docs/Lukasz_Pietraszek_CV.pdf'
import './hero.scss'

const Hero = ({ person }) => {
  const ConnectList = person.connect.map((connect, i) => (
    <SocialLink key={i} connect={connect} />
  ))
  return (
    <section className="section hero">
      <div className="container">
        <div className="row">
          <div className="hero-profile-img flip-container ">
            <div className="flipper" >
              <HeroImage />
            </div>
          </div>
          <h2 className="hero-sub-heading">{person.title}</h2>
          <hr className="u-hero-divider" />
          <h1 className="hero-heading">{person.name}</h1>
          <ul className="contact-icons twelve columns">{ConnectList}</ul>
          <p className="section-description">{person.intro}</p>

          <a href={cv} className="button" target="_blank" rel="noopener noreferrer">
            {person.btnText}
          </a>
        </div>
      </div>
    </section >
  )
}

export default Hero
