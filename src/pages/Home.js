// Home
import React from 'react';
import Header from './../components/Header';
import Dresses from '../components/Dresses';
import WeatherContainer from '../components/weather/WeatherContainer';
import SideBar from '../components/sideBar/SideBar';

const Home = ({ weather }) => {
	return (
		<>
			<Header location={weather.name} />
			<Dresses temperature={Math.round(weather.main.temp - 273.15)} />
			<WeatherContainer weather={weather} />
			{/* <SideBar /> */}
		</>
	);
};

export default Home;
