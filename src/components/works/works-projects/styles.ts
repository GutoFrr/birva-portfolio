import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .works-projects {
    min-width: 0;
    max-width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
  }

  .project {
    width: 25%;
    height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    overflow: hidden;
    position: relative;
    cursor: pointer;

    .overlay {
      opacity: 0;
      transition: all 0.3s;
    }

    .project-content {
      z-index: 2;

      .content {
        z-index: 10;
        opacity: 0;
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
      width: 25vw;
      height: 25vw;
      background: palevioletred;
      position: absolute;
      z-index: 1;
    }

    :hover {
      .overlay {
        opacity: 1;
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.1);
        top: 0;
        z-index: 3;
      }

      .content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        opacity: 1;
      }
    }
  }
`

export default Container
