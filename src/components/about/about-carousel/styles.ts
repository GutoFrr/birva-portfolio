import styled from 'styled-components'

const Container = styled.div`
  width: 100%;

  .about-carousel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid ${props => props.theme.colors.aboutCardHr};
    border-bottom: 1px solid ${props => props.theme.colors.aboutCardHr};
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
`

export default Container
