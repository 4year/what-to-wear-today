// 주소 검색 결과 container
import React from 'react';
import LocationList from '../sideBar/LocationList';

const SearchResult = ({ cityList }) => {
  return (
    <div>
      {cityList.map(location => (
        <LocationList key={location.id} {...location} />
      ))}
    </div>
  );
};

export default SearchResult;
