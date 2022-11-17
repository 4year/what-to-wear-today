// Home
import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './../components/Header';
import Dresses from '../components/Dresses';
import WeatherContainer from '../components/weather/WeatherContainer';
import SideBar from '../components/sideBar/SideBar';
import { registerDragEvent } from '../utils/drag';
import { inrange } from './../utils/drag';

const Home = ({ weather }) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [scrollUp, setScrollUp] = useState(0);

	const openModal = () => {
		setModalVisible(true);
	};

	const closeModal = () => {
		setModalVisible(false);
	};

	return (
		<HomeContainer>
			<Header location={weather.name} openModal={openModal} />
			<main
				// 드래그(스크롤) 이벤트
				{...registerDragEvent({
					onDragStart: (moveX, moveY) => {
						console.log(moveY);
						setScrollUp(inrange(moveY, -100, 0));
					},
					onDragEnd: (moveX, moveY) => {
						if (moveY <= -100) {
							setScrollUp(1);
						} else {
							setScrollUp(0);
						}
					},
				})}
			>
				<Dresses temperature={Math.round(weather.main.temp)} />
				<WeatherContainer weather={weather} scrollUp={scrollUp} />
				{modalVisible && (
					<SideBar visible={modalVisible} maskClosable={true} onClose={closeModal} />
				)}
			</main>
		</HomeContainer>
	);
};

const HomeContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	text-align: center;

	main {
		height: calc(100% - 3rem);
		margin-top: 3rem;
	}
`;

export default Home;
