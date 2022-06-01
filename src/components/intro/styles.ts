import styled from 'styled-components'
import smileGuy from '../../public/assets/intro/03-bgsliderimg.jpg'

const Container = styled.div`
  .intro {
    position: relative;
    width: 100vw;
    height: 929px;
  }

  .overlay {
    width: 100vw;
    height: 929px;
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
  }

  .slides {
    width: 100vw;
    height: 929px;
    margin-top: -120px;
    background: url(${smileGuy});
    background-repeat: no-repeat;
    background-size: cover;
  }

  .intro-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    position: absolute;
    top: 340px;

    h1 {
      color: ${props => props.theme.colors.introText};
      font: 300 62px 'Lato', sans-serif;
      text-align: center;
      text-transform: uppercase;
      text-rendering: optimizeLegibility;
    }

    h2 {
      color: ${props => props.theme.colors.introText};
      font: 300 26px 'Lato', sans-serif;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 1px;
      background: ${props => props.theme.colors.introTextBackground};
      padding: 10px 25px;
      text-rendering: optimizeLegibility;
    }

    hr {
      background: ${props => props.theme.colors.introHr};
      border: medium none;
      height: 4px;
      margin: 20px auto;
      width: 40px;
    }

    button {
      background: transparent;
      color: ${props => props.theme.colors.introText};
      border: 3px solid ${props => props.theme.colors.introText};
      cursor: pointer;
      font: 600 13px 'Lato', sans-serif;
      text-align: center;
      text-transform: uppercase;
      padding: 10px;
      line-height: 17px;
      letter-spacing: 1.5px;
      transition: all 0.3s;

      :hover {
        color: ${props => props.theme.colors.introButtonTextHover};
        background: ${props => props.theme.colors.introText};
      }
    }
  }

  .icon {
    font-size: 48px;
    cursor: pointer;
    opacity: 0.5;
    transition: all 0.3s;

    :hover {
      opacity: 1;
    }
  }

  .left-icon {
    position: absolute;
    left: 0;
    top: 50%;
  }

  .right-icon {
    position: absolute;
    right: 18px;
    top: 50%;
  }

  @media screen and (max-width: 980px) {
    .intro-content {
      h1 {
        font-size: 42px;
      }
    }
  }

  @media screen and (max-width: 800px) {
    .intro-content {
      h1 {
        font-size: 32px;
        max-width: 70vw;
      }

      h2 {
        font-size: 18px;
        padding: 5px 20px;
        max-width: 70vw;
      }
    }
  }

  @media screen and (max-width: 480px) {
    .intro-content {
      h1 {
        font-size: 20px;
      }

      h2 {
        font-size: 16px;
        padding: 5px 15px;
      }

      hr {
        width: 10%;
      }
    }
  }
`

export default Container
