import React from 'react'
import Container from './styles'
import { Icon } from '@iconify/react'

import birvaLogo from '../../public/assets/intro/birva-logo.png'

const Intro = () => {
  return (
    <Container id="">
      <div className="intro">
        <div className="overlay"></div>
        <div className="slides"></div>
        <div className="intro-content">
          <img
            src={birvaLogo}
            alt="Logo Site Birva Design"
            className="birva-logo"
          />
          <h1>
            <strong>Creative</strong> and Passion
          </h1>
          <h2>
            • Welcome To <strong>Birva</strong> Creative Design Studio •
          </h2>
          <hr />
          <button>Know More</button>
        </div>
        <div className="intro-arrows">
          <Icon
            icon="fluent:triangle-left-12-regular"
            className="left-icon icon"
          />
          <Icon
            icon="fluent:triangle-right-12-regular"
            className="right-icon icon"
          />
        </div>
      </div>
    </Container>
  )
}

export default Intro
