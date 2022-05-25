import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1.625em;

    ::selection {
      background: #000;
      color: #fff;
    }

    scroll-behavior: smooth;
  }

  html {
    -webkit-text-stroke: 0.25px;
  }

  body {
    background: ${props => props.theme.colors.background};
    overflow-x: hidden;
  }
`
