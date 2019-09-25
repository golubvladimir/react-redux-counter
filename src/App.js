import React from 'react';
import { createGlobalStyle } from 'styled-components';
import MainContainer from './Containers/MainContainer';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
  }
`;

function App() {
  return (
    <>
      <MainContainer />
      <GlobalStyle />
    </>
  );
}

export default App;
