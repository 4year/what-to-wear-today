import './App.css';
import Home from './pages/Home';
import styled from 'styled-components';

const AppContainer = styled.div`
	margin: 0 auto;
	max-width: 393px;
	min-height: 852px;
	box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

function App() {
	return (
		<AppContainer className="App">
			<Home />
		</AppContainer>
	);
}

export default App;
