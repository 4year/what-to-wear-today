// 사이드 바
import React, { useState } from 'react';
import styled from 'styled-components';
import SideHeader from './SideHeader';
import SearchBar from '../addLocation/SearchBar';
import CurrentLocation from './CurrentLocation';

const SideBar = ({ onClose, cityName, weather }) => {
  // 검색창 보여주는 상태값
  const [search, setSearch] = useState(false);

  const onClickLocationPlus = () => {
    setSearch(true);
  };

  const onClickLocationCancel = () => {
    setSearch(false);
  };

  const onMaskClick = e => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  return (
    <SidebarContainer>
      <ModalOverlay onClick={onMaskClick} />
      <ModalWrapper>
        <SideHeader close={onClose} onClickLocationPlus={onClickLocationPlus} />
        {search ? (
          <SearchBar hide={onClickLocationCancel} />
        ) : (
          <CurrentLocation cityName={cityName} weather={weather} />
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
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
`;

export default SideBar;
