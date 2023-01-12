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
const TicketKopen = React.lazy(() => import('./routes/ticket/TicketKopen'));
const Profiel = React.lazy(()=> import('./routes/profiel/Profiel'));
const ProfielBands = React.lazy(()=> import('./routes/profiel/bands/ProfielBands'));
const ProfielSettings =React.lazy(()=>import('./routes/profiel/settings/ProfielSettings'));
const ProfielShows = React.lazy(()=>import('./routes/profiel/shows/ProfielShows'));
const ProfielShowsById = React.lazy(()=>import('./routes/profiel/shows/ProfielShowsById'));
const ProfielTickets = React.lazy(()=>import('./routes/profiel/tickets/ProfielTickets'));
const ProfielTicketsById = React.lazy(()=>import('./routes/profiel/tickets/ProfielTicketsById'));
const Bands = React.lazy(()=>import('./routes/bands/Bands'));
const BandsById = React.lazy(() => import('./routes/bands/BandsById'));
const Donate = React.lazy(() => import('./routes/donate/Donate'));
const Admin = React.lazy(() => import('./routes/admin/AdminPage'));
const ProgrammaOverzicht = React.lazy(() => import('./routes/programma/ProgrammaOverzicht'));

function App() : JSX.Element {
	const { user, theme } = React.useContext(UserContext);
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
					<Route path={'/ticket'} element={<Suspense fallback={<LoadingPage />}>
						<TicketKopen />
					</Suspense>} />
					<Route path={'/intresses/'} element={<Suspense fallback={<LoadingPage />}>
						<Interesses />
					</Suspense>} />
					<Route path={'/intresses/feedback'} element={<Suspense fallback={<LoadingPage />}>
						<IntressesFeedback />
					</Suspense>} />
					<Route path={'/intresses/suggestie'} element={<Suspense fallback={<LoadingPage />}>
						<IntressesSuggestie />
					</Suspense>} />
					<Route path={'/event/:id'} element={<Suspense fallback={<LoadingPage />}>
						<Event />
					</Suspense>} />
					<Route path={'/profiel'} element={<Suspense fallback={<LoadingPage />}>
						<Profiel />
					</Suspense>} />
					<Route path={'/profiel/tickets'} element={<Suspense fallback={<LoadingPage />}>
						<ProfielTickets />
					</Suspense>} />
					<Route path={'/profiel/tickets/:id'} element={<Suspense fallback={<LoadingPage />}>
						<ProfielTicketsById />
					</Suspense>} />
					<Route path={'/profiel/settings'} element={<Suspense fallback={<LoadingPage />}>
						<ProfielSettings />
					</Suspense>} />
					<Route path={'/profiel/bands'} element={<Suspense fallback={<LoadingPage />}>
						<ProfielBands />
					</Suspense>} />
					<Route path={'/profiel/shows'} element={<Suspense fallback={<LoadingPage />}>
						<ProfielShows />
					</Suspense>} />
					<Route path={'/profiel/shows/:id'} element={<Suspense fallback={<LoadingPage />}>
						<ProfielShowsById />
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
				</Routes >
				<Footer/>
			</Paper>
		</ThemeProvider>
	);
}

export default App;
