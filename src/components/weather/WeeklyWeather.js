// 이번주 날씨 Container
import React from 'react';
import styled from 'styled-components';
import { TbTemperature } from 'react-icons/tb';
import { TiWeatherSunny, TiWeatherShower } from 'react-icons/ti';

const WeeklyWeather = ({ weekly }) => {
  //내일 날씨 리스트
  const oneDayList = weekly.list.slice(6, 15);

  //모레 날씨 리스트
  const twoDayList = weekly.list.slice(14, 23);

  const hour = [0, 3, 6, 9, 12, 15, 18, 21, 24];

  //내일 날씨 리스트 렌더링
  const postList = oneDayList.map((data, idx) => (
    <WrapList key={idx}>
      <p>{Math.round(data.main.temp)}°C</p>
      <img
        style={{ width: '50px', height: '50px' }}
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
      <span>{hour[idx]}시</span>
    </WrapList>
  ));

  //모레 날씨 리스트 렌더링
  const twoPostList = twoDayList.map((data, idx) => (
    <WrapList key={idx}>
      <p>{Math.round(data.main.temp)}°C</p>
      <img
        style={{ width: '50px', height: '50px' }}
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
      <span>{hour[idx]}시</span>
    </WrapList>
  ));
  console.log(twoDayList);
  console.log(oneDayList);

  return (
    <>
      {/* 내일 */}
      <Container>
        <Title>
          <h3>내일</h3>
          <div>
            <TbTemperature size="18px" />
            <TiWeatherSunny size="18px" />
            <TiWeatherShower size="18px" />
          </div>
        </Title>
        <Wrap>{postList}</Wrap>
      </Container>
      {/* 모레 */}
      <Container>
        <Title>
          <h3>모레</h3>
          <div>
            <TbTemperature size="18px" />
            <TiWeatherSunny size="18px" />
            <TiWeatherShower size="18px" />
          </div>
        </Title>
        <Wrap>{twoPostList}</Wrap>
      </Container>
    </>
  );
};

const Container = styled.div`
  /* height: 28%; */
  width: 90%;
  margin: 5px 20px;
  padding: 7px 5px;
  background-color: rgb(255 255 255 / 20%);
  border-radius: 20px;
  font-size: 16px;
`;

const Wrap = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  height: 150px;

  ::-webkit-scrollbar {
    height: 15px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    height: 20px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    margin: 20px;
  }
`;

const WrapList = styled.div`
  margin: -10px 20px;
  line-height: 20px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 23px;
  height: 40px;

  h3 {
    font-size: 14px;
    font-weight: bold;
    /* padding-right: 200px; */
  }
`;

export default WeeklyWeather;
