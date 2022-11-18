// weather container
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { WeatherData } from '../../WeatherData';
import WeeklyWeather from './WeeklyWeather';

const WeatherContainer = ({ weather, dragUp }) => {
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

	// 배경 색
	const temperature = Math.round(weather.main.temp);
	const background = WeatherData.find((data) => {
		return data.temp.indexOf(temperature) !== -1 && data.background;
	});

	return (
		<Container
			className={
				dragUp ? (dragUp < 0 && dragUp > -100 ? 'dragUp' : 'dragEnd') : ''
			}
			background={background}
			scrollY={dragUp}
		>
			<WaveContianer
				className={
					dragUp ? (dragUp < 0 && dragUp > -100 ? 'dragUp' : 'dragEnd') : ''
				}
			/>
			<CurrentWeather
				className={dragUp ? (dragUp < 0 && dragUp > -100 ? '' : 'dragEnd') : ''}
			>
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
		background-position-x: 350px;
	}
	`;

const waveHeight = keyframes`
	0%{
		background-position-x: 0;
		height: 10%;
	}
	100%{
		background-position-x: 350px;
		height: 0;
	}
`;

const dragUpTop = keyframes`
	0% {
		top: 370px;
	}
	100% {
		top: 0;
	}
`;

const dragUpHeight = keyframes`
	0% {
		height: 90%;
		margin-top: 0;
	}
	100% {
		height: 40%;
		margin-top: 3rem;
	}
`;

const Container = styled.div`
	width: 100%;
	height: 47%;
	font-size: 20px;
	line-height: 50px;
	font-weight: 600;
	background-color: ${(props) => props.background};

	&.dragUp {
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
		transform: translateY(${(props) => props.scrollY}px);
		transition: transform 300ms linner;
	}

	&.dragEnd {
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
		animation: ${dragUpTop} 2.5s ease-out forwards;
	}
`;

const WaveContianer = styled.div`
	width: 100%;
	height: 10%;
	background: url(${process.env.PUBLIC_URL + './images/wave.png'});
	background-size: 350px 100%;

	&.dragUp {
		animation: ${wave} 1s linear infinite;
	}

	&.dragEnd {
		animation: ${waveHeight} 3s linear forwards;
	}
`;

const CurrentWeather = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 90%;

	&.dragEnd {
		animation: ${dragUpHeight} 3s cubic-bezier(0.17, 0.81, 0.49, 0.97) forwards;
	}

	.weather {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

export default WeatherContainer;
