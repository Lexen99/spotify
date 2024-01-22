import './App.css';
import { Box } from '@mui/material';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './pages/Login';
import { getAccessToken } from './utils/getAccessToken';
import { getAccessTokenFromStorage } from './utils/getAccessTokenFromStorage';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App({ spotifyApi }) {
	const [token, setToken] = useState(getAccessTokenFromStorage());

	useEffect(() => {
		const AccessToken = getAccessTokenFromStorage() || getAccessToken();

		if (AccessToken) {
			setToken(AccessToken);
			sessionStorage.setItem('spotifyToken', AccessToken);
			window.location.hash = '';
		}
	}, []);

	return (
		<Box className="App">
			{token ? (
				<Dashboard spotifyApi={spotifyApi} />
			) : (
				<Routes>
					<Route path="*" element={<Login />} />
				</Routes>
			)}
		</Box>
	);
}

export default App;
