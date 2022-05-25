import React from 'react'
import cardData from '../about-cards/aboutCardData'
import Container from './styles'

import justiceLeague from '../../../public/assets/about/VDFcAmUqXC4vKRhXdNoPx6.jpg'

const AboutCarousel = () => {
  return (
    <Container>
      <div className="about-carousel">
        <div className="about-video">
          <img src={justiceLeague} alt="Video Carrossel About" />
        </div>
        <div className="carousel-text">
          <div className="text">
            <h3>We are creative developers</h3>
            <div className="description">
              <h6>Lorem ipsum dolor sit amet</h6>
              <p>
                Nam blandit felis non neque cursus aliquet. Morbi vel enim
                dignissim massa dignissim
              </p>
            </div>
            <div className="description">
              <h6>Lorem ipsum dolor sit amet</h6>
              <p>
                <a>Maecenas metus</a> nulla, commodo a sodales sed, dignissim
                pretium nunc
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default AboutCarousel
