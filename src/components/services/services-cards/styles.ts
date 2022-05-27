import styled from 'styled-components'

const Container = styled.div`
  .services-cards {
    height: 460px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    column-gap: 20px;
  }

  .service-card {
    width: 300px;
    height: 460px;
    padding: 20px;
    box-shadow: inset 0 0 0 3px ${props => props.theme.colors.serviceCardShadow};
    color: ${props => props.theme.colors.serviceCardShadow};
    background: ${props => props.theme.colors.serviceCardBackground};
    transition: all 0.3s;
    cursor: pointer;

    h4 {
      font: 700 16px 'Lato', sans-serif;
      border: 2px solid ${props => props.theme.colors.serviceCardBackground};
      letter-spacing: 1px;
      padding: 8px 0;
      text-transform: uppercase;
      text-align: center;
    }

    hr {
      background: none repeat scroll 0 0 ${props => props.theme.colors.introHr};
      border: medium none;
      height: 4px;
      margin: 20px auto;
      width: 5%;
    }

    p {
      font: 400 16px 'Lato', sans-serif;
      line-height: 26px;
      color: ${props => props.theme.colors.text};
    }

    .text1 {
      margin-bottom: 13px;
    }

    :hover {
      background: rgba(100, 100, 100, 0.1);
    }
  }
`

export default Container
