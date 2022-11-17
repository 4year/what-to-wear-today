// Home
import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './../components/Header';
import Dresses from '../components/Dresses';
import WeatherContainer from '../components/weather/WeatherContainer';
import SideBar from '../components/sideBar/SideBar';

const Home = ({ weather }) => {
	const [modalVisible, setModalVisible] = useState(false);

	const openModal = () => {
		setModalVisible(true);
	};

	const closeModal = () => {
		setModalVisible(false);
	};

	return (
		<HomeContainer>
			<Header location={weather.name} openModal={openModal} />
			<main>
				<Dresses temperature={Math.round(weather.main.temp)} />
				<WeatherContainer weather={weather} />
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
		height: 100%;
		margin-top: 3rem;
	}
`;

export default Home;
