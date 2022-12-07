// 주소 검색 결과 container
import React from 'react';
import styled from 'styled-components';
import LocationList from './LocationList';

const SearchResult = ({ cityList }) => {
  return (
    <ResultContainer>
      {cityList.map(location => (
        <LocationList key={location.id} {...location} />
      ))}
    </ResultContainer>
  );
};

const ResultContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  overflow: auto;
`;

export default SearchResult;
