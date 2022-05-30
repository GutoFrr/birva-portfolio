import styled from 'styled-components'

const Container = styled.div`
  width: 100%;

  .about-carousel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid ${props => props.theme.colors.aboutCardHr};
    border-bottom: 1px solid ${props => props.theme.colors.aboutCardHr};
    position: relative;
  }

  .about-video {
    height: 380px;
    width: 50%;

    img {
      height: 380px;
      width: 100%;
    }
  }

  .carousel-text {
    height: 380px;
    width: 50%;
    display: flex;
    justify-content: center;
  }

  .text {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 350px;

    h3 {
      font: 500 16px 'Lato', sans-serif;
      color: ${props => props.theme.colors.aboutCardText};
      background: ${props => props.theme.colors.aboutCarouselTitleBackground};
      text-transform: uppercase;
      padding: 7px 15px;
      line-height: 28px;
      text-rendering: optimizeLegibility;
      width: 170px;
      margin-bottom: 20px;
    }

    .description {
      margin-bottom: 13px;

      h6 {
        font: 700 16px 'Lato', sans-serif;
        padding: 4.4px 0;
      }

      p {
        font: 400 15px 'Lato', sans-serif;
        line-height: 18px;
        color: ${props => props.theme.colors.text};
      }
    }
  }

  .icon-container {
    transition: all 0.3s;

    :hover {
      background: ${props => props.theme.colors.aboutCarouselIcon};

      .icon {
        color: ${props => props.theme.colors.aboutCarouselHoverIcon};
      }
    }
  }

  .icon {
    transition: all 0.3s;
  }

  .right-icon-container {
    width: 53px;
    height: 50px;
    background: ${props => props.theme.colors.aboutCarouselButton};
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 165px;
    right: 0;
    cursor: pointer;
  }

  .right-icon {
    font-size: 20px;
    color: ${props => props.theme.colors.aboutCarouselIcon};
  }

  .left-icon-container {
    width: 50px;
    height: 53px;
    background: ${props => props.theme.colors.aboutCarouselButton};
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 165px;
    left: 0;
    cursor: pointer;
  }

  .left-icon {
    font-size: 20px;
    color: ${props => props.theme.colors.aboutCarouselIcon};
  }
`

export default Container
