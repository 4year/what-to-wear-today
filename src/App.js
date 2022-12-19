import React from 'react';
import styled from 'styled-components';
import Loading from './pages/Loading';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <AppContainer className="App">
      <Routes>
        <Route path="/" element={<Loading />} basename="/what-to-wear-today" />
        <Route path="/home" element={<Home />} basename="/what-to-wear-today" />
      </Routes>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 600px;
  min-width: 390px;
  /* max-height: 844px; */
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 54%) 0px 1px 2px;
  /* 텍스트 드래그 방지 */
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

export default App;
