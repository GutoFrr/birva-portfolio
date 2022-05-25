import React from 'react'
import cardData from './aboutCardData'
import Container from './styles'
import { Icon } from '@iconify/react'

const AboutCard = () => {
  return (
    <Container>
      <ul className="cards">
        {cardData.map((item, key) => (
          <li className="card" key={key}>
            <Icon icon={item.icon} className="icon" />
            <h3>{item.title}</h3>
            <hr />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default AboutCard
