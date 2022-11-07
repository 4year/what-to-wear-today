// 이번주 날씨 Container
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	max-height: 852px;
	background-color: rgba(0, 0, 0, 0.3);
	border-radius: 20px;
	margin: 0 auto;
	margin-top: 20px;
	font-size: 14px;
	padding: 15px 5px;
`;

const TableTitle = styled.table`
	border-spacing: 5px;
	margin: 0 auto;
	/* text-align: center; */

	th {
		/* border: 1px solid black; */
		border-spacing: 0 20px;
		height: 20px;
		padding: 10px 20px;
		color: white;
		text-align: left;
	}

	td {
		/* border: 1px solid black; */
		border-spacing: 0 20px;
		height: 20px;
		padding: 10px 20px;
		font-weight: 600;
	}
`;

const WeeklyWeather = () => {
	return (
		<Container>
			<TableTitle>
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
			</TableTitle>
		</Container>
	);
};

export default WeeklyWeather;
