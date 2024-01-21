import { Box, Button } from '@mui/material';

const Home = () => {
	return (
		<Box sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: 5
        }}>
			<img src="/portrait2.png.jpg" alt="oliver lexenberg" style={{ maxWidth: '400px', maxHeight: '400px' }} />
			<Button size="large" variant="contained" href="tel:0760896486">
				Kontakta mig via telefon
			</Button>
		</Box>
	);
};

export default Home;
