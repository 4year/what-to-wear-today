// < 지역목록  + 버튼
import React from 'react'
import styled from 'styled-components';

const SideHeader = ({ children }) => { 
  return (
    <div>
      <Header>
        {children}
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
