import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import LocationList from './LocationList';

const RemoveLocaiotn = ({ hide, cityList }) => {
  const [checkedList, setCheckedLists] = useState([]);

  // 전체 체크 클릭 시
  const onCheckedAll = useCallback(
    checked => {
      if (checked) {
        const checkedListArray = [];

        cityList.forEach(list => checkedListArray.push(list));

        setCheckedLists(checkedListArray);
      } else {
        setCheckedLists([]);
      }
    },
    [cityList],
  );

  // 개별 체크 클릭 시
  const onCheckedElement = useCallback(
    (checked, list) => {
      if (checked) {
        setCheckedLists([...checkedList, list]);
      } else {
        setCheckedLists(checkedList.filter(el => el !== list));
      }
    },
    [checkedList],
  );

  // 삭제 버튼 클릭 시

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
          <button className="removeBtn">삭제</button>
          <button onClick={hide}>취소</button>
        </div>
      </Header>
      <List>
        {cityList.map((location, idx) => (
          <div className="location-list">
            <input
              type="checkBox"
              onChange={e => onCheckedElement(e.target.checked, location)}
              checked={checkedList.includes(location) ? true : false}
            />
            <LocationList key={idx} {...location} />
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
    font-size: 20px;
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

export default RemoveLocaiotn;
