// weather container
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { convertDate, getWeatherData } from '../../utils/weather';
import WeeklyWeather from './WeeklyWeather';

const WeatherContainer = ({ weather, scroll, weekly }) => {
  const temperature = Math.round(weather.main.temp);
  const background = getWeatherData(temperature).background;

  return (
    <Container className={scroll} background={background}>
      <WaveContianer className={scroll} />
      <CurrentWeather className={scroll}>
        <div className="date">{convertDate(weather)}</div>
        <div className="weather">
          {temperature}°C
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon" />
          {weather.weather[0].description}
        </div>
      </CurrentWeather>
      <WeeklyWeather weekly={weekly} />
    </Container>
  );
};

// animation
const wave = keyframes`
  0%{
    background-position-x: 0;
  }
  100%{
    background-position-x: 350px;
  }
`;

const waveHeight = keyframes`
  0%{
    background-position-x: 0;
    height: 10%;
  }
  100%{
    background-position-x: 350px;
    height: 0;
  }
`;

const scrollUpHeight = keyframes`
  0% {
    height: 90%;
    margin-top: 0;
  }
  100% {
    height: 35%;
    margin-top: 3rem;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 55%;
  width: 100%;
  height: 45%;
  font-size: 20px;
  line-height: 50px;
  font-weight: 600;
  background: ${props => props.background};

  &.scroll {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  &.scrollEnd {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
`;

const WaveContianer = styled.div`
  width: 100%;
  height: 10%;
  background: url(${process.env.PUBLIC_URL + './images/wave.png'});
  background-size: 350px 100%;

  &.scroll {
    animation: ${wave} 1s linear infinite;
  }

  &.scrollEnd {
    animation: ${waveHeight} 1s linear forwards;
  }
`;

const CurrentWeather = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90%;

  &.scrollEnd {
    animation: ${scrollUpHeight} 1s cubic-bezier(0.17, 0.81, 0.49, 0.97) forwards;
  }

  .weather {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default WeatherContainer;
