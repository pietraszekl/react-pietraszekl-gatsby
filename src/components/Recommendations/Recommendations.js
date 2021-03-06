import React from 'react'
import Recommendation from './RecommendationNode'

const Recommendations = ({ recommendations }) => {
  const RecommendationsList = recommendations.map(recommendation => (
    <Recommendation key={recommendation.id} recommendation={recommendation} />
  ))
  return (
    <section
      className="section testimonials background-pattern"
      style={{ position: 'relative' }}
    >
      <div className="container">
        <h2 className="section-heading">Recommendations</h2>
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
