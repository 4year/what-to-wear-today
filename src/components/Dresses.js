// 기온별 의상 이미지 슬라이더, text
import React, { useState } from 'react';
import styled from 'styled-components';
import { Data } from './../test';

// const image = {
// 	desc: '반팔, 셔츠, 반바지, 면바지',
// 	list: [
// 		{
// 			id: `image1`,
// 			url: process.env.PUBLIC_URL + '/images/dresses/dress1.png',
// 			alt: 'dress 1',
// 		},
// 		{
// 			id: `image2`,
// 			url: process.env.PUBLIC_URL + '/images/dresses/dress2.png',
// 			alt: 'dress 2',
// 		},
// 		{
// 			id: `image3`,
// 			url: process.env.PUBLIC_URL + '/images/dresses/dress3.png',
// 			alt: 'dress 3',
// 		},
// 		{
// 			id: `image4`,
// 			url: process.env.PUBLIC_URL + '/images/dresses/dress4.png',
// 			alt: 'dress 4',
// 		},
// 	],
// };

const DressData = Data;

const Dresses = ({ temperature }) => {
	// const [currentIndex, setCurrentIndex] = useState(0);
	// const [transX, setTransX] = useState(0);

	const dressInfo = DressData.filter((el) => {
		return el.temp.find((el) => el === temperature) && el;
	});

	console.log(dressInfo);

	return (
		<DressContainer>
			{/* Image Slide */}
			<Viewer>
				<Slider>
					{/* {image.list.map(({ id, url, alt }) => (
						<Slide key={id}>
							<img src={url} alt={alt} />
						</Slide>
					))} */}

					<Slide key={dressInfo[0].id}>
						<img src={dressInfo[0].image} alt="dressImage" />
					</Slide>
				</Slider>
			</Viewer>
			{/* Bullets */}
			<BulletsContainer>
				{/* {image.list.map(({ id }) => (
					<span key={id}>●</span>
				))} */}
			</BulletsContainer>
			{/* Dresses Description */}
			<p>{dressInfo[0].desc}</p>
		</DressContainer>
	);
};

const DressContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	height: 400px;
`;

const Viewer = styled.div`
	margin: 0 auto;
	width: 300px;
	overflow: hidden;
`;

const Slider = styled.div`
	display: flex;
	transform: translateX(
		${(props) => `-${props.currentIndex} * 300 + ${props.transX}px`}
	);
`;

const Slide = styled.div`
	flex-shrink: 0;

	img {
		width: 300px;
		height: 300px;
		object-fit: contain;
	}
`;

const BulletsContainer = styled.div`
	color: #8080803b;
	font-size: 25px;

	span {
		padding: 3px;

		&:hover {
			color: #808080ed;
		}
	}

	+ p {
		margin-bottom: 0;
		font-size: 20px;
		font-weight: bold;
	}
`;

export default Dresses;
