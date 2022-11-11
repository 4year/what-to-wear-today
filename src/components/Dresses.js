// 기온별 의상 이미지 슬라이더, text
import React from 'react';
import styled from 'styled-components';
import Slider from 'react-touch-drag-slider';
import { WeatherData } from '../WeatherData';

const Dresses = ({ temperature }) => {
	// 현재 기온에 맞는 옷 정보 data
	const dressInfo = WeatherData.find((data) => {
		return data.temp.indexOf(temperature) !== -1 && data;
	});

	return (
		<DressContainer>
			{/* Image Slide */}
			<Slider activeIndex={0} transition={0.5} scaleOnDrag={true}>
				{dressInfo.images.map((image, idx) => (
					<img key={idx} src={image} alt="dressImage" />
				))}
			</Slider>

			{/* Dresses Description */}
			<p>{dressInfo.desc}</p>
		</DressContainer>
	);
};

const DressContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	height: 400px;

	p {
		margin-bottom: 0;
		font-size: 20px;
		font-weight: bold;
	}
`;

export default Dresses;
