import styled from 'styled-components'

const Container = styled.div`
  .footer {
    width: 100%;
    height: 103px;
    background: ${props => props.theme.colors.footerBackground};
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 100px;
    row-gap: 30px;
  }

  .socials {
    display: flex;
    align-items: center;
    column-gap: 1px;
    list-style: none;
  }

  .social-item {
    width: 33vw;
    max-width: 90px;
    height: 103px;
    background: ${props => props.theme.colors.footerSocialsBackground};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s;
  }

  .social-item:nth-child(1) {
    :hover {
      background: ${props => props.theme.colors.twitter};
    }
  }

  .social-item:nth-child(2) {
    :hover {
      background: ${props => props.theme.colors.facebook};
    }
  }

  .social-item:nth-child(3) {
    :hover {
      background: ${props => props.theme.colors.googlePlus};
    }
  }

  .social-icon {
    color: ${props => props.theme.colors.footerText};
    font-size: 18px;
  }

  .info-list {
    list-style: none;
    color: ${props => props.theme.colors.footerText};
  }

  .info-item {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 5px;

    h6 {
      font: 400 14px 'Lato', sans-serif;
      line-height: 26px;
      letter-spacing: 1px;
    }

    .info-icon {
      font-size: 24px;
    }
  }

  @media screen and (max-width: 800px) {
    .footer {
      height: auto;
      flex-direction: column;
    }
  }
`

export default Container
