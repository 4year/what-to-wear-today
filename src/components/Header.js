// main header
import React from 'react';
import styled from 'styled-components';
import { IoShareOutline } from 'react-icons/io5';
import { BiMenuAltRight } from 'react-icons/bi';

const Header = ({ openModal, location }) => {
	return (
		<HeaderContainer>
			<span>{location}</span>
			<div className="iconBox">
				<IoShareOutline className="icon" />
				<BiMenuAltRight className="icon" onClick={openModal} />
			</div>
		</HeaderContainer>
	);
};


const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 7%;
	border-bottom: 1px solid #00000021;

	span {
		font-size: 20px;
		padding: 0 20px;
	}

	.iconBox {
		.icon {
			padding: 10px;
			font-size: 25px;
			cursor: pointer;

			&:last-child {
				transform: rotateX(180deg);
			}
		}
	}
`;


const Header = ({ setModalVisible, location }) => {
	const openModal = () => {
		setModalVisible(true);
	};

	return (
		<HeaderContainer>
			<span>{location}</span>
			<div className="iconBox">
				<IoShareOutline className="icon" />
				<BiMenuAltRight className="icon" onClick={openModal} />
			</div>		
		</HeaderContainer>
	);
};

export default Header;
