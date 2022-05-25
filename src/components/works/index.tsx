import React from 'react'
import Container from './styles'
import SlideShow from './works-slideshow'

const Works = () => {
  return (
    <Container>
      <div className="works">
        <div className="works-title">
          <hr />
          <h2>
            Selection of Tailored and Colorful <strong>Projects.</strong>
          </h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <strong> Maecenas metus</strong> nulla, commodo a sodales sed,
            dignissim pretium nunc. Nam et lacus neque. Sed volutpat ante id
            mauris laoreet <strong>vestibulum</strong>. Nam blandit felis non
            neque cursus aliquet. Morbi vel enim dignissim massa dignissim
            commodo vitae quis tellus.
          </p>
        </div>
        <SlideShow />
      </div>
    </Container>
  )
}

export default Works
