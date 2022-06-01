import styled from 'styled-components'

const Container = styled.div`
  display: none;
  margin-bottom: 120px;

  .header {
    width: 100vw;
    position: fixed;
    z-index: 30;
    box-shadow: 1px 1px 6px 1px rgb(0 0 0 / 10%);
  }

  .slider {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 71px;
    cursor: pointer;
    font-size: 25px;
    background: ${props => props.theme.colors.mobileMenuBackground};
  }

  .menu-container {
    background: ${props => props.theme.colors.mobileListBackground};
    overflow: hidden;
    width: 100vw;
    height: 0px;
    transition: all 0.4s;
  }

  .menu-container.active {
    height: 244px;
  }

  .menu-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
  }

  .menu-link {
    text-decoration: none;
  }

  .menu-item {
    width: 100vw;
    height: 37px;
    margin-top: 3px;
    background: ${props => props.theme.colors.moblieListItemBackground};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font: 500 12.8px 'Lato', sans-serif;
    text-transform: uppercase;
    color: ${props => props.theme.colors.mobileListText};
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    :hover {
      color: ${props => props.theme.colors.moblieListItemBackground};
      background: ${props => props.theme.colors.mobileListText};
    }
  }

  @media screen and (max-width: 800px) {
    display: block;
  }
`

export default Container
