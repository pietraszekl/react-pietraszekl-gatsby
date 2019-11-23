import React from 'react'
//import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import './hero.scss'

const Hero = ({ aboutAuthor: { jobtitle, name, bio, cv, heroImage } }) => {
  return (
    <section className="section hero">
      <div className="container">
        <div className="row">
          <div className="hero-profile-img flip-container ">
            <div className="flipper">
              <Image
                className="hero-image"
                alt={name}
                fixed={heroImage.imageFile.childImageSharp.fixed}
              />
            </div>
          </div>
          <h2 className="hero-sub-heading">{jobtitle}</h2>
          <hr className="u-hero-divider" />
          <h1 className="hero-heading">{name}</h1>
          <ul className="contact-icons twelve columns">
            <li className="contact-icons-item">
              <a
                href="https://twitter.com/pietraszekl"
                className="contact-icon icon icon-twitter"
              >
                <div className="sr-only">twitter</div>
              </a>
            </li>
            <li className="contact-icons-item">
              <a
                href="https://uk.linkedin.com/in/pietraszekl"
                className="contact-icon icon icon-linkedin"
              >
                <div className="sr-only">linkedin</div>
              </a>
            </li>
            <li className="contact-icons-item">
              <a
                href="https://github.com/pietraszekl"
                className="contact-icon icon icon-github"
              >
                <div className="sr-only">github</div>
              </a>
            </li>
          </ul>
          <p className="section-description">{bio}</p>

          <a
            href={cv.url}
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
export default Hero
