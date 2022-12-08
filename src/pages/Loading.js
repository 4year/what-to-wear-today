// 로딩 페이지
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { API_KEY } from '../config';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCityName } from '../utils/city';

const loadingImg = process.env.PUBLIC_URL + '/images/loading.gif';

const Loading = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // 지역목록 클릭하여 넘어오면 isFirstLoading === false
  const isFirstLoading = location.state?.isFirstLoading ?? true;

  // 현재 위치 가져오기
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude; // 위도
      const lon = position.coords.longitude; // 경도
      getCurrentWeather(lat, lon);
    });
  };

  // 현재 날씨 가져오기
  const getCurrentWeather = async (lat, lon, name) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;

    try {
      const result = await fetch(url).then(response => response.json());

      // name값이 없으면 id를 이용해 지역이름 -> 한국어로 변경
      name ??= getCityName(result.id);

      // localStorage에 지역 목록 추가
      let prevCityList = JSON.parse(localStorage.getItem('CityList')) || [];

      // 이미 있는 지역이면 추가 안 되게
      prevCityList &&= prevCityList.filter(city => city.name !== name);

      const storeCityList = [
        ...prevCityList,
        {
          name: name,
          lat: lat,
          lon: lon,
          temp: Math.round(result.main.temp),
          icon: result.weather[0].icon,
        },
      ];

      localStorage.setItem('CityList', JSON.stringify(storeCityList));

      // 현재 위치 주간 날씨 가져오기
      getWeeklyWeather(lat, lon, result);
    } catch (error) {
      console.error(error);
    }
  };

  //주간 날씨 가져오기
  const getWeeklyWeather = async (lat, lon, result) => {
    const weeklyUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;

    try {
      const weeklyResult = await fetch(weeklyUrl).then(response => response.json());
      // home으로 이동
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
  };
  console.log(getWeeklyWeather);

  // api fetching 후 페이지 이동
  useEffect(() => {
    // 첫 로딩이면 getCurrentLocation, 아니면 getCurrentWeather
    if (isFirstLoading) {
      // localStorage CityList에 current가 있는지 확인
      const currentCity = JSON.parse(localStorage.getItem('CityList')).find(item => item.className === 'current');

      if (currentCity) {
        getCurrentWeather(currentCity.lat, currentCity.lon, currentCity.name);
      } else {
        getCurrentLocation();
      }
    } else {
      // localStorage에서 선택된 지역정보 가져오기기
      const { lat, lon, name } = JSON.parse(localStorage.getItem('SelectedLocation'));
      getCurrentWeather(lat, lon, name);
    }
  }, []);

  return (
    <LoadingContainer>
      <img src={loadingImg} alt="loading" />
    </LoadingContainer>
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
