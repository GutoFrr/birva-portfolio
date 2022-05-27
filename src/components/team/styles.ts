import styled from 'styled-components'

const Container = styled.div`
  .team {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 1200px;
    padding-top: 60px;
  }

  .team-title {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 265px;
    max-width: 980px;
    min-width: 320px;

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
      padding: 8.2px 0;
      line-height: 18.48608px;
      width: 760px;
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

  .team-graphs {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 186px;
    max-width: 980px;
    min-width: 320px;

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
      padding: 8.2px 0;
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

  .graphs {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 40px;
  }

  .graph {
    position: relative;
    height: 180px;

    h3 {
      position: absolute;
      top: 22%;
      left: 33%;
      font: 500 38px 'Lato', sans-serif;
      color: ${props => props.theme.colors.title};
    }

    h4 {
      position: absolute;
      top: 43%;
      left: 30%;
      font: 400 18px 'Lato', sans-serif;
      color: ${props => props.theme.colors.aboutCard};
    }
  }
`

export default Container
