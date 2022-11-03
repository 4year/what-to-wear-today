// < 지역목록  + 버튼
import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { HiOutlinePlus } from 'react-icons/hi';
import styled from 'styled-components';

const SideHeader = () => {
	return (
    <div>
      <Header>
        <IoIosArrowBack size="25px"/>
        <h3>지역목록</h3>
        <HiOutlinePlus size="25px"/>
      </Header>      
    </div>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  /* background-color: tomato; */
  align-items: center;
  margin-bottom: 30px;
`

export default SideHeader;
