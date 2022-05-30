import React from 'react'
import Container from './styles'
import { Icon } from '@iconify/react'

import officeIcons from '../../../public/assets/about/office.jpg'

const AboutCarousel = () => {
  return (
    <Container>
      <div className="about-carousel">
        <div className="about-video">
          <img src={officeIcons} alt="Video Carrossel About" />
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
        <div className="left-icon-container icon-container">
          <Icon icon="entypo:arrow-long-left" className="left-icon icon" />
        </div>
        <div className="right-icon-container icon-container">
          <Icon icon="entypo:arrow-long-right" className="right-icon icon" />
        </div>
      </div>
    </Container>
  )
}

export default AboutCarousel
