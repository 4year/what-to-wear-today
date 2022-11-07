// Home
import React from 'react';
import Header from './../components/Header';
import Dresses from '../components/Dresses';
import WeatherContainer from '../components/weather/WeatherContainer';
import SideBar from '../components/sideBar/SideBar';

const Home = ({ weather }) => {
	return (
		<>
			<div>
				<Header location={weather.name} />
				<main>
					<Dresses temperature={Math.round(weather.main.temp - 273.15)} />
					<WeatherContainer weather={weather} />
				</main>
			</div>
			{/* <SideBar /> */}
		</>
	);
};

export default Home;
