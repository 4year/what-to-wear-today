// 사이드 바
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Location from './Location';
import SideHeader from './SideHeader';

import SearchBar from '../addLocation/SearchBar';
import CurrentLocation from './CurrentLocation';

const SideBar = ({ visible, modalOnClose, maskClosable }) => {
	const [search, setSearch] = useState(false);

	const onClickLocationPlus = () => {
		setSearch(true);
		console.log(search);
	};

	const onClickLocationCancel = () => {
		setSearch(false);
		console.log(search);
	};

	const onMaskClick = (e) => {
		if (e.target === e.currentTarget) {
			modalOnClose(e);
		}
	};

	const close = (e) => {
		if (modalOnClose) {
			modalOnClose(e);
		}
	};

	return (
		<SidebarContainer>
			<ModalOverlay visible={visible} />
			<ModalWrapper
				onClick={maskClosable ? onMaskClick : null}
				tabIndex="-1"
				visible={visible}
			>
				<ModalInner tabIndex="0" className="modal-inner">
					<SideHeader close={close} onClickLocationPlus={onClickLocationPlus} />
					<SearchBar show={search} hide={onClickLocationCancel} />
					<CurrentLocation />
				</ModalInner>
			</ModalWrapper>
		</SidebarContainer>
	);
};

Location.propTypes = {
	visible: PropTypes.bool,
};

SearchBar.propTypes = {
	show: PropTypes.bool,
};

const SidebarContainer = styled.div`
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 9999;
`;

const ModalOverlay = styled.div`
	width: 100%;
	height: 100%;
	margin: 0 auto;
	box-sizing: border-box;
	background-color: rgba(0, 0, 0, 0.6);
	z-index: 999;
`;

const ModalWrapper = styled.div`
	width: 100%;
	height: 100%;
	margin: 0 auto;
	box-sizing: border-box;
	z-index: 1000;
	overflow: auto;
	outline: 0;
`;

const ModalInner = styled.div`
	box-sizing: border-box;
	position: absolute;
	box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
	background-color: #fff;
	width: 70%;
	height: 100%;
	max-width: 480px;
	top: 50%;
	right: 0;
	transform: translateY(-50%);
	padding: 10px 10px;
`;

export default SideBar;
