import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { API_KEY } from './config';
import Loading from './pages/Loading';
import Home from './pages/Home';

const App = () => {
	const [loading, setLoading] = useState(true);
	const [result, setResult] = useState({});

	// 현재 날씨 가져오기
	const getCurrentWeather = async (lat, lon) => {
		const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

		try {
			const result = await fetch(url).then((response) => response.json());
			setResult(result);
			setLoading(false); // 날씨 가져오기 성공하면 로딩 false
		} catch (error) {
			console.error(error);
		}
	};

	// 앱 마운트 시,
	// localStorage 위치가 있으면 getCurrentWeather(위치) 아니면 getCurrentLocation()
	useEffect(() => {
		// 현재 위치 가져오기
		const getCurrentLocation = () => {
			navigator.geolocation.getCurrentPosition((position) => {
				const lat = position.coords.latitude; // 위도
				const lon = position.coords.longitude; // 경도

				localStorage.setItem('Location', JSON.stringify({ lat, lon })); // 현재 위치 localStorage에 저장
				getCurrentWeather(lat, lon);
			});
		};

		let storedLocation = localStorage.getItem('Location');

		if (storedLocation) {
			storedLocation = JSON.parse(storedLocation);
			getCurrentWeather(storedLocation.lat, storedLocation.lon);
		} else {
			getCurrentLocation();
		}

		return () => {
			console.log('app unmounted');
		};
	}, []);

	return (
		<AppContainer className="App">
			{loading ? <Loading /> : <Home weather={result} />}
		</AppContainer>
	);
};

const AppContainer = styled.div`
	margin: 0 auto;
	max-width: 390px;
	max-height: 844px;
	overflow: hidden;
	text-align: center;
	box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

export default App;
