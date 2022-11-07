// weather container
import React from 'react';
import styled from 'styled-components';
import WeeklyWeather from './WeeklyWeather';

const Container = styled.div`
	width: 393px;
	margin: 0 auto;
	font-size: 20px;
	line-height: 50px;
	font-weight: 600;

	.temp {
		color: navy;
		font-weight: bold;
	}
`;

const WeatherContainer = ({ weather }) => {
	const dateBuilder = (d) => {
		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];

		let date = d.getDate();
		let month = months[d.getMonth()];
		let year = d.getFullYear();

		return `${date} ${month} ${year}`;
	};

	const Day = () => {
		const week = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		];
		let now = new Date();
		let dayOfWeek = week[now.getDay()];
		return `${dayOfWeek}`;
	};

	return (
		<Container>
			<div className="location-box">
				<div className="location">{weather.name}</div>
				<div className="date">{dateBuilder(new Date())}</div>
			</div>
			<img
				src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
				alt="weather icon"
			/>
			<p>{weather.weather[0].description}</p>
			<div className="weather-box">
				<div className="temp">{Math.round(weather.main.temp - 273.15)}°C</div>
				<div className="weather">{Day(new Date())}</div>
			</div>
			<WeeklyWeather />
		</Container>
	);
};

export default WeatherContainer;
