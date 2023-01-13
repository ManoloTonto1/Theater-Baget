import { Box, Card, Container, Tab, Tabs, Typography } from '@mui/material';
import { max } from 'cypress/types/lodash';
import React from 'react';
import ProfielSettings from './settings/ProfielSettings';
import ProfielTickets from './tickets/ProfielTickets';
import Logout from './logout/Logout';

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;
  
	return (
	  <div
		role="tabpanel"
		hidden={value !== index}
		id={`vertical-tabpanel-${index}`}
		aria-labelledby={`vertical-tab-${index}`}
		{...other}
	  >
		{value === index && (
		  <Box sx={{ p: 3 }}>
			<Typography>{children}</Typography>
		  </Box>
		)}
	  </div>
	);
}

function a11yProps(index: number) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
}

// source for tabs: https://mui.com/material-ui/react-tabs/ en de login page
function Profiel() {
	const [value, setValue] = React.useState(0);
  
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
	  setValue(newValue);
	};

	return (
		<Container style={{
            height: '80vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
			<Card elevation={4} sx={{ 
				height: 485,
				width: 500,
				p: 1,
				marginRight: 4,
			}}>
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
					<Tab label="Tickets" {...a11yProps(0)} />
					<Tab label="Settings" {...a11yProps(1)} />
					<Tab label="Log out" {...a11yProps(2)} />
				</Tabs>
			</Card>

			<Card elevation={4} sx={{ 
				height: 485,
				width: "fit-content",
				minWidth: 500,
				p: 1,
			}}>
				<TabPanel value={value} index={0}>
					<ProfielTickets />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<ProfielSettings />
				</TabPanel>
				<TabPanel value={value} index={2}>
					<Logout />
				</TabPanel>
			</Card>

		</Container>


	);
}

export default Profiel;