import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LocationList from './LocationList';

const RemoveLocation = ({ hide }) => {
  const [checkedList, setCheckedLists] = useState([]);
  const navigate = useNavigate();

  // localStorage에서 CityList 받아오기
  const cityList = JSON.parse(localStorage.getItem('CityList'));

  // 전체 체크 클릭 시
  const onCheckedAll = useCallback(
    checked => {
      if (checked) {
        const checkedListArray = [];

        cityList.forEach(list => checkedListArray.push(list.name));

        setCheckedLists(checkedListArray);
      } else {
        setCheckedLists([]);
      }
    },
    [cityList],
  );

  // 개별 체크 클릭 시
  const onCheckedElement = (checked, city) => {
    if (checked) {
      setCheckedLists([...checkedList, city]);
    } else {
      setCheckedLists(checkedList.filter(el => el !== city));
    }
  };

  // 삭제 버튼 클릭 시
  const onClickRemove = () => {
    if (checkedList.length !== 0) {
      const answer = window.confirm('삭제하시겠습니까?');
      if (answer) {
        const newCityList = cityList.filter(el => !checkedList.includes(el.name));
        // console.log(">>>> new cityList :", newCityList);
        localStorage.setItem('CityList', JSON.stringify(newCityList));
        // 로딩 페이지로 이동
        navigate('/', {
          replace: false,
          state: {
            isFirstLoading: true,
          },
        });
      }
    }
  };
  return (
    <Container>
      <Header>
        <input
          type="checkBox"
          onChange={e => onCheckedAll(e.target.checked)}
          checked={checkedList.length === 0 ? false : checkedList.length === cityList.length ? true : false}
        />
        <h4>지역 목록 삭제</h4>
        <div>
          <button className="removeBtn" onClick={onClickRemove}>
            삭제
          </button>
          <button onClick={hide}>취소</button>
        </div>
      </Header>
      <List>
        {cityList.map((location, idx) => (
          <div className="location-list">
            <input
              key={'checkbox' + idx}
              type="checkBox"
              value={location.name}
              onChange={e => onCheckedElement(e.target.checked, location.name)}
              checked={checkedList.includes(location.name) ? true : false}
            />
            <LocationList
              key={idx}
              location={location}
              onClick={onCheckedElement}
              checked={checkedList.includes(location.name) ? false : true}
            />
          </div>
        ))}
      </List>
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
    cursor: pointer;
  }
`;

const Header = styled.div`
  width: 88%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 20px;
  border-bottom: 2px solid black;

  h4 {
    font-size: 90%;
  }

  button {
    background: none;
    border-radius: 20px;
    padding: 5px 7px;
    cursor: pointer;

    &.removeBtn {
      margin-right: 10px;
    }
  }
`;

const List = styled.div`
  width: 90%;

  .location-list {
    display: flex;
    justify-content: center;
    align-items: center;

    input {
      margin-bottom: 15px;
    }
  }
`;

export default RemoveLocation;
