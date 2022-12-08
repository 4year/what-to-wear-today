// Home
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { convertDate, getWeatherData } from '../utils/weather';
import { getCityName } from './../utils/city/index';
import Header from './../components/Header';
import Dresses from '../components/Dresses';
import WeatherContainer from '../components/weather/WeatherContainer';
import SideBar from '../components/sideBar/SideBar';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [scroll, setScroll] = useState('');

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
        title: `${convertDate(WEATHER)}\n현재 날씨: ${Math.round(WEATHER.main.temp)}°C`,
        description: shareDesc,
        [`${shareImages.length === 1 ? 'img' : 'img1'}`]: shareImages[0],
        [`${shareImages.length !== 1 && 'img2'}`]: shareImages[1],
      },
    });
  }, [WEATHER]);

  // 스크롤 이벤트
  const handleScroll = e => {
    const scrollTop = e.target.scrollTop; // 0(start) ~ 352(end)

    if (scrollTop >= 352) {
      setScroll('scrollEnd');
    } else if (scrollTop === 0) {
      setScroll('');
    } else {
      setScroll('scroll');
    }
  };

  // localStorage에 저장된 지역목록 가져오기
  let cityList = JSON.parse(localStorage.getItem('CityList'));

  // 현재 위치 정보 추가 및 sorting
  cityList &&= cityList
    .map(item => {
      if (item.className) {
        delete item.className;
      }
      if (item.name === cityName) {
        item.className = 'current';
      }
      return item;
    })
    .sort((a, b) => b.hasOwnProperty('className') - a.hasOwnProperty('className'));

  // 새로 바꾼 cityList 다시 localStorage에 저장
  localStorage.setItem('CityList', JSON.stringify(cityList));

  return (
    <HomeContainer onScroll={handleScroll} className={modalVisible && 'openModal'}>
      <Header location={cityName} openModal={openModal} onShare={kakaoShare} />
      <main>
        <Dresses temperature={Math.round(WEATHER.main.temp)} />
        <WeatherContainer className="weatherContainer" weather={WEATHER} scroll={scroll} weekly={WEEKLYWEATHER} />
      </main>
      {modalVisible && <SideBar scroll={scroll} onClose={closeModal} />}
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &.openModal {
    overflow: hidden;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  main {
    height: calc(100% - 3rem);
  }
`;

export default Home;
