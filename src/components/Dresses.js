// 기온별 의상 이미지 슬라이더, text
import React, { useState } from 'react';
import { Data } from './../test';
import styled from 'styled-components';

const DressData = Data;

const Dresses = ({ temperature }) => {
	// const [currentIndex, setCurrentIndex] = useState(0);
	// const [transX, setTransX] = useState(0);

	// 현재 기온에 맞는 옷 정보
	const dressInfo = DressData.filter((dress) => {
		return dress.temp.indexOf(temperature) !== -1 && dress;
	});

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
