import styled from 'styled-components'

const Container = styled.div`
  margin-bottom: 100px;

  .slideshow {
    width: 100%;
    height: 500px;
    background: ${props => props.theme.colors.slideshowBackground};
    overflow: hidden;
    perspective: 1600px;
    position: relative;
  }

  .slideshow-title {
    padding: 48px 96px;
    position: relative;
    z-index: 2;
    opacity: 1;

    h2 {
      font: 300 48px 'Lato', sans-serif;
      color: ${props => props.theme.colors.title};
      padding: 13px 0;
      text-rendering: optimizeLegibility;
    }

    p {
      font: 400 16px 'Lato', sans-serif;
      color: ${props => props.theme.colors.text};
      line-height: 26px;
      max-width: 583px;
      margin-bottom: 13px;
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

      a {
        text-decoration: none;
      }

      :hover {
        color: ${props => props.theme.colors.introButtonTextHover};
        background: ${props => props.theme.colors.introText};
      }
    }
  }

  .slideshow-images {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 55%;
    transform: translateY(-50%) rotateX(60deg) rotateZ(35deg);
    transform-style: preserve-3d;

    img {
      max-width: 100%;
    }
  }

  .img-1 {
    margin-bottom: 30px;
  }

  .carousel-slides {
    text-align: center;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    span {
      height: 20px;
      cursor: pointer;
    }

    hr {
      border: 2px solid ${props => props.theme.colors.carouselHr};
      margin: 0 3px;
      width: 60px;
      transition: all 0.3s;
    }
  }

  .carousel-slides {
    span:nth-child(1) {
      hr {
        border: 2px solid ${props => props.theme.colors.carouselHrActive};
      }
    }
    span:nth-child(2) {
      :hover {
        hr {
          border: 2px solid ${props => props.theme.colors.carouselHrHover};
        }
      }
    }
    span:nth-child(3) {
      :hover {
        hr {
          border: 2px solid ${props => props.theme.colors.carouselHrHover};
        }
      }
    }
  }

  @media screen and (max-width: 1040px) {
    .slideshow-images {
      left: 0;
      opacity: 0.3;
      pointer-events: none;
    }
  }

  @media screen and (max-width: 800px) {
    .slideshow {
      height: auto;
    }

    .slideshow-title {
      padding: 2vw 4vw;
      text-align: center;
    }

    .slideshow-images {
      img {
        width: auto;
      }
    }
  }

  @media screen and (max-width: 540px) {
    .carousel-slides {
      hr {
        margin: 0 3px;
        height: 20px;
        width: 20px;
        transition: all 0.3s;
      }
    }
  }
`

export default Container
