// Home
import React, { useState } from 'react';
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
		<React.Fragment>
			<Header location={weather.name} openModal={openModal} />
			<Dresses temperature={Math.round(weather.main.temp - 273.15)} />
			<WeatherContainer weather={weather} />
			{modalVisible && (
				<SideBar visible={modalVisible} maskClosable={true} onClose={closeModal} />
			)}
		</React.Fragment>
	);
};

export default Home;
