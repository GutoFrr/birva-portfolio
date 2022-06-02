import { Icon } from '@iconify/react'
import React from 'react'
import Container from './styles'
import teamMembersData from './teamMembersData'

const TeamMembers = () => {
  return (
    <Container>
      <div className="members">
        {teamMembersData.map((item, key) => (
          <div className="member" key={key}>
            <div className="member-image">
              <img src={item.image} alt="Foto Team Member" />
            </div>
            <div className="member-data">
              <div className="member-description">
                <h4>{item.employee}</h4>
                <h5>
                  <strong>{item.role}</strong>
                </h5>
                <p>{item.bio}</p>
                <div className="socials">
                  <ul>
                    <li>
                      <Icon icon={item.socials[0]} className="icon" />
                    </li>
                    <li>
                      <Icon icon={item.socials[1]} className="icon" />
                    </li>
                    <li>
                      <Icon icon={item.socials[2]} className="icon" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="left-icon-container icon-container">
              <Icon icon="entypo:arrow-long-left" className="left-icon icon" />
            </div>
            <div className="right-icon-container icon-container">
              <Icon
                icon="entypo:arrow-long-right"
                className="right-icon icon"
              />
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default TeamMembers
