// 지역 목록 item
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const LocationList = ({ name, icon, temp, lat, lon }) => {
  const navigate = useNavigate();

  // 지역 리스트 클릭 시,
  // 1. 해당 지역의 위도 경도를 localStorage에 저장
  // 2. loading navigate
  const addLocation = (lat, lon, name) => {
    localStorage.setItem(
      'SelectedLocation',
      JSON.stringify({ lat, lon, name })
    );
    navigate('/', {
      replace: false,
      state: {
        isFirstLoading: false,
      },
    });
  };

  return (
    <List onClick={() => addLocation(lat, lon, name)}>
      <h4>{name}</h4>
      {icon && (
        <div className="weather">
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="weather icon"
          />
          {temp}°C
        </div>
      )}
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 8px;
  margin-bottom: 15px;
  border: 2px solid black;
  border-radius: 15px;
  padding: 2px 20px;
  cursor: pointer;

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
