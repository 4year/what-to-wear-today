// Home
import React from 'react';
import Dresses from '../components/Dresses';
import SideBar from '../components/sideBar/SideBar';
import WeatherContainer from '../components/weather/WeatherContainer';
import Header from './../components/Header';

const Home = ({ weather }) => {
	return (
		<>
			<header>
				<Header location={weather.name} />
			</header>
			<main>
				<Dresses temperature={Math.round(weather.main.temp - 273.15)} />
				<WeatherContainer weather={weather} />
			</main>
			{/* <SideBar /> */}
		</>
	);
};

export default Home;
