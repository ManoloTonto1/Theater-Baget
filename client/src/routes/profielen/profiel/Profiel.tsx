import {
	Box, Card, Container, Grid, Tab, Tabs, Typography
} from '@mui/material';
import React from 'react';
import ProfielSettings from '../settings/ProfielSettings';
import ProfielTickets from '../tickets/ProfielTickets';
import BandlidShows from '../bandlidProfiel/shows/BandlidShows';
import BandlidBands from '../bandlidProfiel/bands/BandlidBands';
import Logout from '../logout/Logout';
import Monki from '../../../assets/gorilla.jfif';
import Avatar from '@mui/material/Avatar';
import type {
	ProfileCardProps
} from '../../../components/ProfileCard';
import {
	ProfileCard
} from '../../../components/ProfileCard';

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
function Profiel() {
	const [value, setValue] = React.useState(0);
	const [data, setData] = React.useState<never[] | ProfileCardProps[]>([]);

	// important!!! needs logic
	const isBandLid = true;
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
						{data.map((card) => {
							return <ProfileCard key={card.name} {...card} />;
						})}
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
							<Tab label="Log out" {...a11yAccesibilityProps(0)} />
							<Tab label="Settings" {...a11yAccesibilityProps(1)} />
							<Tab label="Tickets" {...a11yAccesibilityProps(2)} />
							{ isBandLid && <Tab label="Bands" {...a11yAccesibilityProps(3)} />}
							{ isBandLid && <Tab label="Shows" {...a11yAccesibilityProps(4)} />}
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
							<Logout />
						</TabPanel>
						<TabPanel value={value} index={1}>
							<ProfielSettings />
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
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
}

export default Profiel;