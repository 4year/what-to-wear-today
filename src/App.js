import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { API_KEY } from './config';
import Loading from './pages/Loading';
import Home from './pages/Home';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState({});
  const [weekly, setWeekly] = useState({});

  // 현재 위치 가져오기
  const getCurrentLocation = useCallback(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude; // 위도
      const lon = position.coords.longitude; // 경도

      getCurrentWeather(lat, lon);
      getWeeklyWeather(lat, lon);
    });
  }, []);

  // 현재 날씨 가져오기
  const getCurrentWeather = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;

    try {
      const result = await fetch(url).then(response => response.json());
      console.log(result);
      setResult(result);
      setLoading(false); // 날씨 가져오기 성공하면 로딩 false
    } catch (error) {
      console.error(error);
    }
  };

  //주간 날씨 가져오기
  const getWeeklyWeather = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;

    try {
      const weekly = await fetch(url).then(response => response.json());
      console.log(weekly);
      setWeekly(weekly);
      setLoading(false); // 날씨 가져오기 성공하면 로딩 false
    } catch (error) {
      console.error(error);
    }
  };

  // 앱 마운트 시,
  useEffect(() => {
    getCurrentLocation();
    return () => {
      console.log('app unmounted');
    };
  }, [getCurrentLocation]);

  return (
    <AppContainer className="App">
      {loading ? <Loading /> : <Home weather={result} weekly={weekly} />}
    </AppContainer>
  );
};

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 390px;
  max-height: 844px;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 54%) 0px 1px 2px;
  /* 텍스트 드래그 방지 */
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

export default App;
