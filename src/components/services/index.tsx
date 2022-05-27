import React from 'react'
import ServicesCard from './services-cards'
import Container from './styles'

const Services = () => {
  return (
    <Container>
      <div className="services">
        <div className="services-title">
          <hr />
          <h2>
            All your <strong>needs</strong> taken care of
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
        <ServicesCard />
      </div>
    </Container>
  )
}

export default Services
