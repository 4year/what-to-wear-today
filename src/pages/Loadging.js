// 로딩 페이지
import React from 'react';
import styled from 'styled-components';

const loadingImg = process.env.PUBLIC_URL + '/images/loading.gif';

const LoadgingContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
`;

const Loadging = () => {
	return (
		<LoadgingContainer>
			<img src={loadingImg} alt="loading" />
		</LoadgingContainer>
	);
};

export default Loadging;
