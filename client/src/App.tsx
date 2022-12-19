import {
	ThemeProvider 
} from '@emotion/react';
import {
	Paper 
} from '@mui/material';
import React from 'react';

import {
	Route, Routes, useLocation 
} from 'react-router-dom';
import UserContext from './context/UserContext';
import Homepage from './routes/homepage/HomePage';

function App() {
	const { theme } = React.useContext(UserContext);
	const location = useLocation();
	return (
		<ThemeProvider theme={theme.theme}>
			<Paper sx={{
				borderRadius: '0',
				minHeight: '100vh',
			}}>
				<Routes location={location}
					key={location.pathname}
				>
					<Route path={'/'} element={<Homepage/>} />

				</Routes >
			</Paper>
		</ThemeProvider>
	);
}

export default App;
