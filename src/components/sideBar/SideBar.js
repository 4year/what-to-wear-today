// overlay 및 container
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Location from './Location';
import SideHeader from './SideHeader';

import SearchBar from '../addLocation/SearchBar';
import CurrentLocation from './CurrentLocation';


const SideBar = ({ className, visible, modalOnClose, maskClosable, closable }) => {
  const [search, setSearch] = useState(false);
  
  const onClickLocationPlus = () => {
    setSearch(true);
    console.log(search);
  }

  const onClickLocationCancel = () => {
    setSearch(false);
    console.log(search);
  } 

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
		<div>
			<ModalOverlay visible={visible} />
			<ModalWrapper
				onClick={maskClosable ? onMaskClick : null}
				tabIndex="-1"
				visible={visible}
			>
				<ModalInner tabIndex="0" className="modal-inner">

					{closable && (
						<SideHeader close={close} onClickLocationPlus={onClickLocationPlus}>							 
						</SideHeader>
					)}
          <SearchBar show={search} hide={onClickLocationCancel}/>
					<CurrentLocation />

				</ModalInner>
			</ModalWrapper>
		</div>
	);
};

Location.propTypes = {
	visible: PropTypes.bool,
};

SearchBar.propTypes = {
  show: PropTypes.bool,
}
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
