import Home from './pages/Home';
import styled from 'styled-components';
import { useState } from 'react';
import Loadging from './pages/Loadging';

const AppContainer = styled.div`
	margin: 0 auto;
	max-width: 393px;
	min-height: 852px;
	text-align: center;
	box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

function App() {
	const [loading, setLoading] = useState(true);

	setTimeout(() => {
		setLoading(false);
	}, 3000);

	return (
		<AppContainer className="App">
			{loading ? <Loadging /> : <Home />}
		</AppContainer>
	);
}

export default App;
