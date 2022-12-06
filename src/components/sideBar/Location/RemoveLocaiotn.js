import React from 'react';
import styled from 'styled-components';
import LocationList from './LocationList';

const RemoveLocaiotn = ({ hide, cityList }) => {
  return (
    <Container>
      <div className="header">
        <input type="checkBox" />
        <h4>지역 목록 삭제</h4>
        <div>
          <button className="removeBtn">삭제</button>
          <button onClick={hide}>취소</button>
        </div>
      </div>
      <div style={{ width: '90%' }}>
        {cityList.map((location, idx) => (
          <div className="location-list">
            <input type="checkBox" />
            <LocationList key={idx} {...location} />
          </div>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(245, 245, 245, 0.5);
  backdrop-filter: blur(5px);

  input {
    zoom: 1.5;
    margin-right: 10px;
  }

  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 2px solid black;

    h4 {
      font-size: 20px;
    }

    button {
      background: none;
      border-radius: 20px;
      padding: 5px 7px;
      cursor: pointer;

      &.removeBtn {
        margin-right: 5px;
      }
    }
  }

  .location-list {
    display: flex;
    justify-content: center;
    align-items: center;

    input {
      margin-bottom: 15px;
    }
  }
`;

export default RemoveLocaiotn;
