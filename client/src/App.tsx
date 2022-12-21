import {
	Paper, ThemeProvider 
} from '@mui/material';
import React, {
	Suspense 
} from 'react';

import {
	Route, Routes, useLocation
} from 'react-router-dom';
import Footer from './components/global/Footer';
import Topbar from './components/global/Topbar';
import UserContext from './context/UserContext';
import TicketKopen from './routes/ticket/TicketKopen';

const Login = React.lazy(() => import('./routes/login/Login'));
const Homepage = React.lazy(() => import('./routes/home/HomePage'));

function App() {
	const { theme } = React.useContext(UserContext);
	const location = useLocation();
	return (
		<ThemeProvider theme={theme.theme} >
			<Paper sx={{
				borderRadius: '0',
				minHeight: '100vh',
			}}>
				<Topbar />
				<Routes location={location}
					key={location.pathname}
				>
					<Route path={'/login'} element={<Suspense><Login/></Suspense>} />
					<Route path={'/ticket'} element={<Suspense><TicketKopen/></Suspense>} />
					<Route path={'/'} element={<Suspense><Homepage/></Suspense>} />

				</Routes >
				<Footer/>
			</Paper>
		</ThemeProvider>
	);
}

export default App;
