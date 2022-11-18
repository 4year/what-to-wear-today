// 로딩 페이지
import React from 'react';
import styled from 'styled-components';

const loadingImg = process.env.PUBLIC_URL + '/images/loading.gif';

const LoadingContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	width: 100%;
	height: 100%;
`;

const Loading = () => {
	return (
		<LoadingContainer>
			<img src={loadingImg} alt="loading" />
		</LoadingContainer>
	);
};

export default Loading;
