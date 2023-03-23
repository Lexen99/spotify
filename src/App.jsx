import './App.css';
import { Box } from '@mui/material';
import Home from './pages/Home.jsx';

function App({ spotifyApi }) {
	return (
		<Box className="App">
			<Home />
		</Box>
	);
}

export default App;
