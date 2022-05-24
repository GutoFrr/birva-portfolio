import React from 'react'
import { headerIcons, headerItems } from './headerData'
import Container from './styles'
import { Icon } from '@iconify/react'

interface HeaderProps {
  listIcon?: string
  listItem?: string
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <Container>
      <div className="header">
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
        <div className="menu">
          <ul className="menu-items">
            {headerItems.map((item, key) => (
              <li className="menu-item" key={key}>
                <Icon icon={item.listIcon} className="menu-icon" />
                <h5 className="item-name">{item.listName}</h5>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default Header
