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
	padding: 3px 10px;
	border-bottom: 1px solid #00000021;

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

export default Header;
