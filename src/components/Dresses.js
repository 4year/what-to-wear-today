// 기온별 의상 이미지 슬라이더, text
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { WeatherData } from '../WeatherData';
import { inrange } from './../utils/drag/index';
import registerDragEvent from './../utils/drag/registaerDragEvent';
import { useEffect } from 'react';

const Dresses = ({ temperature }) => {
	// 현재 기온에 맞는 옷 정보 data
	const dressInfo = WeatherData.find((data) => {
		return data.temp.indexOf(temperature) !== -1 && data;
	});

	// 슬라이드 리스트
	const slideList =
		dressInfo.images.length === 1
			? dressInfo.images
			: [dressInfo.images.at(-1), ...dressInfo.images, dressInfo.images.at(0)];

	const [currentIndex, setCurrentIndex] = useState(
		slideList.length === 1 ? 0 : 1
	);
	const [transX, setTransX] = useState(0);
	const [animate, setAnimate] = useState(false);
	const [slideWidth, setSlideWidth] = useState(0);

	const containerRef = useRef();

	// 슬라이드 width
	useEffect(() => {
		setSlideWidth(containerRef.current.getBoundingClientRect().width);
	}, []);

	return (
		<DressContainer ref={containerRef}>
			{/* Image Slide */}
			<Viewer>
				<Slider
					style={{
						transform: `translateX(${-currentIndex * slideWidth + transX}px)`,
						transition: `transform ${animate ? 300 : 0}ms ease-in-out 0s`,
					}}
					// 드레그 이벤트
					{...(slideList.length !== 1 &&
						registerDragEvent({
							onDragStart: (moveX) => {
								setTransX(inrange(moveX, -slideWidth, slideWidth));
							},
							onDragEnd: (moveX) => {
								const maxIndex = slideList.length - 1;

								if (moveX < -100)
									setCurrentIndex(inrange(currentIndex + 1, 0, maxIndex));
								if (moveX > 100)
									setCurrentIndex(inrange(currentIndex - 1, 0, maxIndex));

								setAnimate(true);
								setTransX(0);
							},
						}))}
					// transition이 종료되면 animate를 끄고 currentIndex 변경
					onTransitionEnd={() => {
						setAnimate(false);

						if (currentIndex === 0) {
							setCurrentIndex(slideList.length - 2);
						} else if (currentIndex === slideList.length - 1) {
							setCurrentIndex(1);
						}
					}}
				>
					{slideList.map((url, idx) => (
						<Slide key={idx}>
							<SlideImage slide={slideList} src={url} alt="img" draggable={false} />
						</Slide>
					))}
				</Slider>
				{slideList.length > 1 && (
					<Bullets>
						{dressInfo.images.map((url, idx) => (
							<span key={idx} className={currentIndex - 1 === idx ? 'current' : ''}>
								●
							</span>
						))}
					</Bullets>
				)}
			</Viewer>

			{/* Dresses Description */}
			<p>{dressInfo.desc}</p>
		</DressContainer>
	);
};

const DressContainer = styled.div`
	width: 100%;
	height: 50%;

	p {
		font-size: 1.2rem;
		font-weight: bold;
		margin: 12px;
	}
`;

const Viewer = styled.div`
	width: 100%;
`;

const Slider = styled.div`
	display: flex;
`;

const Slide = styled.div`
	flex-shrink: 0;
	width: 100%;
`;

const SlideImage = styled.img`
	width: 100%;
	height: 320px;
	object-fit: contain;
	cursor: ${(props) => (props.slide.length === 1 ? 'default' : 'pointer')};
`;

const Bullets = styled.div`
	span {
		font-size: 15px;
		margin: 0 5px;
		color: lightgray;

		&.current {
			color: black;
		}
	}
`;

export default Dresses;
