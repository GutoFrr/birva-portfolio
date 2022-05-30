import React from 'react'
import Container from './styles'
import { Icon } from '@iconify/react'

const Contact = () => {
  return (
    <Container id="Contact">
      <div className="contact">
        <div className="contact-content">
          <hr />
          <h2>
            Feel free to <strong>contact us</strong> if you have something to
            say!
          </h2>
          <hr />
          <button>Contact Form</button>
        </div>
        <a href="#" className="back-top">
          <Icon icon="akar-icons:chevron-up" className="back-icon" />
        </a>
      </div>
    </Container>
  )
}

export default Contact
