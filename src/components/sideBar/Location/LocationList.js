// 지역 목록 item
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const LocationList = ({ location, onClick, checked }) => {
  const navigate = useNavigate();
  const { name, icon, temp, lat, lon, className } = { ...location };

  // 지역 리스트 클릭 시,
  // 1. 해당 지역의 위도 경도를 localStorage에 저장
  // 2. loading navigate
  const addLocation = (lat, lon, name) => {
    localStorage.setItem('SelectedLocation', JSON.stringify({ lat, lon, name }));
    navigate('/', {
      replace: false,
      state: {
        isFirstLoading: false,
      },
    });
  };

  const handleClick = () => {
    if (onClick) {
      onClick(checked, location);
    } else {
      addLocation(lat, lon, name);
    }
  };

  return (
    <List onClick={handleClick} className={className}>
      <h4>{name}</h4>
      {icon && (
        <div className="weather">
          <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon" />
          {temp}°C
        </div>
      )}
    </List>
  );
};

const List = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  margin-bottom: 15px;
  padding: 2px 20px;
  border: 2px solid black;
  border-radius: 15px;
  cursor: pointer;

  &.current {
    background-color: lightblue;

    &::before {
      content: '현재 위치';
      position: absolute;
      top: -12px;
      left: -10px;
      padding: 3px 10px;
      font-size: 12px;
      font-weight: bold;
      background: white;
      border-radius: 10px;
      border: 2px solid black;
    }
  }

  h4 {
    font-size: 12px;
  }

  .weather {
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;

    img {
      width: 40px;
      padding: 0 10px;
    }
  }
`;
export default LocationList;
