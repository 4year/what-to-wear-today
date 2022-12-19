// < 지역목록  + 버튼
import React from 'react';
import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import { HiOutlinePlus, HiOutlineMinus } from 'react-icons/hi';

const SideHeader = ({ close, onClickPlus, onClickMinus }) => {
  return (
    <div>
      <Header>
        <IoIosArrowBack className="modal-close" onClick={close} />
        <h3>지역목록</h3>
        <div>
          <HiOutlinePlus className="list add-list" onClick={onClickPlus} />
          <HiOutlineMinus className="list remove-list" onClick={onClickMinus} />
        </div>
      </Header>
    </div>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #00000021;

  h4 {
    flex: 1;
    margin: 0;
  }

  .modal-close,
  .list {
    font-size: 20px;
    cursor: pointer;
    padding: 10px;
  }

  .add-list {
    padding-right: 20px;
  }

  .remove-list {
    padding-left: 0;
  }
`;

export default SideHeader;
