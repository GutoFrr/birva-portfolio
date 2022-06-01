import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import mobileHeaderData from './mobileHeaderData'
import Container from './styles'

const MobileHeader = () => {
  const [slideMenu, setSlideMenu] = useState(false)
  const handleSlideClick = () => setSlideMenu(!slideMenu)

  return (
    <Container>
      <div className="header">
        <div className={`menu-container ${slideMenu ? 'active' : 'inactive'}`}>
          <ul className="menu-list">
            {mobileHeaderData.map((item, key) => (
              <a href={'#' + item.listItem} className="menu-link" key={key}>
                <li className="menu-item">{item.listItem}</li>
              </a>
            ))}
          </ul>
        </div>
        <div className="slider" onClick={handleSlideClick}>
          <Icon icon="dashicons:menu-alt" className="menu-icon" />
        </div>
      </div>
    </Container>
  )
}

export default MobileHeader
