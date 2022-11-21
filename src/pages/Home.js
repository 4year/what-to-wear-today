// Home
import React, { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { registerDragEvent, inrange } from '../utils/drag';
import { convertDate, convertTemp, getWeatherData } from '../utils/weather';
import Header from './../components/Header';
import Dresses from '../components/Dresses';
import WeatherContainer from '../components/weather/WeatherContainer';
import SideBar from '../components/sideBar/SideBar';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [dragUp, setDragUp] = useState(0);

  const homeRef = useRef();

  // 날씨 정보 받아오기
  const location = useLocation();
  const WEATHER = location.state.result;

  // 모달
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  // 카카오 공유하기
  const kakaoShare = useCallback(() => {
    // 공유할 옷 정보
    const shareData = getWeatherData(convertTemp(WEATHER.main.temp));
    const shareImages = shareData.images;
    const shareDesc = shareData.desc;

    window.Kakao.Share.sendCustom({
      templateId: 86200,
      templateArgs: {
        title: `${convertDate(WEATHER.dt)}\n현재 날씨: ${convertTemp(
          WEATHER.main.temp
        )}°C`,
        description: shareDesc,
        img1: shareImages[0],
        img2: shareImages[1] || 'https://i.ibb.co/3YmZK5n/logo.png', // 두번째 이미지 없으면 로고
      },
    });
  }, [WEATHER]);

  return (
    <HomeContainer ref={homeRef}>
      <Header
        location={WEATHER.name}
        openModal={openModal}
        onShare={kakaoShare}
      />
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
  background-color: #fff;

  main {
    height: calc(100% - 3rem);
    margin-top: 3rem;
  }
`;

export default Home;
