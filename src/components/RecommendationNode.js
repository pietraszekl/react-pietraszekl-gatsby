import React from 'react'

const Recommendation = ({ recommendation }) => {

  return (
    <div className="slide slide--active">
      <p className="slide__text"> {recommendation.text}</p>
      <p className="slide__caption">{recommendation.author}</p>
    </div>
  )
}

export default Recommendation
