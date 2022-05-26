import React from 'react'
import Container from './styles'
import testimonialsData from './testimonialsData'

const Testimonials = () => {
  return (
    <Container>
      <div className="testimonials">
        {testimonialsData.map((item, key) => (
          <div className="testimonial-content" key={key}>
            <h4 className="testimonial">{item.testimonial}</h4>
            <div className="employee">
              <h5>{item.employee}</h5>
              <h5 className="role">{item.role}</h5>
            </div>
            <h5 className="company">{item.company}</h5>
          </div>
        ))}
        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </Container>
  )
}

export default Testimonials
