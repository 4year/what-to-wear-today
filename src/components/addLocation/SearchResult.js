// 주소 검색 결과 container
import React from 'react';
import LocationList from '../sideBar/LocationList';

const SearchResult = ({ cityList }) => {
	return (
    <div>
      {cityList.map((locationList) => (
        <LocationList key={locationList.id} {...locationList} />
      ))}
    </div>
  )
};

export default SearchResult;
