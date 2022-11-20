// 이번주 날씨 Container
import React from 'react';
import styled from 'styled-components';
import { TbTemperature } from 'react-icons/tb';
import { TiWeatherSunny } from 'react-icons/ti';
import { TiWeatherShower } from 'react-icons/ti';

const WeeklyWeather = () => {
	return (
		<>
			{/* 내일 */}
			<Container>
				<Title>
					<h3>내일</h3>
					<div>
						<TbTemperature size="20px" />
						<TiWeatherSunny size="20px" />
						<TiWeatherShower size="20px" />
					</div>
				</Title>
				<Wrap>
					<WrapList>
						<div>{}°C</div>
						<div>img</div> {/* <img src="" alt="" /> */}
						<div>0시</div>
					</WrapList>
					<WrapList>
						<div>{}°C</div>
						<div>img</div> {/* <img src="" alt="" /> */}
						<div>3시</div>
					</WrapList>
					<WrapList>
						<div>{}°C</div>
						<div>img</div> {/* <img src="" alt="" /> */}
						<div>6시</div>
					</WrapList>
					<WrapList>
						<div>{}°C</div>
						<div>img</div> {/* <img src="" alt="" /> */}
						<div>9시</div>
					</WrapList>
					<WrapList>
						<div>{}°C</div>
						<div>img</div> {/* <img src="" alt="" /> */}
						<div>12시</div>
					</WrapList>
					<WrapList>
						<div>{}°C</div>
						<div>img</div> {/* <img src="" alt="" /> */}
						<div>15시</div>
					</WrapList>
					<WrapList>
						<div>{}°C</div>
						<div>img</div> {/* <img src="" alt="" /> */}
						<div>18시</div>
					</WrapList>
					<WrapList>
						<div>{}°C</div>
						<div>img</div> {/* <img src="" alt="" /> */}
						<div>21시</div>
					</WrapList>
					<WrapList>
						<div>{}°C</div>
						<div>img</div> {/* <img src="" alt="" /> */}
						<div>24시</div>
					</WrapList>
				</Wrap>
			</Container>
			{/* 모레 */}
			<Container>
				<Title>
					<h3>모레</h3>
					<div>
						<TbTemperature size="20px" />
						<TiWeatherSunny size="20px" />
						<TiWeatherShower size="20px" />
					</div>
				</Title>
				<Wrap>
					<WrapList>
						<div>{}°C</div>
						<div>img</div> {/* <img src="" alt="" /> */}
						<div>0시</div>
					</WrapList>
					<WrapList>
						<div>{}°C</div>
						<div>img</div> {/* <img src="" alt="" /> */}
						<div>3시</div>
					</WrapList>
					<WrapList>
						<div>{}°C</div>
						<div>img</div> {/* <img src="" alt="" /> */}
						<div>6시</div>
					</WrapList>
					<WrapList>
						<div>{}°C</div>
						<div>img</div> {/* <img src="" alt="" /> */}
						<div>9시</div>
					</WrapList>
					<WrapList>
						<div>{}°C</div>
						<div>img</div> {/* <img src="" alt="" /> */}
						<div>12시</div>
					</WrapList>
					<WrapList>
						<div>{}°C</div>
						<div>img</div> {/* <img src="" alt="" /> */}
						<div>15시</div>
					</WrapList>
					<WrapList>
						<div>{}°C</div>
						<div>img</div> {/* <img src="" alt="" /> */}
						<div>18시</div>
					</WrapList>
					<WrapList>
						<div>{}°C</div>
						<div>img</div> {/* <img src="" alt="" /> */}
						<div>21시</div>
					</WrapList>
					<WrapList>
						<div>{}°C</div>
						<div>img</div> {/* <img src="" alt="" /> */}
						<div>24시</div>
					</WrapList>
				</Wrap>
			</Container>
		</>
	);
};

const Container = styled.div`
	height: 30%;
	width: 90%;
	margin: 10px;
	padding: 15px 5px;
	background-color: rgb(255 255 255 / 20%);
	border-radius: 20px;
	font-size: 14px;
`;

const Wrap = styled.div`
	display: flex;
	overflow: hidden;
`;

const WrapList = styled.div`
	margin: 5px 20px;
	line-height: 30px;

	div {
		width: 2.2rem;
	}
`;

const Title = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;

	h3 {
		font-size: 14px;
		font-weight: bold;
		/* padding-right: 200px; */
	}
`;

export default WeeklyWeather;
