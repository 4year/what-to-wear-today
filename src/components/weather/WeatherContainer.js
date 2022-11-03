// weather container
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 393px;
  border: 3px solid black;
  margin: 0 auto;
  font-size: 20px;
  line-height: 50px;
  font-weight: 600;

  .temp {
    color: navy;
    font-weight: bold;
  }
`;

const WeatherContainer = () => {
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

  return (
    <Container>
      <div className="location-box">
        <div className="location">Republic of Korea</div>
        <div className="date">{dateBuilder(new Date())}</div>
      </div>
      {/* <img src="" alt="sunny">  이미지 첨부 예정 */}
      <div className="weather-box">
        <div className="temp">15°C</div>
        {/* 기온은 날씨api 받아서 사용  */}
        <div className="weather">{Day(new Date())}</div>
      </div>
    </Container>
  );
};

export default WeatherContainer;
