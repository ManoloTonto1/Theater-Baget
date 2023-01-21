import {
	Paper, ThemeProvider 
} from '@mui/material';
import React, {
	Suspense 
} from 'react';

import {
	Route, Routes, useLocation
} from 'react-router-dom';

import UserContext from './context/UserContext';
import ErrorPage from './components/ErrorPage';
import Footer from './components/global/Footer';
import LoadingPage from './components/global/LoadingPage';
import Topbar from './components/global/Topbar';

const Login = React.lazy(() => import('./routes/login/Login'));
const Homepage = React.lazy(() => import('./routes/home/HomePage'));
const Event = React.lazy(() => import('./routes/event/Event'));
const Interesses = React.lazy(() => import('./routes/Interesses/Interesses'));
const IntressesFeedback = React.lazy(() => import('./routes/Interesses/feedback/IntressesFeedback'));
const IntressesSuggestie = React.lazy(() => import('./routes/Interesses/suggestie/IntressesSuggestie'));
const TicketKopen = React.lazy(() => import('./routes/Bestellen/TicketKopen'));
const Profiel = React.lazy(()=> import('./routes/profielen/Profiel'));
const BandProfiel = React.lazy(()=> import('./routes/profielen/bandProfiel/BandProfiel'));
const Bands = React.lazy(()=>import('./routes/bands/Bands'));
const BandsById = React.lazy(() => import('./routes/bands/BandsById'));
const Donate = React.lazy(() => import('./routes/donate/Donate'));
const Admin = React.lazy(() => import('./routes/admin/AdminPage'));
const ProgrammaOverzicht = React.lazy(() => import('./routes/programma/ProgrammaOverzicht'));
const BegunstigersPortaal = React.lazy(() => import('./routes/programma/BegunstigersPortaal'));

function App() : JSX.Element {
	const { _, theme } = React.useContext(UserContext);
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
					<Route path={'/'} element={<Suspense fallback={<LoadingPage />}>
						<Homepage />
					</Suspense>} />
					<Route path={'/login'} element={<Suspense fallback={<LoadingPage />}>
						<Login />
					</Suspense>} />
					<Route path={'/bestellen/:id'} element={<Suspense fallback={<LoadingPage />}>
						<TicketKopen />
					</Suspense>} />
					<Route path={'/interesses/'} element={<Suspense fallback={<LoadingPage />}>
						<Interesses />
					</Suspense>} />
					<Route path={'/interesses/feedback'} element={<Suspense fallback={<LoadingPage />}>
						<IntressesFeedback />
					</Suspense>} />
					<Route path={'/interesses/suggestie'} element={<Suspense fallback={<LoadingPage />}>
						<IntressesSuggestie />
					</Suspense>} />
					<Route path={'/event/:id'} element={<Suspense fallback={<LoadingPage />}>
						<Event />
					</Suspense>} />
					<Route path={'/profiel'} element={<Suspense fallback={<LoadingPage />}>
						<Profiel />
					</Suspense>} />
					<Route path={'/bands'} element={<Suspense fallback={<LoadingPage />}>
						<Bands />
					</Suspense>} />
					<Route path={'/bands/:id'} element={<Suspense fallback={<LoadingPage />}>
						<BandsById />
					</Suspense>} />
					<Route path={'*'} element={<ErrorPage />} />
					<Route path={'/donate'} element={<Suspense fallback={<LoadingPage />}>
						<Donate />
					</Suspense>} />
					<Route path={'/admin'} element={<Suspense fallback={<LoadingPage />}>
						<Admin />
					</Suspense>} />
					<Route path={'/programma'} element={<Suspense fallback={<LoadingPage />}>
						<ProgrammaOverzicht />
					</Suspense>} />
					<Route path={'/begunstigersportaal'} element={<Suspense fallback={<LoadingPage />}>
						<BegunstigersPortaal />
					</Suspense>} />
					<Route path={'/band/:id'} element={<Suspense fallback={<LoadingPage />}>
						<BandProfiel />
					</Suspense>} />
				</Routes >
				<Footer/>
			</Paper>
		</ThemeProvider>
	);
}

export default App;
