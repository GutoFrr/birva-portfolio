import styled from 'styled-components'

const Container = styled.div`
  .footer {
    height: 103px;
    background: ${props => props.theme.colors.footerBackground};
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 100px;
  }

  .socials {
    display: flex;
    align-items: center;
    column-gap: 1px;
    list-style: none;
  }

  .social-item {
    height: 103px;
    width: 90px;
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
      line-height: 26px;
    }
  }
`

export default Container
