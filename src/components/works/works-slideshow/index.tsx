import React from 'react'
import Container from './styles'

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
      </div>
    </Container>
  )
}

export default SlideShow
