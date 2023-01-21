import {
	Box, Button, Typography 
} from '@mui/material';
import React from 'react';
import { 
	useNavigate 
} from 'react-router-dom';

import UserContext from '../../../context/UserContext';

function Logout() {
	const { user } = React.useContext(UserContext);
	const navigate = useNavigate();
	const SignOut = React.useCallback(() => {
		localStorage.removeItem('token');
		user.setUser(null);
		navigate('/');
	},[navigate,user]);
	return (
		<Box sx={{
			display: 'flex',
			justifyItems: 'center',
			alignItems: 'center',
			alignContent: 'center',
			flexDirection: 'column',
			flexWrap: 'nowrap',
			maxWidth: 500,
		}}>
			<Typography variant="h3" align="center"
				sx={{
					marginBottom: 1,
				}}>
                Weet u zeker dat u wilt uitloggen?
			</Typography>
			<Typography variant="body1" align="center">
                Klik op de knop hieronder om uit te loggen.
			</Typography>
			<Button variant="contained" size="large"
				onClick={SignOut}
				sx={{
					mt:4,
					width: '100%'
				}}>Log uit</Button>
		</Box>
	);
}

export default Logout;