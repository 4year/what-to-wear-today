// overlay 및 container
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Location from './Location';
import SideHeader from './SideHeader';
import { IoIosArrowBack } from 'react-icons/io';
import { HiOutlinePlus } from 'react-icons/hi';

const SideBar = ({ className, visible, onClose, maskClosable, closable }) => {
	const onMaskClick = (e) => {
		if (e.target === e.currentTarget) {
			onClose(e);
		}
	};
	const close = (e) => {
		if (onClose) {
			onClose(e);
		}
	};
	return (
		<div>
			<ModalOverlay visible={visible} />
			<ModalWrapper
				className={className}
				onClick={maskClosable ? onMaskClick : null}
				tabIndex="-1"
				visible={visible}
			>
				<ModalInner tabIndex="0" className="modal-inner">
					{closable && (
						<SideHeader>
							<IoIosArrowBack className="modal-close" size="20px" onClick={close} />
							<h3>지역목록</h3>
							<HiOutlinePlus className="add-list" size="20px" />
						</SideHeader>
					)}
					<Location />
				</ModalInner>
			</ModalWrapper>
		</div>
	);
};

Location.propTypes = {
	visible: PropTypes.bool,
};

const ModalOverlay = styled.div`
	max-width: 393px;
	height: 852px;
	margin: 0 auto;
	/* text-align: center; */
	box-sizing: border-box;
	display: ${(props) => (props.visible ? 'block' : 'none')};
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.6);
	z-index: 999;
`;

const ModalWrapper = styled.div`
	max-width: 393px;
	height: 852px;
	/* text-align: center; */
	margin: 0 auto;
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
`;

const ModalInner = styled.div`
	box-sizing: border-box;
	position: relative;
	box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
	background-color: #fff;
	width: 70%;
	height: 100%;
	max-width: 480px;
	top: 50%;
	left: 30%;
	transform: translateY(-50%);
	padding: 10px 10px;
`;

// const SideHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   /* background-color: tomato; */
//   align-items: center;
//   margin-bottom: 20px;
//   .back{
//     cursor: pointer;
//   }
//   .add-list{
//     cursor: pointer;
//   }
// `
export default SideBar;
