// < 지역목록  + 버튼
import React from 'react';
import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import { HiOutlinePlus } from 'react-icons/hi';

const SideHeader = ({ onClose }) => {
	return (
		<div>
			<Header>
				<IoIosArrowBack className="modal-close" size="20px" onClick={onClose} />
				<h3>지역목록</h3>
				<HiOutlinePlus className="add-list" size="20px" />
			</Header>
		</div>
	);
};

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
	.modal-close {
		cursor: pointer;
	}
	.add-list {
		cursor: pointer;
	}
`;

export default SideHeader;
