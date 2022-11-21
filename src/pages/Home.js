// Home
import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import html2canvas from 'html2canvas';
import { registerDragEvent, inrange } from '../utils/drag';
import { convertDate, convertTemp } from '../utils/weather';
import { API_KEY_IMG } from '../config';
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

  // 공유하기
  const onShare = async () => {
    // DOM to Image
    await html2canvas(homeRef.current, { useCORS: true }).then(canvas => {
      const imgUrl = canvas.toDataURL('image/jpg').split(',')[1];
      uploadImgur(imgUrl);
    });
  };

  // 이미지 호스팅
  const uploadImgur = async imgUrl => {
    const data = new FormData();
    data.append('image', imgUrl);
    const url = `https://api.imgbb.com/1/upload?key=${API_KEY_IMG}`;

    try {
      const result = await fetch(url, {
        method: 'POST',
        body: data,
      }).then(response => response.json());
      kakaoShare(result.data.url);
    } catch (error) {
      console.error(error);
    }
  };

  // 카카오 공유하기
  const kakaoShare = image => {
    console.log(image);
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `${convertDate(WEATHER.dt)}\n현재 날씨: ${convertTemp(
          WEATHER.main.temp
        )}°C`,
        description: '날씨에 따라 오늘 입을 옷을 추천',
        imageUrl: image,
        link: {
          mobileWebUrl: 'http://localhost:3000',
          webUrl: 'http://localhost:3000',
        },
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: 'http://localhost:3000',
            webUrl: 'http://localhost:3000',
          },
        },
        {
          title: '앱으로 보기',
          link: {
            mobileWebUrl: 'http://localhost:3000',
            webUrl: 'http://localhost:3000',
          },
        },
      ],
    });
  };

  return (
    <HomeContainer ref={homeRef}>
      <Header location={WEATHER.name} openModal={openModal} onShare={onShare} />
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
