// 이번주 날씨 Container
import React from 'react';
import styled from 'styled-components';

const WeeklyWeather = () => {
	return (
		<Container>
			<WeeklyWeatherTable>
				<thead>
					<tr>
						<th style={{ visibility: 'hidden' }}></th>
						<th>오전</th>
						<th>오후</th>
						<th>최저</th>
						<th>최고</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>Mon</th>
						<td>맑음</td>
						<td>흐림</td>
						<td>14°C</td>
						<td>21°C</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>Tue</th>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>Wed</th>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>Thu</th>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>Fri</th>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>Sat</th>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>Sun</th>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</WeeklyWeatherTable>
		</Container>
	);
};

const Container = styled.div`
	height: 60%;
	width: 95%;
	margin: 10px;
	background-color: rgba(0, 0, 0, 0.3);
	border-radius: 20px;
	font-size: 1rem;
`;

const WeeklyWeatherTable = styled.table`
	width: 100%;
	height: 100%;
	padding: 10px;
	text-align: center;

	th {
		color: white;
	}

	td {
		font-weight: 600;
	}
`;

export default WeeklyWeather;
