// 주소 검색창
import React, { useState } from 'react';
import styled from 'styled-components';
import { searchCityList } from '../../../utils/city';
import SearchResult from './SearchResult';

const SearchBar = ({ hide }) => {
  // 유저가 검색하는 검색어 저장하는 곳
  const [userInput, setUserInput] = useState('');

  // SearchBar input에 입력되는 값들을 저장하는 역할.
  const handleChange = e => {
    setUserInput(e.target.value);
  };

  const filterLocationListData = searchCityList.filter(list => {
    return list.name.includes(userInput);
  });

  return (
    <SearchLocation>
      <div className="search-bar">
        <input
          type="text"
          placeholder="도시명(city)으로 검색"
          value={userInput}
          onChange={handleChange}
        ></input>
        <button onClick={hide}>취소</button>
      </div>
      {userInput && <SearchResult cityList={filterLocationListData} />}
    </SearchLocation>
  );
};

const SearchLocation = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  padding: 25px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(245, 245, 245, 0.5);
  backdrop-filter: blur(5px);

  .search-bar {
    width: 100%;
    margin-bottom: 20px;

    input {
      position: relative;
      top: 0px;
      width: 60%;
      height: 15px;
      padding: 8px 14px;
      border: 0;
      outline: none;
      border-radius: 20px;
      background-color: #dcdcdc;
      box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.25);
    }

    button {
      box-sizing: border-box;
      background: none;
      border: none;
      box-shadow: none;
      border-radius: 0;
      padding: 10px;
      overflow: visible;
      cursor: pointer;
      position: absolute;
      height: 30px;
      top: 22px;
      right: 7px;
      text-align: center;
      font-size: 12px;
    }
  }
`;

export default SearchBar;
