import {
	Box, Button, Card, Container, Grid, Tab, Tabs
} from '@mui/material';
import React from 'react';
import ProfielSettings from './settings/ProfielSettings';
import ProfielTickets from './tickets/ProfielTickets';
import BandlidShows from './bandlidProfiel/shows/BandlidShows';
import BandlidBands from './bandlidProfiel/bands/BandlidBands';
import Logout from './logout/Logout';
import {
	ProfileCard
} from '../../components/ProfileCard';
import UserContext, {
	level 
} from '../../context/UserContext';

import ErrorPage from '../../components/ErrorPage';
import {
	useNavigate 
} from 'react-router-dom';

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<Box
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{
					p: 3
				}}>
					{children}
				</Box>
			)}
		</Box>
	);
}

function a11yAccesibilityProps(index: number) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
}

// source for tabs: https://mui.com/material-ui/react-tabs/ en de login page
function Profiel() {
	const [value, setValue] = React.useState(0);
	const { user, role } = React.useContext(UserContext);
	const navigate = useNavigate();

	const isBandLid = role.role == level.acteur || role.role == level.bandlid;
	const isAdmin = role.role == level.admin;

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};
	return (
		<>
			{
				user.userData && user.userData.naam != null ? (
					<Container
						maxWidth={'md'} sx={{
							my: 4
						}}>
						<Grid container
							
							spacing={3}>
							<Grid item lg={12}
								xs={12}>
								<Card elevation={4}>
									<ProfileCard />
									<Tabs
										variant="fullWidth"
										value={value}
										onChange={handleChange}
										aria-label="Vertical tabs"
										sx={{
											borderRight: 1,
											borderColor: 'divider'
										}}>
										<Tab label="Log out" {...a11yAccesibilityProps(0)} />
										<Tab label="Settings" {...a11yAccesibilityProps(1)} />
										<Tab label="Tickets" {...a11yAccesibilityProps(2)} />
										{ isBandLid && <Tab label="Bands" {...a11yAccesibilityProps(3)} />}
										{ isBandLid && <Tab label="Shows" {...a11yAccesibilityProps(4)} />}
										<Box sx={{
											width:'100',
											ml: 3,
											mr: 3
										}}>
											{ isAdmin &&
									// eslint-disable-next-line max-len
									<Button variant="contained" onClick={(): void => navigate('/admin')}>To admin page</Button>
											}
										</Box>
									</Tabs>
								</Card>
							</Grid>
							<Grid item lg={12}
								sm={12}
								xs={12}
							>
								<Card elevation={4} sx={{
									scrollbarWidth:'thin',
									overflow:'auto',
									maxHeight: 500,
								}}>
									<Container>

										<TabPanel value={value} index={0}>
											<Box sx={{
												scrollbarWidth: 'thin',
												display: 'flex',
												justifyContent: 'center',
												alignItems:'center'
											}}>
												<Logout />
											</Box>	
										</TabPanel>
										<TabPanel value={value} index={1}>
											<Box sx={{
												width: '100%',
												height: '100%',
												scrollbarWidth: 'thin',
											}}>
												<ProfielSettings />
											</Box>
										</TabPanel>
										<TabPanel value={value} index={2}>
											<ProfielTickets />
										</TabPanel>
										{ isBandLid &&
								<TabPanel value={value} index={3}>
									<BandlidBands />
								</TabPanel>
										}
										{ isBandLid &&
								<TabPanel value={value} index={4}>
									<BandlidShows />
								</TabPanel>
										}
									</Container>

								</Card>
							</Grid>
						</Grid>
					</Container>
				) :
					<ErrorPage />}
		</>
	);
}

export default Profiel;