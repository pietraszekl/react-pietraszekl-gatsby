import React from 'react'
import './recommendations.scss'

const Recommendation = ({ recommendation }) => {
  return (
    <figure className="slide slide--active testimonial">
      <blockquote className="slide__text testimonial__text">
        {' '}
        {recommendation.text}
      </blockquote>
      <figcaption className="slide__caption testimonial__caption">
        {recommendation.author}
      </figcaption>
    </figure>
  )
}

export default Recommendation
