// main header
import React from 'react';
import styled from 'styled-components';
import { IoShareOutline } from 'react-icons/io5';
import { BiMenuAltRight } from 'react-icons/bi';

const Header = ({ onShare, openModal, location }) => {
  return (
    <HeaderContainer>
      <span>{location}</span>
      <div className="iconBox" data-html2canvas-ignore>
        <IoShareOutline className="icon" onClick={onShare} />
        <BiMenuAltRight className="icon" onClick={openModal} />
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3rem;
  padding: 5px 0;
  border-bottom: 1px solid #00000021;
  z-index: 999;

  span {
    font-size: 20px;
    padding: 0 20px;
  }

  .iconBox {
    .icon {
      padding: 10px 15px;
      font-size: 25px;
      cursor: pointer;

      &:last-child {
        transform: rotateX(180deg);
      }
    }
  }
`;

export default Header;
