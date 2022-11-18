// weather container
import React from 'react';
import styled from 'styled-components';
import { WeatherData } from '../../WeatherData';
import WeeklyWeather from './WeeklyWeather';
import { keyframes } from 'styled-components';

const waveImage = process.env.PUBLIC_URL + './images/wave.svg';

const WeatherContainer = ({ weather }) => {
  const dateBuilder = (d) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];


		const week = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		];

		let date = d.getDate();
		let month = months[d.getMonth()];
		let year = d.getFullYear();
		let dayOfWeek = week[d.getDay()];

		return `${date} ${month} ${year} ${dayOfWeek}`;
	};

	const temperature = Math.round(weather.main.temp);
	const background = WeatherData.find((data) => {
		return data.temp.indexOf(temperature) !== -1 && data.background;
	});

	return (
		<Container background={background}>
			<div className="wave">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
						fill="#FFFFFF"
						fillOpacity="1"
					></path>
				</svg>
			</div>
			<CurrentWeather>
				<div className="date">{dateBuilder(new Date())}</div>
				<div className="weather">
					{temperature}°C
					<img
						src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
						alt="weather icon"
					/>
					{weather.weather[0].description}
				</div>
			</CurrentWeather>
			<WeeklyWeather />
		</Container>
	);
};

const wave = keyframes`
	0%{
		background-position-x: 0;
	}
	100%{
		background-position-x: 500px;
	}
`;

const Container = styled.div`
	height: 43%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 20px;
	line-height: 50px;
	font-weight: 600;
	background-color: ${(props) => props.background};

	/* 
	  position: absolute;
    top: 0;
    height: 100%;
	*/

	.wave {
		/* display: none; */
		width: 100%;
		height: 10%;
	}
`;

const CurrentWeather = styled.div`
	padding: 10% 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.weather {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

export default WeatherContainer;
