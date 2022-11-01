// Home
import React from 'react';
import Dresses from '../components/Dresses';
import Header from './../components/Header';

const Home = () => {
	return (
		<>
			<header>
				<Header location="서울특별시 강남구" />
			</header>
			<main>
				<Dresses />
			</main>
		</>
	);
};

export default Home;
