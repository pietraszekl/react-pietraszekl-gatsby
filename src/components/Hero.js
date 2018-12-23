import React from 'react'
import SocialLink from './sociallink'
import personPhoto from '../images/lukasz-pietraszek.png'
import personLogo from '../images/looca-side-b.png'
import cv from '../static/Lukasz_Pietraszek_CV.pdf'
import '../css/hero.css'

const Hero = ({ person }) => {
  const ConnectList = person.connect.map((connect, i) => (
    <SocialLink key={i} connect={connect} />
  ))
  return (
    <section className="section hero">
      <div className="container">
        <div className="row">
          <div className="hero-profile-img flip-container ">
            <div className="flipper">
              <img className="front" src={personPhoto} alt={person.name} />
              <img className="back" src={personLogo} alt="looca" />
            </div>
          </div>
          <h2 className="hero-sub-heading">{person.title}</h2>
          <hr className="u-hero-divider" />
          <h1 className="hero-heading">{person.name}</h1>
          <ul className="contact-icons twelve columns">{ConnectList}</ul>
          <p className="section-description">{person.about}</p>
          <p className="section-description">{person.specialities}</p>
          <a href={cv} className="button" target="blank">
            {person.cv.btnTxt}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
