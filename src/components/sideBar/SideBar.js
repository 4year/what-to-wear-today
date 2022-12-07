// 사이드 바
import React, { useState } from 'react';
import styled from 'styled-components';
import SideHeader from './SideHeader';
import SearchBar from './Location/SearchBar';
import RemoveLocaiotn from './Location/RemoveLocaiotn';
import LocationList from './Location/LocationList';

const SideBar = ({ scroll, onClose, cityName }) => {
  // 검색창 보여주는 상태값
  const [search, setSearch] = useState(false);
  const [remove, setRemove] = useState(false);

  const onClickPlus = () => {
    setSearch(true);
  };

  const onClickMinus = () => {
    setRemove(true);
  };

  const onClickCancel = () => {
    setSearch(false);
    setRemove(false);
  };

  const onMaskClick = e => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  // localStorage에 저장된 지역목록 가져오기
  let cityList = JSON.parse(localStorage.getItem('CityList'));

  // 현재 위치 정보 추가 및 sorting
  cityList &&= cityList
    .map(item => {
      if (item.name === cityName) {
        item.className = 'current';
      }
      return item;
    })
    .sort((a, b) => b.hasOwnProperty('className') - a.hasOwnProperty('className'));

  return (
    <SidebarContainer className={scroll === 'scrollEnd' && 'top50'}>
      <ModalOverlay onClick={onMaskClick} />
      <ModalWrapper>
        <SideHeader close={onClose} onClickPlus={onClickPlus} onClickMinus={onClickMinus} />
        {search ? (
          <SearchBar hide={onClickCancel} />
        ) : remove ? (
          <RemoveLocaiotn hide={onClickCancel} cityList={cityList} />
        ) : (
          <LocationContainer>
            {cityList.map((location, idx) => (
              <LocationList key={idx} {...location} />
            ))}
          </LocationContainer>
        )}
      </ModalWrapper>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;

  &.top50 {
    top: 50%;
  }
`;

const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 70%;
  height: 100%;
  padding: 0 10px;
  background-color: #fff;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
`;

const LocationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default SideBar;
