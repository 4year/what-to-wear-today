// Home

import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './../components/Header';
import Dresses from '../components/Dresses';
import WeatherContainer from '../components/weather/WeatherContainer';
import SideBar from '../components/sideBar/SideBar';
import { registerDragEvent } from '../utils/drag';
import { inrange } from './../utils/drag';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [dragUp, setDragUp] = useState(0);

  // 날씨 정보 받아오기
  const location = useLocation();
  const WEATHER = location.state.result;

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <HomeContainer>
      <Header location={WEATHER.name} openModal={openModal} />
      <main
        // dragUp 이벤트
        {...registerDragEvent({
          onDragStart: (moveX, moveY) => {
            // console.log(moveY);
            setDragUp(inrange(moveY, -100, 0));
          },
          onDragEnd: (moveX, moveY) => {
            if (moveY <= -100) {
              setDragUp(1);
            } else {
              setDragUp(0);
            }
          },
        })}
      >
        <Dresses temperature={Math.round(WEATHER.main.temp)} />
        <WeatherContainer weather={WEATHER} dragUp={dragUp} />
      </main>
      {modalVisible && <SideBar onClose={closeModal} />}
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-align: center;

  main {
    height: calc(100% - 3rem);
    margin-top: 3rem;
  }
`;

export default Home;
