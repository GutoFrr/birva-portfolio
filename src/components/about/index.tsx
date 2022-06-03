import React from 'react'
import AboutCard from './about-cards'
import AboutCarousel from './about-carousel'
import Container from './styles'

const About = () => {
  return (
    <Container id="About">
      <div className="about">
        <div className="about-title">
          <hr />
          <h2>
            Hello, we&apos;re <strong>Birva</strong>, a creative design agency.
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
        <AboutCard />
        <AboutCarousel />
      </div>
    </Container>
  )
}

export default About
