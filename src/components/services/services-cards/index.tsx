import React from 'react'
import servicesCardsData from './servicesCardsData'
import Container from './styles'

const ServicesCard = () => {
  return (
    <Container>
      <div className="services-cards">
        {servicesCardsData.map((item, key) => (
          <div className="service-card" key={key}>
            <h4>{item.title}</h4>
            <hr />
            <p className="text1">{item.text1}</p>
            <p className="text2">{item.text2}</p>
            <hr />
          </div>
        ))}
      </div>
    </Container>
  )
}

export default ServicesCard
