import Home from './pages/Home';
import styled from 'styled-components';
import { useState } from 'react';
import Loadging from './pages/Loadging';
import { API_KEY } from './config';
import { useEffect } from 'react';

const App = () => {
	const [loading, setLoading] = useState(true);
	const [result, setResult] = useState({});

	setTimeout(() => {
		setLoading(false);
	}, 3000);

	const getCurrentLocation = () => {
		navigator.geolocation.getCurrentPosition((position) => {
			const lat = position.coords.latitude;
			const lon = position.coords.longitude;

			console.log(lat, lon);

			getCurrentWeather(lat, lon);
		});
	};

	useEffect(getCurrentLocation, []);

	const getCurrentWeather = async (lat, lon) => {
		const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

		const result = await fetch(url).then((response) => response.json());

		console.log(result);

		setResult(result);
	};

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
