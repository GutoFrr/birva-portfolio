import styled from 'styled-components'

const Container = styled.div`
  .slideshow {
    width: 100%;
    height: 500px;
    margin-bottom: 100px;
    background: ${props => props.theme.colors.slideshowBackground};
  }

  .slideshow-title {
    width: 50%;
    padding: 48px 96px;

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
      width: 583px;
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

      :hover {
        color: ${props => props.theme.colors.introButtonTextHover};
        background: ${props => props.theme.colors.introText};
      }
    }
  }
`

export default Container
