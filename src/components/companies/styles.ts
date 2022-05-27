import styled from 'styled-components'
import backgroundImg from '../../public/assets/companies/background.jpg'

const Container = styled.div`
  .companies {
    height: 306px;
    width: 100vw;
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
    width: 100vw;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
    top: 0;
  }

  .companies-content {
    width: 940px;
    overflow: hidden;
  }

  .companies-list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
`

export default Container
