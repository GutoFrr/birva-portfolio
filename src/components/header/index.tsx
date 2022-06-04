import React, { useEffect, useState } from 'react'
import Container from './styles'
import { headerIcons, headerItems } from './headerData'
import { Icon } from '@iconify/react'

import smallLogo from '../../public/assets/header/small-logo.png'

interface HeaderProps {
  listIcon?: string
  listItem?: string
}

const Header: React.FC<HeaderProps> = () => {
  const [header, setHeader] = useState(false)

  const changeHeader = () => {
    if (window.scrollY >= 220) {
      setHeader(true)
    } else {
      setHeader(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeHeader)
    console.log('scroll')
  }, [header])

  return (
    <Container>
      <div className={header ? 'header active' : 'header'}>
        <div className="socials">
          <ul className="socials-list">
            <li className="socials-item">
              <Icon icon={headerIcons[0]} className="socials-icon" />
            </li>
            <li className="socials-item">
              <Icon icon={headerIcons[1]} className="socials-icon" />
            </li>
            <li className="socials-item">
              <Icon icon={headerIcons[2]} className="socials-icon" />
            </li>
          </ul>
        </div>
        <div className="logo-container">
          <a href="#">
            <img src={smallLogo} alt="Logo Header Birva" className="logo" />
          </a>
        </div>
        <div className="menu">
          <ul className="menu-items">
            {headerItems.map((item, key) => (
              <li className="menu-item" key={key}>
                <a href={'#' + item.listName}>
                  <Icon icon={item.listIcon} className="menu-icon" />
                  <h5 className="item-name">{item.listName}</h5>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default Header
