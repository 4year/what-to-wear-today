// 로딩 페이지
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { API_KEY } from '../config';
import { useNavigate } from 'react-router-dom';
// import Crontab from 'reactjs-crontab';

const loadingImg = process.env.PUBLIC_URL + '/images/loading.gif';

const Loading = () => {
  const navigate = useNavigate();

  // 현재 위치 가져오기
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude; // 위도
      const lon = position.coords.longitude; // 경도
      getCurrentWeather(lat, lon);
    });
  };

  // 현재 날씨 가져오기
  const getCurrentWeather = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;

    try {
      const result = await fetch(url).then(response => response.json());

      getWeeklyWeather(lat, lon, result);
      // 날씨 정보 보내기
    } catch (error) {
      console.error(error);
    }
  };

  //주간 날씨 가져오기
  const getWeeklyWeather = setInterval(async (lat, lon, result) => {
    const weeklyUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;

    try {
      const weeklyResult = await fetch(weeklyUrl).then(response =>
        response.json()
      );
      navigate('/home', {
        replace: false,
        state: {
          result,
          weeklyResult,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }, 86400);

  // const tasks = [
  //   {
  //     fn: getWeeklyWeather,
  //     id: '2',
  //     config:
  //       '0 0,1,2,4,3,5,6,7,9,8,10,11,12,19,18,22,21,20,23,17,16,15,13 * * *',
  //     name: '',
  //     description: '',
  //   },
  // ];

  // api fetching 후 페이지 이동
  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    // <Crontab tasks={tasks} timeZone="Asia/Seoul" dashboard={{ hidden: false }}>
    <LoadingContainer>
      <img src={loadingImg} alt="loading" />
    </LoadingContainer>
    // </Crontab>
  );
};

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export default Loading;
