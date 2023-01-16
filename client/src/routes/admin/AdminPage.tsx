
import {
	Box, Card, Container, Grid, Tab, Tabs, Typography
} from '@mui/material';
import React from 'react';
import Logout from './adminLogout/Logout';
import Monki from '../../assets/gorilla.jfif';
import type {
	ProfileCardProps
} from '../../components/ProfileCard';
import ProgrammaToevoegen from './adminProgramma/ProgrammaToevoegen';
import ZaalToevoegen from './adminZaalToevoegen/ZaakToevoegen';
import GebruikerToevoegen from './adminGebruikerToevoegen/GebruikerToevoegen';
import GebruikerInzien from './adminGebruikerInzien/GebruikerInzien';

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

// source for tabs: https://mui.com/material-ui/react-tabs/ en de login page
function AdminPage() {
	const [value, setValue] = React.useState(0);
	const [data, setData] = React.useState<never[] | ProfileCardProps[]>([]);
	React.useEffect(() => {
		// API('gebruiker').Get(value)
		// 	.then((res) => {
		// 		if (res.status != 200) {
		// 			return;
		// 		}

		// 	});
		setData([{
			image: Monki,
			name: 'akasha monka',
			email: 'gekkefred@ninja.ninja',
			ageGroep: 'dood'
		}]);
	}, [value]);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Container maxWidth={'xl'} sx={{
			my: 4
		}}>
			<Grid container spacing={3}>
				<Grid item lg={6}
					xs={12}>
					<Card elevation={4}>
						<Tabs
							orientation="vertical"
							variant="fullWidth"
							value={value}
							onChange={handleChange}
							aria-label="Vertical tabs"
							sx={{
								borderRight: 1,
								borderColor: 'divider'
							}}>
							<Tab label="Programma toevoegen" {...a11yAccesibilityProps(0)} />
							<Tab label="Zaal toevoegen" {...a11yAccesibilityProps(1)} />
							<Tab label="Gebruiker toevoegen" {...a11yAccesibilityProps(2)} />
							<Tab label="Gebruiker inzien" {...a11yAccesibilityProps(3)} />
							<Tab label="Logout" {...a11yAccesibilityProps(4)} />
						</Tabs>
					</Card>
				</Grid>
				<Grid item lg={6}
					sm={12}
					xs={12}
				>
					<Card elevation={4} sx={{
						maxHeight: 500,
						minHeight: 500,
						overflowY:'auto',
						scrollbarWidth: 'thin',
						alignItems: 'center',
						display: 'flex',
						justifyContent: 'center'
					}}>
						<TabPanel value={value} index={0}>
							<ProgrammaToevoegen />
						</TabPanel>
						<TabPanel value={value} index={1}>
							<ZaalToevoegen />
						</TabPanel>
						<TabPanel value={value} index={2}>
							<GebruikerToevoegen />
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
	);
}

export default AdminPage;

/*
function AdminPage() : JSX.Element{
	const { theme } = React.useContext(UserContext);
	return(
		<ThemeProvider theme={theme.theme}>
			<Box style={{
				width: '100%',
				height: '100vh',
				backgroundImage: 'url('+img+')'
			}}>
				<Container style={{
					height: '100vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
					<Grid container spacing={2}
						sx={{
							mb:4
						}}>
						<Grid item>
							<Card sx={{
								width: 250,
								height: 80,
								p: 3
							}}>
								<Typography sx={{
									mb: 2
								}}>Programma uploaden (Excell)</Typography>
								<Button variant="contained" component="label">
                                Upload
									<input hidden accept="image/*"
										multiple type="file"
									/>
								</Button>
							</Card>
						</Grid>
						<Grid item>
							<Card sx={{
								width: 250,
								p: 3
							}}>
								<Typography>Gebruiker toevoegen</Typography>
								<TextField id="standard-basic" label="Naam"
									variant="standard" />
								<TextField id="standard-basic" label="Geboortedatum"
									variant="standard" />
								<TextField id="standard-basic" label="E-Mail"
									variant="standard" />
								<TextField id="standard-basic" label="Wachtwoord"
									variant="standard" />
								<TextField id="standard-basic" label="Wachtwoord bevestigen"
									variant="standard" />
								<Button variant="contained" sx={{
									mt:2
								}}>Gebruiker toevoegen</Button>
							</Card>
						</Grid>
						<Grid item>
							<Card sx={{
								width: 250,
								p:3
							}}>
								<Typography>Gebruiker inzien</Typography>
								<TextField id="standard-basic" label="Naam"
									variant="standard" />
							</Card>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</ThemeProvider>
	);
}
    
export default AdminPage;
*/
