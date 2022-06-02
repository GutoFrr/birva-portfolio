import styled from 'styled-components'
import backgroundImg from '../../public/assets/companies/background.jpg'

const Container = styled.div`
  .companies {
    height: 306px;
    background: url(${backgroundImg});
    background-size: cover;
    background-attachment: scroll;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .overlay {
    height: 306px;
    width: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
    top: 0;
  }

  .companies-content {
    max-width: 940px;
    overflow: hidden;
  }

  .companies-list {
    display: flex;
    position: relative;
  }

  .company {
    padding: 30px 0px;
    margin: 10px;
  }

  .brand {
    width: 168px;
    height: 60px;
  }

  .circle-btns {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 15px;

    .btn {
      width: 12px;
      height: 12px;
      background: ${props => props.theme.colors.companyDot};
      border-radius: 50%;
      cursor: pointer;
      position: relative;

      :hover {
        background: ${props => props.theme.colors.companyDotActive};
      }
    }
  }

  @media screen and (max-width: 940px) {
    .companies-content {
      width: 90vw;
    }

    .brand {
      width: auto;
      height: auto;
    }
  }

  @media screen and (max-width: 410px) {
    .brand {
      width: 80vw;
    }
  }
`

export default Container
