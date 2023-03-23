import './App.css';
import { Box } from '@mui/material';
import Login from './pages/Login.jsx';

function App({ spotifyApi }) {
	return (
		<Box className="App">
			<Login />
		</Box>
	);
}

export default App;
