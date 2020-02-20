import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }

  body {
    background: #fefefe;
    height: 100vh;
    margin: 0 auto;
    max-width: 500px;
    overscroll-behavior: none;
    width: 100%; 
  }

  input {
    background: #fafafa;
    border: 1px solid #dbdbdb;
    padding: 10px;
    margin: 10px 0;
    border-radius: 3px;
    color: #262626;
    display: flex;
    flex-direction: row;
    font-size: 14px;
    position: relative;
    width: 100%;
    align-items:center;
    &:focus {
      outline: none;
      border: 1px solid #b2b2b2;
    }
    &[disabled] {
      opacity: 0.3;
    }
  }

  #app {
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px;
  }
`
