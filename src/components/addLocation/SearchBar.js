// 주소 검색창
import React from "react";
import styled from "styled-components";

const SearchBar = ({ show, hide, handleChange }) => {
  
  return (
    <div>
      {show && (
        <SearchLocation>          
          <input
            className="search-input"
            type="text"
            placeholder="도시명(city)으로 검색"
            defaultValue={handleChange}
          ></input>
          <button 
            className="search-cancel"
            onClick={hide}
            >취소
          </button>          
        </SearchLocation>
      )}
      
    </div>
  );
};

const SearchLocation = styled.div`
  width: 100%;
  height: 852px;
  box-sizing: border-box ;
  position: absolute;
  top: 0;  
  right: 0;
  padding: 25px 20px;  
  display: flex;
  background-color: rgba(245, 245, 245, 0.5); 
  backdrop-filter: blur(5px);  
  .search-input {
    position: relative;
    top: 0px;
    width: 75%;
    height: 15px;
    padding: 8px 14px;
    border: 0;
    outline: none;
    border-radius: 20px;
    background-color: #dcdcdc;
    box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.25);
  }
  .search-cancel{
    box-sizing: border-box;
    background: none; 
    /* background-color: tomato; */
    border:none; 
    box-shadow:none; 
    border-radius:0; 
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
`;

export default SearchBar;
