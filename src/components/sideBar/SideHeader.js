// < 지역목록  + 버튼
import React from 'react'
import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import { HiOutlinePlus } from 'react-icons/hi';

const SideHeader = ({ close, onClickLocationPlus }) => { 
  return (
    <div>
      <Header>
        <IoIosArrowBack 
          className="modal-close" 
          size="20px" 
          onClick={close} 
          />
          <h3>지역목록</h3>
          <HiOutlinePlus 
          className="add-list" 
          size="20px" 
          onClick={onClickLocationPlus} 
          />
      </Header>       
    </div>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  /* background-color: tomato; */
  align-items: center;
  margin-bottom: 20px;  
  .modal-close{
    cursor: pointer;
  }
  .add-list{
    cursor: pointer;
  }
`

export default SideHeader;
