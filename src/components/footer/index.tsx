import React from 'react'
import Container from './styles'
import { footerSocials, footerInfo, infoIcons } from './footerData'
import { Icon } from '@iconify/react'

const Footer = () => {
  return (
    <Container>
      <div className="footer">
        <ul className="socials">
          <li className="social-item">
            <Icon icon={footerSocials[0]} className="social-icon" />
          </li>
          <li className="social-item">
            <Icon icon={footerSocials[1]} className="social-icon" />
          </li>
          <li className="social-item">
            <Icon icon={footerSocials[2]} className="social-icon" />
          </li>
        </ul>
        <ul className="info-list">
          <li className="info-item">
            <Icon icon={infoIcons[0]} className="info-icon" />
            <h6>{footerInfo[0]}</h6>
          </li>
        </ul>
        <ul className="info-list">
          <li className="info-item">
            <Icon icon={infoIcons[1]} className="info-icon" />
            <h6>{footerInfo[1]}</h6>
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default Footer
