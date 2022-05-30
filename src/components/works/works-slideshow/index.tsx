import React from 'react'
import Container from './styles'

import perspectiveImg1 from '../../../public/assets/works/perspective-img1.jpg'
import perspectiveImg2 from '../../../public/assets/works/perspective-img2.jpg'

const SlideShow = () => {
  return (
    <Container>
      <div className="slideshow">
        <div className="slideshow-title">
          <h2>Tilted Content Slideshow</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <strong> Maecenas metus</strong> nulla Nam blandit felis non neque
            cursus aliquet. Morbi vel enim dignissim massa dignissim.
          </p>
          <button>Action Button</button>
        </div>
        <div className="slideshow-images">
          <img
            src={perspectiveImg1}
            alt="Foto 1 Works Slideshow"
            className="img-1"
          />
          <img
            src={perspectiveImg2}
            alt="Foto 2 Works Slideshow"
            className="img-2"
          />
        </div>
      </div>
      <div className="carousel-slides">
        <span>
          <hr />
        </span>
        <span>
          <hr />
        </span>
        <span>
          <hr />
        </span>
      </div>
    </Container>
  )
}

export default SlideShow
