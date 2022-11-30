// 지역 목록 item - 지역 이름
import React from 'react';
import styled from 'styled-components';

const LocationList = ({ name, lat, lon, onClick }) => {
  return (
    <List onClick={() => onClick(lat, lon, name)}>
      <h4>{name}</h4>
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid black;
  border-radius: 15px;
  padding: 2px 20px;
  margin: 0 8px;
  margin-bottom: 15px;
  cursor: pointer;

  h4 {
    font-size: 12px;
  }

  .temp {
    width: 50px;
    display: flex;
    justify-content: space-between;

    span {
      font-size: 15px;
    }
  }
`;
export default LocationList;
