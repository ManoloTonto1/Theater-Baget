
import {
	Box, Card, Container, Grid, Tab, Tabs, Typography
} from '@mui/material';
import React from 'react';
import Logout from './adminLogout/Logout';
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

function AdminPage() {
	const [value, setValue] = React.useState(0);
	// API('gebruiker').Get(value)
	// 	.then((res) => {
	// 		if (res.status != 200) {
	// 			return;
	// 		}

	// 	});

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
