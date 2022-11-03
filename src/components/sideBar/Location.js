// 지역 목록 container
import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import LocationList from './LocationList';
import SideHeader from './SideHeader';


const Location = ({className, visible}) => {
	return (
    <div>
      <ModalOverlay visible={visible}/>
      <ModalWrapper className={className} tabIndex="-1" visible={visible}>
        <ModalInner tabIndex="0" className="modal-inner">       
          <SideHeader/>
          <LocationList/>
          <LocationList/>
          <LocationList/>
        </ModalInner>
      </ModalWrapper>
    </div>
  );
};

Location.propTypes = {
  visible: PropTypes.bool,
}

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`
const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;  
  width: 50%;
  height: 100%;
  max-width: 480px;
  top: 50%;
  left: 50%;   
  transform: translateY(-50%);  
  padding: 20px 20px;
`

export default Location;
