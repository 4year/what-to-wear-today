// weather container
import React from "react";
import styled from "styled-components";
import { WeatherData } from "../../WeatherData";
import WeeklyWeather from "./WeeklyWeather";

const Container = styled.div`
  width: 393px;
  height: 345px;
  margin: 0 auto;
  font-size: 20px;
  line-height: 50px;
  font-weight: 600;
  background-color: ${(props) => props.background};

  .temp {
    color: navy;
    font-weight: bold;
  }
`;

const CurrentWeather = styled.div`
  height: 100%;
`;

const WeatherContainer = ({ weather }) => {
  const dateBuilder = (d) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${date} ${month} ${year}`;
  };

  const Day = () => {
    const week = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let now = new Date();
    let dayOfWeek = week[now.getDay()];
    return `${dayOfWeek}`;
  };

  const temperature = Math.round(weather.main.temp - 273.15);
  const background = WeatherData.find((data) => {
    return data.temp.indexOf(temperature) !== -1 && data.background;
  });

  return (
    <Container background={background}>
      <div className="wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#FFFFFF"
            fillOpacity="1"
          ></path>
        </svg>
        <CurrentWeather>
          <div className="location-box">
            <div className="location">{weather.name}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
          <p>{weather.weather[0].description}</p>
          <div className="weather-box">
            <div className="temp">{temperature}°C</div>
            <div className="weather">{Day(new Date())}</div>
          </div>
        </CurrentWeather>
      </div>
      <WeeklyWeather />
    </Container>
  );
};

export default WeatherContainer;
