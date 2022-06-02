import styled from 'styled-components'

const Container = styled.div`
  .about {
    padding-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .about-title {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 980px;
    padding-left: 20px;
    padding-right: 20px;
    color: ${props => props.theme.colors.text};
    font-family: 'Lato', sans-serif;

    hr {
      border: 2px solid ${props => props.theme.colors.introHr};
      height: 4px;
      margin: 20px auto;
      width: 40px;
    }

    h2 {
      background: ${props => props.theme.colors.titleBackground};
      color: ${props => props.theme.colors.title};
      text-transform: uppercase;
      font: 300 30px 'Lato', sans-serif;
      text-rendering: optimizeLegibility;
      padding: 4.368px 0;
      line-height: 18.48608px;
      width: 80vw;
      max-width: 780px;
      text-align: center;
    }

    p {
      font: 400 16px 'Lato', sans-serif;
      color: ${props => props.theme.colors.text};
      line-height: 1.625em;
      max-width: 780px;
      width: 80vw;
    }
  }

  @media (max-width: 800px) {
    .about {
      h2 {
        line-height: 1;
      }
    }
  }

  @media (max-width: 400px) {
    .about {
      h2 {
        font-size: 7vw;
      }
    }
  }
`

export default Container
