// Home
import React, { useState } from "react";
import Header from "./../components/Header";
import Dresses from "../components/Dresses";
import WeatherContainer from "../components/weather/WeatherContainer";
import SideBar from "../components/sideBar/SideBar";
import WeeklyWeather from "../components/weather/WeeklyWeather";


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
			<Dresses temperature={Math.round(weather.main.temp)} />
			<WeatherContainer weather={weather} />
			{modalVisible && (

				<SideBar
					visible={modalVisible}
					closable={true}
					maskClosable={true}
					modalOnClose={closeModal}
				></SideBar>

			)}
		</HomeContainer>
	);
};

const HomeContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	text-align: center;
`;

export default Home;
