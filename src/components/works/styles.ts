import styled from 'styled-components'

const Container = styled.div`
  .works {
    padding-top: 60px;
    height: 1740px;
  }

  .works-title {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 230px;
    max-width: 980px;
    min-width: 320px;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 78px;

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
      width: 780px;
      text-align: center;
    }

    p {
      font: 400 16px 'Lato', sans-serif;
      color: ${props => props.theme.colors.text};
      margin-bottom: 13px;
      line-height: 1.625em;
      width: 780px;
    }
  }
`

export default Container
