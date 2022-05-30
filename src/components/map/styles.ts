import styled from 'styled-components'

const Container = styled.div`
  .maprouter {
    position: relative;
    text-align: right;
    height: 300px;
    width: 100vw;
  }

  .gmap_canvas {
    overflow: hidden;
    height: 300px;
    width: 100vw;
  }

  .close-map {
    width: 100vw;
    height: 42px;
    background: ${props => props.theme.colors.footerBackground};
    display: flex;
    justify-content: center;
    align-items: center;

    h6 {
      font: 400 12px 'Lato', sans-serif;
      text-align: center;
      letter-spacing: 1px;
      color: ${props => props.theme.colors.footerText};
      text-transform: uppercase;
      cursor: pointer;
    }
  }
`

export default Container
