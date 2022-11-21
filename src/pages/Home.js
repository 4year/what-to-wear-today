// Home
import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header from './../components/Header';
import Dresses from '../components/Dresses';
import WeatherContainer from '../components/weather/WeatherContainer';
import SideBar from '../components/sideBar/SideBar';
import { registerDragEvent, inrange } from '../utils/drag';
import html2canvas from 'html2canvas';
import { API_KEY_IMG } from '../config';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [dragUp, setDragUp] = useState(0);
  const [shareImg, setShareImg] = useState('');

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

  // 공유하기
  const copyDOM = async () => {
    await html2canvas(homeRef.current, { useCORS: true }).then(canvas => {
      const imgUrl = canvas.toDataURL('image/jpg').split(',')[1];
      uploadImgur(imgUrl);
    });
  };

  const uploadImgur = async imgUrl => {
    const form = new FormData();
    form.append('image', imgUrl);
    const url = `https://api.imgbb.com/1/upload?key=${API_KEY_IMG}`;

    try {
      const result = await fetch(url, {
        method: 'POST',
        body: form,
      }).then(response => response.json());
      setShareImg(result.data.url);
    } catch (error) {
      console.error(error);
    }
  };

  // const kakaoShare = () => {};

  return (
    <HomeContainer ref={homeRef}>
      <Header location={WEATHER.name} openModal={openModal} onShare={copyDOM} />
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
