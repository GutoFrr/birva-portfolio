import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  max-width: 980px;
  min-width: 320px;
  margin: 0 auto;
  padding: 40px;

  .cards {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    list-style: none;
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 220px;
    height: 210px;
    text-align: center;
    border: 4px solid ${props => props.theme.colors.aboutCard};
    position: relative;
    padding-top: 20px;
    cursor: pointer;
    transition: all 0.3s;

    .icon {
      font-size: 52px;
      position: absolute;
      top: 18%;
      color: ${props => props.theme.colors.aboutCard};
      transition: all 0.3s;
    }

    h3 {
      font: 500 16px 'Lato', sans-serif;
      color: ${props => props.theme.colors.aboutCardText};
      background: ${props => props.theme.colors.background};
      width: 96%;
      text-align: center;
      position: absolute;
      top: 96px;
      text-transform: uppercase;
      padding-top: 7px;
    }

    hr {
      border: 1px solid ${props => props.theme.colors.aboutCardHr};
      position: absolute;
      margin: auto;
      top: 160px;
      width: 10px;
    }

    :hover {
      border-color: ${props => props.theme.colors.aboutCardActive};

      .icon {
        color: ${props => props.theme.colors.aboutCardActive};
        top: 30%;
      }
    }
  }

  @media screen and (max-width: 800px) {
    .cards {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      row-gap: 10px;
    }
  }
`

export default Container
