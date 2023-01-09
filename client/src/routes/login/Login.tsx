import {
 	Box, 
	Tab, 
	Tabs 
} from '@mui/material';
import Card from '@mui/material/Card';
import {
	Container
} from '@mui/system';

import React, { 
	useCallback 
} from 'react';

import SignIn from './tabs/SignIn';
import SignUp from './tabs/SignUp';

import img from '../../assets/poster.png';

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
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{
					p: 0 
				}}>
					{children}
				</Box>
			)}
		</Box>
	);
}

function tabId(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

function Login() {
	const [tab, setTab] = React.useState(0);
	
	const handleTabChange = useCallback(async (event: React.SyntheticEvent, newValue: number) => {
		setTab(newValue);
	}, []);
	
	return (
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

				<Card elevation={4} sx={{ 
					width: 750,
					p: 4,
				}}>
					< Box sx={{ 
						width: '100%' 
					}}>
						<Box sx={{ 
							borderBottom: 1, 
							borderColor: 'divider' 
						}}>
							<Tabs value={tab} onChange={handleTabChange}
								variant='fullWidth' sx={{
									ml:1, 
									mr:1
								}}>
								<Tab label="sign in" {...tabId(0)} />
								<Tab label="sign up" {...tabId(1)} />
							</Tabs>
						</Box>
						<TabPanel value={tab} index={0}>
							<SignIn />
						</TabPanel>
						<TabPanel value={tab} index={1}>
							<SignUp />
						</TabPanel>
					</Box >
				</Card>
			</Container>
		</Box>

	);
}

export default Login;