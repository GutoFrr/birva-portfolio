import styled from 'styled-components'

const Container = styled.div`
  position: relative;

  .header {
    position: sticky;
    top: 0;
    z-index: 3;
  }

  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
  }

  .smile-guy {
    width: 100%;
    height: 100%;
    background-size: cover;
    margin-top: -120px;
  }

  .intro-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: absolute;
    top: 340px;

    h1 {
      color: ${props => props.theme.colors.introText};
      font: 300 62px 'Lato', sans-serif;
      text-align: center;
      text-transform: uppercase;
    }

    h2 {
      color: ${props => props.theme.colors.introText};
      font: 100 26px 'Lato', sans-serif;
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
`

export default Container
