import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './useGlobalContext';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0%;
    box-sizing: border-box;
  }

  *::-webkit-scrollbar{
    width: 0;
  }

  *::selection {
    color: #fff;
    background: #c97323;
  }

  html {
    scroll-behavior: smooth;
    --logo-font: 'Monoton', cursive;
    --main-font: 'Raleway', sans-serif;
    --accent-color: #c97323;
    --bg-color: #1b1b1b;
  }

  body {
    font-family: var(--main-font);
    background: var(--bg-color);
    color: #fff;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-family: inherit;
    display: inline-block;
  }
  a:focus {
    outline: 1px solid rgba(255,255,255,0.5);
    outline-offset: 5px;
  }

  a:focus:not(:focus-visible) {
    outline: none;
  }

  li {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
  button:focus {
    outline: 1px solid rgba(255,255,255,0.5);
    outline-offset: 3px;
  }

  button:focus:not(:focus-visible) {
    outline: none;
  }

  svg {
    pointer-events: none;
  }

`

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <GlobalStyle/>
        <App />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
