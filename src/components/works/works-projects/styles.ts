import styled from 'styled-components'

const Container = styled.div`
  .works-projects {
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
  }

  .project {
    width: 25vw;
    height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    overflow: hidden;
    position: relative;
    cursor: pointer;

    .project-content {
      position: static;
      z-index: 2;
      width: 100%;
      height: 100%;

      .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        opacity: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        transition: all 0.3s;

        h5 {
          font: 400 18px 'Lato', sans-serif;
          color: #fff;
          padding: 5px 0;
        }

        h6 {
          font: 200 14px 'Lato', sans-serif;
          color: #ddd;
          padding: 5px 0;
        }

        hr {
          background: ${props => props.theme.colors.carouselHr};
          border: medium none;
          height: 4px;
          margin: 20px auto;
          width: 30px;
        }
      }
    }

    .image {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    :hover {
      .content {
        opacity: 1;
      }
    }
  }
`

export default Container
