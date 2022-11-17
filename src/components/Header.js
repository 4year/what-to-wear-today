// main header
import React, { useState } from 'react';
import styled from 'styled-components';
import { IoShareOutline } from 'react-icons/io5';
import { BiMenuAltRight } from 'react-icons/bi';

const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px;

	span {
		font-size: 20px;
		padding-left: 10px;
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
