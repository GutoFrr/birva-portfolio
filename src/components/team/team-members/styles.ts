import styled from 'styled-components'

const Container = styled.div`
  .members {
    width: 100vw;
    height: 380px;
    overflow: hidden;
  }

  .member {
    display: flex;
    border-top: 1px solid ${props => props.theme.colors.aboutCardHr};
    border-bottom: 1px solid ${props => props.theme.colors.aboutCardHr};
    height: 380px;
    position: relative;
  }

  .member-image {
    width: 705px;
    height: max-content;
  }

  .member-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0 auto;
  }

  .member-description {
    h4 {
      font: 500 16px 'Lato', sans-serif;
      letter-spacing: 0px;
      text-transform: uppercase;
      color: ${props => props.theme.colors.memberTitle};
      background: ${props => props.theme.colors.memberTitleBackground};
      padding: 7px 15px;
      line-height: 28px;
      width: fit-content;
      margin-bottom: 20px;
    }

    h5 {
      font: 300 16px 'Lato', sans-serif;
      color: ${props => props.theme.colors.title};
      padding: 4.4px 0;
      line-height: 18.48608px;
    }

    p {
      font: 400 15px 'Lato', sans-serif;
      color: ${props => props.theme.colors.text};
      margin-bottom: 13px;
      line-height: 26px;
      width: 350px;
    }
  }

  .socials {
    ul {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      list-style: none;
      column-gap: 1px;

      li {
        background: ${props => props.theme.colors.memberSocialsBackground};
        padding: 10px 0;
        transition: all 0.3s ease 0s;
        width: 56px;
        height: 52px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        :nth-child(1):hover {
          background: ${props => props.theme.colors.twitter};
        }
        :nth-child(2):hover {
          background: ${props => props.theme.colors.facebook};
        }
        :nth-child(3):hover {
          background: ${props => props.theme.colors.googlePlus};
        }

        .icon {
          color: ${props => props.theme.colors.memberSocials};
          font-size: 18px;
        }
      }
    }
  }

  .icon-container {
    transition: all 0.3s;

    :hover {
      background: ${props => props.theme.colors.aboutCarouselIcon};

      .icon {
        color: ${props => props.theme.colors.aboutCarouselHoverIcon};
      }
    }
  }

  .icon {
    transition: all 0.3s;
  }

  .right-icon-container {
    width: 53px;
    height: 50px;
    background: ${props => props.theme.colors.aboutCarouselButton};
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 165px;
    right: 0;
    cursor: pointer;
  }

  .right-icon {
    font-size: 20px;
    color: ${props => props.theme.colors.aboutCarouselIcon};
  }

  .left-icon-container {
    width: 50px;
    height: 53px;
    background: ${props => props.theme.colors.aboutCarouselButton};
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 165px;
    left: 0;
    cursor: pointer;
  }

  .left-icon {
    font-size: 20px;
    color: ${props => props.theme.colors.aboutCarouselIcon};
  }
`

export default Container
