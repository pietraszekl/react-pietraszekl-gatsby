import React from 'react'
import './recommendations.scss'

const Recommendation = ({ recommendation }) => {

  return (
    <div className="slide slide--active">
      <p className="slide__text"> {recommendation.text}</p>
      <p className="slide__caption">{recommendation.author}</p>
    </div>
  )
}

export default Recommendation
