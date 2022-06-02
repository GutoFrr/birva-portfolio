import styled from 'styled-components'

const Container = styled.div`
  .team {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 60px;
  }

  .team-title {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 980px;
    margin-bottom: 60px;

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

  .team-graphs {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 980px;
    margin-top: 60px;

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
      margin-bottom: 13px;
    }
  }

  .graphs {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
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

  @media (max-width: 800px) {
    .team-title {
      h2 {
        line-height: 1;
      }
    }
    .team-graphs {
      h2 {
        line-height: 1;
      }
    }
  }

  @media (max-width: 400px) {
    .team-title {
      h2 {
        font-size: 7vw;
      }
    }
    .team-graphs {
      h2 {
        font-size: 7vw;
      }
    }
  }
`

export default Container
