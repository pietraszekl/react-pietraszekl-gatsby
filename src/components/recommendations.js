import React from 'react'
//import BackgroundImage from './background-image'
import Recommendation from './recommendationnode'

const Recommendations = ({ recommendations }) => {
  const RecommendationsList = recommendations.map(recommendation => (
    <Recommendation key={recommendation.id} recommendation={recommendation} />
  ))
  return (
    <section
      className="section testimonials background"
      style={{ position: 'relative' }}
    >
      <div className="container">
        <h2 className="section-heading">Testimonials</h2>
        <div className="row testimonials-list">
          <div className="slideshow">
            <div className="slideshow__slides">{RecommendationsList}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Recommendations
