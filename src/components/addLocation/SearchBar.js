// 주소 검색창
import React from "react";
import styled from "styled-components";
import { IoIosArrowBack } from 'react-icons/io';


const SearchBar = ({ show }) => {
  return (
    <div>
     {show && (
      <SearchLocation>
        {/* <IoIosArrowBack/> */}
        <input 
          className="search-input" 
          type="text" 
          placeholder="내 동네 이름 (동,읍,면)으로 검색">
        </input>
      </SearchLocation>
     )}
    </div>
  );
};

const SearchLocation = styled.header`  
  display: flex;
  align-items: center;  
  .search-input{
    width: 320px;
    padding: 8px 14px;
    border: 0;
    border-radius: 20px;
    background-color: #F2F2F2;
    margin-bottom: 10px;    
  }

`

export default SearchBar;
