// Home
import React, { useState } from 'react';
import Header from './../components/Header';
import Dresses from '../components/Dresses';
import WeatherContainer from '../components/weather/WeatherContainer';
import SideBar from '../components/sideBar/SideBar';

const Home = ({ weather }) => {
	const [modalVisible, setModalVisible] = useState(false);

	const closeModal = () => {
		setModalVisible(false);
		console.log(modalVisible);
	};

	return (
		<>
			<Header location={weather.name} setModalVisible={setModalVisible} />
			<Dresses temperature={Math.round(weather.main.temp - 273.15)} />
			<WeatherContainer weather={weather} />
			{modalVisible && (
				<SideBar
					visible={modalVisible}
					closable={true}
					maskClosable={true}
					modalOnClose={closeModal}
				></SideBar>
			)}
		</>
	);
};

export default Home;
