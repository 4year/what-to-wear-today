import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { API_KEY } from './config';
import Loadging from './pages/Loadging';
import Home from './pages/Home';

const App = () => {
	const [loading, setLoading] = useState(true);
	const [result, setResult] = useState({});

	// 현재 위치 가져오기
	const getCurrentLocation = useCallback(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			const lat = position.coords.latitude; // 위도
			const lon = position.coords.longitude; // 경도

			localStorage.setItem('Loaction', JSON.stringify({ lat, lon }));
			getCurrentWeather(lat, lon);
		});
	}, []);

	// 현재 날씨 가져오기
	const getCurrentWeather = async (lat, lon) => {
		const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

		const result = await fetch(url).then((response) => response.json());

		setLoading(false); // 날씨 가져오기 성공하면 로딩 false
		setResult(result);
	};

	// 앱 로드시,
	// localStorage 위치가 있으면 getCurrentWeather(위치) 아니면 getCurrentLocation
	useEffect(() => {
		let storedLocation = localStorage.getItem('Loaction');

		if (storedLocation) {
			storedLocation = JSON.parse(storedLocation);
			getCurrentWeather(storedLocation.lat, storedLocation.lon);
		} else {
			getCurrentLocation();
		}
	}, [getCurrentLocation]);

	return (
		<AppContainer className="App">
			{loading ? <Loadging /> : <Home weather={result} />}
		</AppContainer>
	);
};

const AppContainer = styled.div`
	margin: 0 auto;
	max-width: 393px;
	min-height: 852px;
	text-align: center;
	box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

export default App;
