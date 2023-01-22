import {
	Box, Card, Container, Grid, Tab, Tabs, Typography
} from '@mui/material';
import React from 'react';
import BandShows from './shows/BandShows';
import BandLeden from './leden/BandLeden';
import type {
	Groep
} from '../../../components/global/globalTypes';
import API from '../../../api/apiRoutes';
import {
	useParams 
} from 'react-router-dom';
import {
	BandCard 
} from '../../../components/BandCard';
import UserContext from '../../../context/UserContext';

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
function BandProfiel() {
	const { id } = useParams();
	const [value, setValue] = React.useState(0);
	const [data, setData] = React.useState<never[] | Groep>();
	
	React.useEffect(() => {
		API('groepen')
			.Get(id)
			.then((res) => {
				setData(res.data);
			});
	}, []);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Container sx={{
			my: 4
		}}>
			<Grid container spacing={3}>
				<Grid item lg={12}
					xs={12}>
					<Card elevation={4}>
						<BandCard key='hoe' {...data as Groep} />
						<Tabs
							variant="fullWidth"
							value={value}
							onChange={handleChange}
							aria-label="Vertical tabs"
							sx={{
								borderRight: 1,
								borderColor: 'divider'
							}}>
							<Tab label="Shows" {...a11yAccesibilityProps(0)} />
							<Tab label="Leden" {...a11yAccesibilityProps(1)} />
						</Tabs>
					</Card>
				</Grid>
				<Grid item lg={12}
					sm={12}
					xs={12}
				>
					<Card elevation={4} sx={{
						maxHeight: 500,
						minHeight: 500,
						overflowY: 'auto'
					}}>
						<TabPanel value={value} index={0}>
							<BandShows />
						</TabPanel>
						<TabPanel value={value} index={1}>
							<BandLeden />
						</TabPanel>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
}

export default BandProfiel;