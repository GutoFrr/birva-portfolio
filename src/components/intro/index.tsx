import React from 'react'
import Header from '../header'
import Container from './styles'

import smileGuy from '../../public/assets/intro/03-bgsliderimg.jpg'
import birvaLogo from '../../public/assets/intro/birva-logo.png'

const Intro = () => {
  return (
    <Container>
      <div className="header">
        <Header />
      </div>
      <div className="intro">
        <div className="slides">
          <div className="overlay"></div>
          <img
            src={smileGuy}
            alt="Homem Sorrindo Intro"
            className="smile-guy"
          />
        </div>
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
      </div>
    </Container>
  )
}

export default Intro
