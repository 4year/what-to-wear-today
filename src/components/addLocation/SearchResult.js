// 주소 검색 결과 container
import React from 'react';
import LocationList from '../sideBar/LocationList';
import { useNavigate } from 'react-router-dom';

const SearchResult = ({ cityList }) => {
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
    <div>
      {cityList.map(location => (
        <LocationList key={location.id} {...location} onClick={addLocation} />
      ))}
    </div>
  );
};

export default SearchResult;
