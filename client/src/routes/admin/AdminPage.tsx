import {
	Box, Card, Container, Grid, Tab, Tabs, Typography
} from '@mui/material';
import React from 'react';
import Logout from './adminLogout/Logout';
import ProgrammaToevoegen from './adminProgramma/ProgrammaToevoegen';
import ZaalToevoegen from './adminZaalToevoegen/ZaalToevoegen';
import BetrokkenenToevoegen from './adminGebruikerToevoegen/BetrokkenenToevoegen';
import GebruikerInzien from './adminGebruikerInzien/GebruikerInzien';
import UserContext, {
	level 
} from '../../context/UserContext';
import ErrorPage from '../../components/ErrorPage';

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
					<Typography>{children}</Typography>
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

function AdminPage() {
	const [value, setValue] = React.useState(0);
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};
	const { user, role } = React.useContext(UserContext);
	
	return (
		<>{
			user.userData && role.role === level.admin ? (
				<Container maxWidth={'md'}
					sx={{
						my:4,
					}}>
					<Grid container spacing={3}
						sx={{
							display: 'flex',
							justifyContent:'center'
						}}>
						<Grid item
							lg={12}
							xs={12}>
							<Card elevation={4}>
								<Tabs
									variant="scrollable"
									value={value}
									onChange={handleChange}
									aria-label="Vertical tabs"
									sx={{
										borderRight: 1,
										borderColor: 'divider'
									}}>
									<Tab label="Programma toevoegen" {...a11yAccesibilityProps(0)} />
									<Tab label="Zaal toevoegen" {...a11yAccesibilityProps(1)} />
									<Tab label="Betrokkenen toevoegen" {...a11yAccesibilityProps(2)} />
									<Tab label="Gebruiker inzien" {...a11yAccesibilityProps(3)} />
									<Tab label="Logout" {...a11yAccesibilityProps(4)} />
								</Tabs>
							</Card>
						</Grid>
						<Grid
							item
							lg={12}
							sm={12}
							xs={12}

						>
							<Card elevation={4} sx={{
								minHeight: 500,
								overflowY:'auto',
								scrollbarWidth: 'thin',
							}}>
								<TabPanel value={value} index={0}>
									<ProgrammaToevoegen />
								</TabPanel>
								<TabPanel value={value} index={1}>
									<ZaalToevoegen />
								</TabPanel>
								<TabPanel value={value} index={2}>
									<BetrokkenenToevoegen />
								</TabPanel>
								<TabPanel value={value} index={3}>
									<GebruikerInzien />
								</TabPanel>
								<TabPanel value={value} index={4}>
									<Logout />
								</TabPanel>
							</Card>
						</Grid>
					</Grid>
				</Container>
			) :<ErrorPage />}
		</>
	);
}

export default AdminPage;
