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
import Footer from './components/global/Footer';
import Topbar from './components/global/Topbar';
import UserContext from './context/UserContext';
import Login from './routes/login/Login';

function App() {
	const { theme } = React.useContext(UserContext);
	const location = useLocation();
	return (
		<ThemeProvider theme={theme.theme}>
			
			<Paper sx={{
				borderRadius: '0',
				minHeight: '100vh',
			}}>
				<Topbar />
				<Routes location={location}
					key={location.pathname}
				>
					<Route path={'/'} element={<Login />} />

				</Routes >
				<Footer/>
			</Paper>
		</ThemeProvider>
	);
}

export default App;
