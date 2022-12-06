// Home
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { registerDragEvent, inrange } from '../utils/drag';
import { convertDate, getWeatherData } from '../utils/weather';
import Header from './../components/Header';
import Dresses from '../components/Dresses';
import WeatherContainer from '../components/weather/WeatherContainer';
import SideBar from '../components/sideBar/SideBar';
import { getCityName } from './../utils/city/index';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [dragUp, setDragUp] = useState(0);

  // 날씨 정보 받아오기
  const location = useLocation();
  const WEATHER = location.state.result;
  const WEEKLYWEATHER = location.state.weeklyResult;
  const cityName = getCityName(WEATHER.id);

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
    const shareData = getWeatherData(Math.round(WEATHER.main.temp));
    const shareImages = shareData.images;
    const shareDesc = shareData.desc;

    window.Kakao.Share.sendCustom({
      templateId: shareImages.length === 1 ? 86217 : 86200,
      templateArgs: {
        title: `${convertDate(WEATHER)}\n현재 날씨: ${Math.round(
          WEATHER.main.temp
        )}°C`,
        description: shareDesc,
        [`${shareImages.length === 1 ? 'img' : 'img1'}`]: shareImages[0],
        [`${shareImages.length !== 1 && 'img2'}`]: shareImages[1],
      },
    });
  }, [WEATHER]);

  return (
    <HomeContainer>
      <Header location={cityName} openModal={openModal} onShare={kakaoShare} />
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
        <WeatherContainer
          weather={WEATHER}
          dragUp={dragUp}
          weekly={WEEKLYWEATHER}
        />
      </main>
      {modalVisible && <SideBar onClose={closeModal} cityName={cityName} />}
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
