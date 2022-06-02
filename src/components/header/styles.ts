import styled from 'styled-components'

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 40;

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 120px;
    column-gap: 5vw;
    padding: 0 25vw;
    background: ${props => props.theme.colors.navBackground};
    transition: all 0.3s;

    .logo-container {
      display: none;
    }
  }

  .header.active {
    height: 80px;
    background: #fff;
    box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;

    .socials {
      display: none;
    }

    .logo-container {
      display: flex;
    }

    .menu {
      .menu-items {
        height: 80px;

        .menu-item {
          .menu-icon {
            color: ${props => props.theme.colors.whiteNavItem};
            transition: all 0.2s;
          }

          .item-name {
            color: ${props => props.theme.colors.whiteNavItem};
            transition: all 0.2s;
          }

          :hover {
            .menu-icon {
              color: ${props => props.theme.colors.whiteNavItemHover};
            }

            .item-name {
              color: ${props => props.theme.colors.whiteNavItemHover};
            }
          }
        }
      }
    }
  }

  .socials {
    .socials-list {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
      width: 15vw;
      column-gap: 1px;

      .socials-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 33%;
        min-width: 70px;
        max-width: 100px;
        height: 120px;
        padding: 10px 0;
        background: ${props => props.theme.colors.navSocials};
        cursor: pointer;
        transition: all 0.3s ease;

        .socials-icon {
          line-height: 1;
          font-size: 16px;
          color: ${props => props.theme.colors.background};
        }
      }

      .socials-item:nth-child(1) {
        :hover {
          background: ${props => props.theme.colors.twitter};
        }
      }
      .socials-item:nth-child(2) {
        :hover {
          background: ${props => props.theme.colors.facebook};
        }
      }
      .socials-item:nth-child(3) {
        :hover {
          background: ${props => props.theme.colors.googlePlus};
        }
      }
    }
  }

  .menu {
    .menu-items {
      height: 120px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      column-gap: 1vw;

      .menu-item {
        display: flex;
        align-items: center;
        cursor: pointer;
        letter-spacing: 1px;

        a {
          text-decoration: none;
          display: flex;
        }

        .menu-icon {
          font-size: 16px;
          color: ${props => props.theme.colors.navItem};
          margin-right: 5px;
          transition: all 0.2s;
        }

        .item-name {
          font: 500 14px 'Lato', sans-serif;
          text-transform: uppercase;
          color: ${props => props.theme.colors.navItem};
          transition: all 0.2s;
        }

        :hover {
          .menu-icon {
            color: ${props => props.theme.colors.navHover};
          }

          .item-name {
            color: ${props => props.theme.colors.navHover};
          }
        }
      }
    }
  }

  @media screen and (max-width: 1140px) {
    .header {
      column-gap: 10%;
    }

    .menu {
      .menu-items {
        .menu-item {
          .menu-icon {
            font-size: 15px;
          }

          .item-name {
            font: 500 13px 'Lato', sans-serif;
          }
        }
      }
    }
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`

export default Container
