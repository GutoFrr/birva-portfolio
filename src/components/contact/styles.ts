import styled from 'styled-components'
import newYork from '../../public/assets/contact/new-york-bg.jpg'

const Container = styled.div`
  .contact {
    background: url(${newYork});
    background-repeat: repeat-x;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 450px;
    position: relative;
  }

  .contact-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    hr {
      background: ${props => props.theme.colors.contactHr};
      border: medium none;
      height: 4px;
      margin: 20px auto;
      width: 47px;
    }

    h2 {
      font: 300 26px 'Lato', sans-serif;
      color: ${props => props.theme.colors.contactText};
      line-height: 18.5px;
      padding: 7.1px 0;
    }

    button {
      background: transparent;
      color: ${props => props.theme.colors.contactText};
      border: 3px solid ${props => props.theme.colors.contactText};
      cursor: pointer;
      font: 600 13px 'Lato', sans-serif;
      text-align: center;
      text-transform: uppercase;
      padding: 10px;
      line-height: 17px;
      letter-spacing: 1.5px;
      transition: all 0.3s;

      :hover {
        color: ${props => props.theme.colors.contactButtonTextHover};
        background: ${props => props.theme.colors.contactText};
      }
    }
  }

  .back-top {
    background: ${props => props.theme.colors.backTop};
    width: 50px;
    height: 50px;
    bottom: 0;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s;

    :hover {
      height: 60px;
    }
  }

  .back-icon {
    color: ${props => props.theme.colors.contactText};
    font-size: 26px;
  }
`

export default Container
