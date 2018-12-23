import React from 'react'
import Recommendation from './recommendationnode'

const Recommendations = ({ recommendations }) => {
  const RecommendationsList = recommendations.map((recommendation, i) => (
    <Recommendation key={recommendation.id} recommendation={recommendation} />
  ))
  return (
    <section className="section testimonials">
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
